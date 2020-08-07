package me.zugri.ptracker

import android.app.Service
import android.content.Context
import android.content.Intent
import android.os.IBinder
import android.util.EventLog
import android.webkit.WebView

//Acts like a buffer for events between webview and native. Different Services will want to send
//events to an instance of this class.
//It uses an EventQueue built on top of sqlite to store events while the app is in background.
class EventEmitter(context: Context){
    private var webView: DPPWebView? = null
    private var eventQueue: EventQueue = EventQueue.getInstance(context)

    fun bindWebView(view: DPPWebView){
        webView = view
    }

    fun post(event: WVEvent){
        eventQueue.addEvent(event)
        if(webView != null && webView!!.loadedWeb){
            flushQueue()
        }
    }

    fun flushQueue(){
        Lumber.log("Flushing queue to webview")
        val events = eventQueue.flush()
        webView?.sendEvent(events, onSuccess = {
            Lumber.log("Flushed successfully. Deleting from queue ")
            try {
                eventQueue.truncate(events.last().timestamp)
            }catch(e: NoSuchElementException){
                //do nothing
            }
        })
    }

	fun post(events: Collection<WVEvent>){
		events.forEach{event -> post(event)}
	}

    companion object {
        private var instance: EventEmitter? = null
        fun getInstance(context: Context): EventEmitter
        {
            if(instance == null){
                instance = EventEmitter(context)
            }
            return instance!!
        }
    }
}
