package me.zugri.ptracker

import android.util.Log

//just a logging util
object Lumber {
    private const val TAG = "pTRACKER"

    fun log(message: String){
        Log.i(TAG, message)
    }

    fun err(message: String){
        Log.e(TAG, message)
    }

    fun warn(message: String){
        Log.w(TAG, message)
    }
}