package me.zugri.ptracker

import android.app.Service
import android.os.Binder

abstract class DetectionService : Service() {
    abstract val permissions: Array<String>
    abstract val id: String
    abstract val name: String
    abstract var status: Boolean

    abstract fun start()
    abstract fun stop()

    //Class used for the client Binder.  Since this service runs in the same process as its
    //clients, we don't need to deal with IPC.
    inner class LocalBinder : Binder() {
        fun getService(): DetectionService = this@DetectionService
    }
}