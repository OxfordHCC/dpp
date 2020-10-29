package me.zugri.ptracker

import android.app.Service
import android.os.Binder

abstract class DetectionService : Service() {

	/** 

	 Most Detection Services will require the user to grant the app
	 certain permissions. These permissions need to be declared by each
	 Detection Service in their permissions property

	 */
	abstract val permissions: Array<String>

	/**

	 Unique string identifying the service

	 */
	abstract val id: String

	/** 

	 Display name of the service, to be displayed in the settings menu

	 */
	abstract val name: String

	/**

	 Boolean representing the toggle status of the service

	 */
    abstract var status: Boolean

	/**

	 Called when service is successfuly started by the service manager

	 */
    abstract fun start()
	
	/** 
	 
	 Called when the service is stopped by the service manager 
	 
	 */
	abstract fun stop()

	/**
	 
	 Used by binding components to get access to an instance of this class
	 
	 */
    inner class LocalBinder : Binder() {
        fun getService(): DetectionService = this@DetectionService
    }
}
