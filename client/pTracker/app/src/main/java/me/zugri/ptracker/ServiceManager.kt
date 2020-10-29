package me.zugri.ptracker

import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.ServiceConnection
import android.os.IBinder


class ServiceManager(
	val context: Context,
	private val permissionManager: PermissionManager){
	
	//map service id to instance of detection service
    private val serviceHandlers = HashMap<String, DetectionService>()

    private val serviceConnections = HashMap<String, ServiceConnection>()

	//shared preference object used to persist toggled status of detection services
	private val sharedPref = context.getSharedPreferences(
		"detection_services",
		Context.MODE_PRIVATE
	)

	/**
	 
	 Implemented DetectionServices are registered here.
	 
	 */
    val definitions = hashMapOf(
        "location" to Triple(
			LocationService::class.java,
			LocationService.PERMISSION_LIST,
			"Location"
		),
        "udp" to Triple(
			UDPService::class.java,
			UDPService.PERMISSION_LIST,
			"UDP"
		)
    )

    fun init(){
        Lumber.log("ServiceManager: Initializing...")
        definitions.forEach { (id, _) ->
            startIfNeeded((id))
        }
        Lumber.log("ServiceManager: Done init.")
    }

	/** 
	 
	 Toggle the status of service. Calls the callback function with
	 the new status.
	 
	 */
    fun toggle(id: String, cb: (status: Boolean) -> Unit){
        if(isRunning(id)){
            stopService(id, cb)
            return
        }
        startService(id, cb)
        return
    }

	/**
	 
	 Return list of available services. Each element in the list is a
	 triple containing id, name and its toggle statuts

	 */
    fun getServices(): List<Triple<*,*,*>>{
        return definitions.map{(
			id,
			triple: Triple<Class<out DetectionService>, Array<String>, String>) ->
									Triple(
										id,
										triple.third,
										serviceHandlers.containsKey(id)
									)
        }
    }

	
    fun getService(id: String): DetectionService?{
        return serviceHandlers[id]
    }

    fun unbindAll(){
        serviceConnections.forEach {(_, connection) ->
            context.unbindService(connection)
        }
    }

    private fun bindService(id: String, cb: ((status: Boolean) -> Unit )?){
        val serviceClass = definitions[id]?.first ?: return
        val flags = Context.BIND_AUTO_CREATE
        val intent = Intent(context, serviceClass)
        val serviceConnection = ManagedServiceConnection(id)

        serviceConnection.onConnect { service ->
            //check if we have permissions for service
            permissionManager.getOrFailPermissions(service.permissions,
                onSuccess = {
                    service.start()
                    with (sharedPref.edit()) {
                        putBoolean(id, true)
                        commit()
                    }
                    cb?.let{ it(true) }
                },
                onError = {
                    stopService(id, cb)
                }
            )
        }
        serviceConnection.onDisconnect {
            stopService(id, null)
        }

        context.bindService(intent, serviceConnection, flags)
    }
	
    private fun startService(id: String, cb:((status: Boolean) -> Unit)?) {
        bindService(id, cb)
    }
	
    private fun isRunning(id: String): Boolean{
        if(serviceHandlers[id] == null){
            return false
        }
        return serviceHandlers[id]!!.status
    }
	
    private fun stopService(id: String, cb:((status: Boolean) -> Unit)?){
        val serviceHandler = serviceHandlers[id]
        val serviceConnection = serviceConnections[id]

        if(serviceHandler != null){
            serviceHandler.stop()
            serviceHandlers.remove(id)
        }
        if(serviceConnection !== null){
            context.unbindService(serviceConnection)
            serviceConnections.remove(id)
        }
        with (sharedPref.edit()) {
            putBoolean(id, false)
            commit()
        }
        cb?.let{ it(false) }
    }

	// Start service by @id if its status is enabled.
    private fun startIfNeeded(id: String){
        val enabled = sharedPref.getBoolean(id, false)
        if(enabled){
            startService(id, null)
        }
    }


    inner class ManagedServiceConnection(val id: String): ServiceConnection{
        private var connectCb: ((service: DetectionService) -> Unit)? = null
        private var disconnectCb: ((name: ComponentName?) -> Unit)? = null


        fun onConnect(cb: (service: DetectionService) -> Unit){
            connectCb = cb
        }
        fun onDisconnect(cb: (name: ComponentName?) -> Unit){
            disconnectCb = cb
        }

        override fun onServiceConnected(name: ComponentName?, binder: IBinder?) {
            Lumber.log("service connected")
            val dBinder: DetectionService.LocalBinder = binder as DetectionService.LocalBinder
            val service = dBinder.getService()
            serviceHandlers[id] = service
            connectCb?.let { it(service) }
        }

        override fun onServiceDisconnected(name: ComponentName?) {
            disconnectCb?.let { it(name) }
        }
    }
}
