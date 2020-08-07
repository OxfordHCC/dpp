package me.zugri.ptracker

import android.content.*
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.os.IBinder
import android.provider.Settings
import android.view.View
import android.webkit.*
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.snackbar.Snackbar

const val REQUEST_PERMISSIONS_REQUEST_CODE: Int = 34 //idk why 34


class MainActivity : AppCompatActivity() {

    // The BroadcastReceiver used to listen from broadcasts from the service.
    private lateinit var webView: DPPWebView

    // A reference to the service used to get location updates.
    private var mService: LocationService? = null

    // Tracks the bound state of the service.
    private var mBound = false
    private lateinit var permissionManager: PermissionManager
    private lateinit var serviceManager: ServiceManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        WebView.setWebContentsDebuggingEnabled(true)

        permissionManager = PermissionManager(this)
        serviceManager = ServiceManager(applicationContext, permissionManager)
        webView = DPPWebView(applicationContext, serviceManager)

        setContentView(webView)
    }

    override fun onStart() {
        super.onStart()
        Lumber.log("mainActivity onStart")
        serviceManager.init()
    }

    override fun onStop() {
        serviceManager.unbindAll()
        super.onStop()
    }


    //Callback received when a permissions request has been completed.
    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String?>, grantResults: IntArray) {
        Lumber.log("onRequestPermissionResult")
        permissionManager.callback(requestCode, permissions, grantResults)
    }
}

