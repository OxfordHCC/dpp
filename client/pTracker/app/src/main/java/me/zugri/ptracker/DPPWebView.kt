package me.zugri.ptracker

import android.content.Context
import android.webkit.JavascriptInterface
import android.webkit.WebSettings
import android.webkit.WebView
import org.json.JSONArray
import org.json.JSONObject
import java.util.*
import java.util.concurrent.Executors
import java.util.concurrent.ScheduledExecutorService
import java.util.concurrent.TimeUnit
import kotlin.collections.HashMap

import kotlinx.serialization.*
import kotlinx.serialization.builtins.list
import kotlinx.serialization.json.*


data class WVCallback(val onSuccess: ((Any) -> Unit)?, val onError: ((Any) -> Unit)?)

class DPPWebView(context: Context, private val serviceManager: ServiceManager) : WebView(context) {
    var loadedWeb = false;
    var eventEmitter: EventEmitter
    var callbackMap: HashMap<String, WVCallback> = HashMap()
    var callbackTimeout:Long = 5000
    private val scheduler: ScheduledExecutorService = Executors.newScheduledThreadPool(1)
    private val jsonx = Json(JsonConfiguration(ignoreUnknownKeys = true))

    init {
        this.webViewClient = UnsafeWebClient()
        this.settings.javaScriptEnabled = true
        this.settings.allowContentAccess = true
        this.settings.allowFileAccess = true
        this.settings.javaScriptCanOpenWindowsAutomatically = true
        this.settings.allowFileAccessFromFileURLs = true
        this.settings.allowUniversalAccessFromFileURLs = true
        this.settings.layoutAlgorithm = WebSettings.LayoutAlgorithm.NORMAL
        this.settings.setSupportZoom(false)
        this.addJavascriptInterface(JsObject(), "Android")
        this.loadUrl("file:///android_asset/index.html")

        eventEmitter = EventEmitter.getInstance(context)
        eventEmitter.bindWebView(this)
        Lumber.log("DPP WebView loaded")
    }

    fun sendEvent(event: WVEvent, onError:((Any) -> Unit)? = null, onSuccess:((Any) -> Unit)? = null){
        return sendEvent(listOf(event), onError, onSuccess)
    }

    fun sendEvent(events: List<WVEvent>, onError: ((Any) -> Unit)? = null, onSuccess:((Any) -> Unit)? = null){
        try {
            val jsonArr = JSONArray(events.map{ it.toJSONObject() })
            val id = UUID.randomUUID().toString()
            val message = JSONObject()
            message.put("id", id)
            message.put("type", "event")
            message.put("data", jsonArr)

            val scheduledTimeout = scheduler.schedule({
                onError?.invoke(JSONObject("{ error: \"TIMEOUT\" }"))
                callbackMap.remove(message["id"])
            }, callbackTimeout, TimeUnit.MILLISECONDS)

            val successCb = fun(data: Any){
                scheduledTimeout.cancel(false)
                onSuccess?.invoke(data)
            }
            val errorCb = fun(err: Any){
                scheduledTimeout.cancel(false)
                onError?.invoke(err)
            }
            val cb = WVCallback(successCb, errorCb)
            callbackMap[id] = cb
            sendMessage(message)
        }catch(err: Error){
            Lumber.err(err.message ?: "Some error happened in sendEvent")
        }
    }

    private fun doReply(message: JSONObject, error: JSONObject?, data: Any?): JSONObject{
        return JSONObject("""{
            id: ${message["id"]},
            type: "reply",
            data: $data,
            error: $error
        }""".trimIndent())
    }

    private fun replyError(message: JSONObject, error: JSONObject): JSONObject{
        return doReply(message, error, null)
    }
    private fun replyData(message: JSONObject, data: JSONArray?): JSONObject{
        return doReply(message, null, data)
    }
    private fun replyData(message: JSONObject,  data: JSONObject?): JSONObject{
        return doReply(message, null, data)
    }

    private fun sendMessage(message: JSONObject){
        try {
            Lumber.log("sendMessage : $message")
            this.post(Runnable {
                this.evaluateJavascript("AndroidInterface.receive($message)", null)
            })
        }catch(err: Error){
            Lumber.err(err.message ?: "Some error happened in sendMessage")
        }
    }

    private fun handleReply(message: JSONObject){
        Lumber.log("handle reply to ${message["id"]}, error: ${message.has("error")}")
        Lumber.log("${message["id"]}: $message")
        val callback = callbackMap[message["id"]] ?: return

        if(message.has("error")){
            callback.onError?.invoke(message["error"])
        }else {
            callback.onSuccess?.invoke(message["data"])
        }
        callbackMap.remove(message["id"])
    }

    private fun handleToggleService(message: JSONObject){
        val data: JSONObject = message["data"] as JSONObject
        val id: String = data["id"] as String

        serviceManager.toggle(id) { status ->
            sendMessage(replyData(message, JSONObject(" { status: $status }")))
        }
    }

    private fun handleGetDetectionServices(message: JSONObject){
        val services = serviceManager.getServices().map{
            JSONObject("""{
                id: ${it.first},
                name: ${it.second},
                status: ${it.third}
            }""".trimIndent())
        }
        sendMessage(replyData(message, JSONArray(services)))
    }

    private fun handleWebViewReady(message: JSONObject){
        loadedWeb = true
        eventEmitter.flushQueue()
        sendMessage(replyData(message, JSONObject("{ data: \"ok\" }")))
        return
    }

    private fun handleNew(message: JSONObject){
        val type = message["type"]

        if(type == "toggle_detection_service"){
            return handleToggleService(message)
        }

        if(type == "get_detection_services"){
            return handleGetDetectionServices(message)
        }

        if(type == "test") {
            return sendMessage(replyData(message, JSONObject("{ data: ${message["data"]} }")))
        }

        if(type == "sync_udp"){
            try {
                val udpService = serviceManager.getService("udp") as UDPService
                val msg = jsonx.parse(SyncUDPMessage.serializer(), message["data"].toString())
                Lumber.log("entries length: ${msg.entries.size}")
                udpService.sync(msg.entries)
                sendMessage(replyData(message, JSONObject()))
            }catch(e: Exception){
                sendMessage(replyError(message, JSONObject("{ \"error\": \"$e\" }")))
            }
        }

        if(type == WVEvent.WEBVIEW_READY){
            handleWebViewReady(message)
        }

        throw Error("message type unknown: ${message["type"]}")
    }

    private fun receiveMessage(message: JSONObject){
        if(!message.has("id")){
            return sendMessage(replyError(message, JSONObject("{ message: \"Malformed message. Missing id.\"}")))
        }

        try{
            val type = message["type"]
            if(type == "reply"){
                return handleReply(message)
            }
            handleNew(message)
//            result?.let { sendMessage(reply(message, null, result))  }
        }catch(error: Error){
            sendMessage(replyError(message, JSONObject("{ message: \"${error.message}\" }")))
        }
        return
    }

    private inner class JsObject{
        @JavascriptInterface
        fun sendMessage(message: String){
            Lumber.log("JS Interface message: $message")
            return receiveMessage(JSONObject(message))
        }
    }

    @Serializable
    private inner class Message<T>(val type: String, val data: T, val id: String)

    @Serializable
    private inner class SyncUDPMessage(val entries: List<UDPDevice>)
}