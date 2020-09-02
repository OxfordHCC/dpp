package me.zugri.ptracker

import android.Manifest
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.net.wifi.WifiManager
import android.os.IBinder
import kotlinx.serialization.Serializable
import org.json.JSONException
import org.json.JSONObject
import java.net.DatagramPacket
import java.net.DatagramSocket
import java.net.InetSocketAddress

import kotlinx.serialization.*
import kotlinx.serialization.json.*
import java.net.NetworkInterface


//UDP service for detecting devices using UDP.

// The current implementation requires devices to periodically transmit packets in order to signal
//their presence.

//When a device is first detected, it gets added to a map and an event is sent to the event emitter.
//Every Tc seconds, the service removes devices from the map that have not signaled since the
//previous clean-up. When a device is removed, an event is transmitted to the event emitter.

//This <enter, exit> pair of events describes the approximate window of time of interaction with the
//device. This is similar to how GeoFencing exposes events on android. An alternative would be to
//transmit <enter, exit> events based on network changes. We opted for the heartbeat version to

//the udp service listens for udp broadcasts on port 26843 (COVID)
//Since the datagram socket is blocking, we need to start listening on a separate thread
//Likewise, we create a spare thread for clean-up.
class UDPService : DetectionService() {
    override val permissions: Array<String> = arrayOf()
    override val id: String = "udp"
    override val name: String = "UDP"
    override var status: Boolean = false

    private lateinit var eventEmitter: EventEmitter
    private val mBinder: IBinder = LocalBinder()
    private var deviceMap:MutableMap<String, JSONObject> = HashMap()
    private var statusMap:MutableMap<String, Boolean> = HashMap()
    private var multicastLock: WifiManager.MulticastLock? = null
    private lateinit var sharedPreferences: SharedPreferences
    private lateinit var sharedPrefEditor: SharedPreferences.Editor

    fun onDetectDevice(device: JSONObject) {
        val devUUID = (device["pManifest"] as JSONObject)["uuid"] as String
        if (!statusMap.contains(devUUID)) {
            deviceMap[devUUID] = device
            eventEmitter.post(createEnterEvent(device))
        }
        markActive(devUUID)
    }

    private fun markActive(id: String) {
        statusMap[id] = true
    }

    private fun createEnterEvent(device: JSONObject): WVEvent{
        return WVEvent(
            WVEvent.UDP_ENTER,
            System.currentTimeMillis(),
            device
        )
    }

    private fun createExitEvent(device: UDPDevice): WVEvent{
        return WVEvent(
            WVEvent.UDP_EXIT,
            System.currentTimeMillis(),
            JSONObject(Json.stringify(UDPDevice.serializer(), device))
        )
    }
	private fun createExitEvent(device: JSONObject): WVEvent{
		return WVEvent(
			WVEvent.UDP_EXIT,
			System.currentTimeMillis(),
			device
		)
	}

    fun sync(devices: List<UDPDevice>){
        val (_, webviewOnly) = devices.partition {device ->
            val devUUID = device.pManifest.uuid
            return@partition statusMap.containsKey(devUUID)
        }
        eventEmitter.post(webviewOnly.map{createExitEvent(it)})
    }

    //every <Tc> seconds, remove all inactive, mark all active as inactive
	fun cleanInactive(){
        Lumber.log("UDP: cleaning inactive devices")
        //split into active/inactive
		val (active, inactive) = statusMap.keys.partition {
            statusMap[it] == true
        }

        //compile exit events for inactive
        val exitEvents = inactive.map { id -> createExitEvent(deviceMap[id]!!) }
        //post events to webview
        eventEmitter.post(exitEvents)
        //remove from device map and status map
        deviceMap = deviceMap.filter{(key: String) -> active.contains(key) }.toMutableMap()
        statusMap = statusMap.filter{(key:String) -> active.contains(key)}.toMutableMap()
        //mark remaining as inactive
        statusMap = statusMap.mapValues{(key:String) -> false}.toMutableMap()
	}

    override fun start() {
        startService(Intent(applicationContext, UDPService::class.java))
    }

    override fun stop() {
        status = false
        stopSelf()
        Lumber.log("UDP Service stopped")
    }

    override fun onCreate(){
        sharedPreferences = getSharedPreferences("udp", Context.MODE_PRIVATE)
        sharedPrefEditor = sharedPreferences.edit()
        val wm = applicationContext.getSystemService(Context.WIFI_SERVICE) as WifiManager
        //acquiring multicast lock may not be needed
        multicastLock = wm.createMulticastLock("ptracker")
        multicastLock!!.setReferenceCounted(true)
        multicastLock!!.acquire()

        eventEmitter = EventEmitter.getInstance(applicationContext)
        Lumber.log( "!UDP Service created")
    }

    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        Lumber.log("Called UDP onStartCommand")
        val listenThread = ListeningThread()
		val cleanThread = CleanUpThread()
        listenThread.priority = Thread.MAX_PRIORITY
		status = true
        listenThread.start()
		cleanThread.start()

        // If we get killed, after returning from here, restart
        return START_STICKY
    }

    override fun onBind(p0: Intent?): IBinder? {
        return mBinder
    }

    override fun onRebind(intent: Intent?) {
        stopForeground(true)
    }

    override fun onDestroy() {
        super.onDestroy()
        Lumber.log("UPD on Destroy")
        if(multicastLock != null){
            multicastLock!!.release();
            multicastLock = null;
        }
    }

    override fun onUnbind(intent: Intent?): Boolean {
        startForeground(
            NotificationCreator.NOTIFICATION_ID,
            NotificationCreator.getNotification(this, null)
        )
        return true
    }

    inner class ListeningThread : Thread(){
        override fun run(){
            Lumber.log("UDP thread started")
            val s = DatagramSocket(null)
            s.reuseAddress = true
            s.broadcast = true
            s.receiveBufferSize = 100

            s.bind(InetSocketAddress("0.0.0.0",PORT))
            while(status){
                Lumber.log("UDP service: waiting for udp packet...")
                val byteArr = ByteArray(1024)
                val dataPacket = DatagramPacket(byteArr, byteArr.size)
                s.receive(dataPacket)
                val message = String(dataPacket.data)
                Lumber.log("UDP service: got UDP packet: $message")

                try {
                    val deviceJSON = JSONObject(message)
                    onDetectDevice(deviceJSON)
                }catch(err: JSONException) {
                    Lumber.log("failed to convert to json")
                }catch(err: Exception){
                    Lumber.log("other error in udp thread")
                    Lumber.log(err.toString())
                }
            }
            if(!s.isClosed){
                s.close()
            }
        }
    }

	inner class CleanUpThread : Thread(){
		override fun run(){
			while(status){
                /*var now = System.currentTimeMillis()
                sharedPrefEditor.putLong("last_online", now)
                sharedPreferences.apply(){
                    eventEmitter.post(WVEvent("udp_heartbeat", now, JSONObject("")))
                }*/
				cleanInactive()
				sleep(Tc)
			}
			cleanInactive()
		}
	}

    companion object{
        val PERMISSION_LIST:Array<String> = arrayOf(
            Manifest.permission.ACCESS_NETWORK_STATE,
            Manifest.permission.ACCESS_WIFI_STATE,
            Manifest.permission.INTERNET,
            Manifest.permission.CHANGE_WIFI_MULTICAST_STATE
        )
        const val PORT = 9000
		const val Tc : Long = 1000*30 //30 seconds
    }
}

@Serializable
class PManifest(val uuid: String)

@Serializable
class UDPDevice(val pManifest: PManifest)

