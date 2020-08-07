package me.zugri.ptracker

import android.Manifest
import android.app.*
import android.content.Intent
import android.location.Location
import android.os.*
import com.google.android.gms.location.*
import org.json.JSONObject

class LocationService : DetectionService() {
    private val mBinder: IBinder = LocalBinder()
    private lateinit var mNotificationManager: NotificationManager

    //Contains parameters used by [com.google.android.gms.location.FusedLocationProviderApi].
    private var mLocationRequest: LocationRequest? = null

    //Provides access to the Fused Location Provider API.
    private lateinit var mFusedLocationClient: FusedLocationProviderClient

    //Callback for changes in location.
    private var mLocationCallback: LocationCallback? = null
    private var lastLocation: Location? = null

    private lateinit var eventEmitter: EventEmitter
    private var inForeground: Boolean = false

    override fun onCreate() {
        Lumber.log("service on create")
        mFusedLocationClient = LocationServices.getFusedLocationProviderClient(this)
        NotificationCreator.init(this)
        mLocationCallback = object : LocationCallback() {
            override fun onLocationResult(locationResult: LocationResult) {
                super.onLocationResult(locationResult)
                onNewLocation(locationResult.lastLocation)
            }
        }

        eventEmitter = EventEmitter.getInstance(applicationContext)
        createLocationRequest()
        populateLastLocation()
        if(lastLocation != null){
            NotificationCreator.setLastLocation(lastLocation!!)
        }

        mNotificationManager = NotificationCreator.getNotificationManager()
    }

    // Called when a client (MainActivity in case of this sample) comes to the foreground
    // and binds with this service. The service should cease to be a foreground service
    // when that happens.
    override fun onBind(intent: Intent): IBinder {
        Lumber.log( "in onBind()")
        inForeground = false
        return mBinder
    }

    // Called when a client (MainActivity in case of this sample) returns to the foreground
    // and binds once again with this service. The service should cease to be a foreground
    // service when that happens.
    override fun onRebind(intent: Intent) {
        Lumber.log( "in onRebind()")
        stopForeground(true)
        inForeground = false
        super.onRebind(intent)
    }

    override fun onUnbind(intent: Intent): Boolean {
        Lumber.log( "Last client unbound from location service")
        Lumber.log( "Starting foreground service")
        startForeground(
            NotificationCreator.NOTIFICATION_ID,
            NotificationCreator.getNotification(this, null)
        )
        inForeground = true
        return true // Ensures onRebind() is called when a client re-binds.
    }

    override fun onDestroy() {
        Lumber.log("service onDestroy")
    }

    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        try {
            mFusedLocationClient.requestLocationUpdates(
                mLocationRequest,
                mLocationCallback,
                Looper.myLooper()
            )
            status = true
        } catch (unlikely: SecurityException) {
            Lumber.err("Lost location permission. Could not request updates. $unlikely")
        }

        // If we get killed, after returning from here, restart
        return START_STICKY
    }

    //Makes a request for location updates.
    //TODO: Handle error
    private fun requestLocationUpdates() {
        Lumber.log( "Requesting location updates")
        startService(Intent(applicationContext, LocationService::class.java))
    }

    //Removes location updates.
    //TODO: handle error
    private fun removeLocationUpdates() {
        Lumber.log( "Removing location updates")
        try {
            mFusedLocationClient.removeLocationUpdates(mLocationCallback)
            status = false
            stopSelf()
        } catch (unlikely: SecurityException) {
            Lumber.err("Lost location permission. Could not remove updates. $unlikely")
        }
    }

    private fun populateLastLocation(){
        try{
            mFusedLocationClient.lastLocation.addOnCompleteListener { task ->
                if (task.isSuccessful && task.result != null) {
                    lastLocation = task.result
                } else {
                    Lumber.warn("Failed to get location.")
                }
            }
        }catch(err: SecurityException){
            Lumber.err("Lost location permission.$err")
        }
    }

    private fun locationToWVEvent(location: Location): WVEvent{
        val data = JSONObject("""{
            latitude: ${location.latitude},
            longitude: ${location.longitude},
            accuracy: ${location.accuracy}
        }""".trimIndent())
        val timestamp = location.time
        return WVEvent(WVEvent.LOCATION_UPDATE, timestamp, data)
    }

    private fun onNewLocation(location: Location) {
        Lumber.log( "New location: $location")
        if(location.accuracy > MIN_ACCURACY){
            return
        }
        lastLocation = location
        eventEmitter.post(locationToWVEvent(location))
        if (runningInForeground()) {
            mNotificationManager.notify(
                NotificationCreator.NOTIFICATION_ID,
                NotificationCreator.getNotification(this, location)
            )
        }
    }

    //Sets the location request parameters.
    private fun createLocationRequest() {
        mLocationRequest = LocationRequest()
        mLocationRequest!!.interval = UPDATE_INTERVAL_IN_MILLISECONDS
        mLocationRequest!!.fastestInterval = FASTEST_UPDATE_INTERVAL_IN_MILLISECONDS
        mLocationRequest!!.priority = LocationRequest.PRIORITY_HIGH_ACCURACY
    }

//    //Class used for the client Binder.  Since this service runs in the same process as its
//    //clients, we don't need to deal with IPC.
//    inner class LocalBinder : Binder() {
//        fun getService(): LocationService = this@LocationService
//    }

    //Returns true if this is a foreground service.
    private fun runningInForeground(): Boolean {
        return inForeground
    }

    companion object {
        val MIN_ACCURACY = 50
        val PERMISSION_LIST = arrayOf(
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_BACKGROUND_LOCATION
        )
        private const val PACKAGE_NAME = "dpp"
        const val EXTRA_STARTED_FROM_NOTIFICATION = "${PACKAGE_NAME}.started_from_notification"

        //The desired interval for location updates. Inexact. Updates may be more or less frequent.
        private const val UPDATE_INTERVAL_IN_MILLISECONDS: Long = 10000

        //The fastest rate for active location updates. Updates will never be more frequent
        //than this value.
        private const val FASTEST_UPDATE_INTERVAL_IN_MILLISECONDS = UPDATE_INTERVAL_IN_MILLISECONDS / 2
    }

    override val permissions: Array<String>
        get() = PERMISSION_LIST
    override val id: String
        get() = "location"
    override val name: String
        get() = "Location"
    override var status: Boolean = false

    override fun start() {
        requestLocationUpdates()
    }

    override fun stop() {
        removeLocationUpdates()
    }
}