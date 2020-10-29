package me.zugri.ptracker

import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.provider.Settings
import android.view.View
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.material.snackbar.Snackbar
import kotlin.random.Random

class PermissionManager(val activity: Activity) {
    private val callbackMap = HashMap<Int,Pair<() -> Unit,() -> Unit>>()
    private fun permissionGranted(permissions: Array<String>):Boolean{
        permissions.forEach{
            if(ContextCompat.checkSelfPermission(activity, it) == PackageManager.PERMISSION_DENIED){
                return false
            }
        }
        return true
    }

    private fun shouldProvideRationale(permissions: Array<String>): Boolean{
        //if any of the permissions needs it, then true
        permissions.forEach {
            if(ActivityCompat.shouldShowRequestPermissionRationale(activity, it)){
                return true
            }
        }
        return false
    }

    private fun requestPermissions(permissions: Array<String>, reqCode: Int){
        Lumber.log("Requesting permission")
        ActivityCompat.requestPermissions(
            activity,
            permissions,
            reqCode
        )
    }

    public fun callback(
		requestCode: Int,
		permissions: Array<String?>,
		grantResults: IntArray){

		val cb = callbackMap[requestCode]

		when {
            grantResults.isEmpty() -> {
				// If user interaction was interrupted, the permission
				// request is cancelled

				Lumber.log("User interaction was cancelled." +
						   " Permission request cancelled.")
            }
            grantResults[0] == PackageManager.PERMISSION_GRANTED -> {
				// Permission was granted.
                cb?.first!!()
                //mService?.requestLocationUpdates()
            }
            else -> { // Permission denied.
                cb?.second!!()

            }
        }
    }

    fun getOrFailPermissions(
		permissions: Array<String>,
		onSuccess: () -> Unit,
		onError: () -> Unit){

        if(permissionGranted(permissions)){
            return onSuccess()
        }
		
        val randomInt = Random.nextInt(65536)

        val onceSuccess:() -> Unit = {
            onSuccess()
            callbackMap.remove(randomInt)
        }

        val onceError:() -> Unit = {
            onError()
            Snackbar.make(
                activity.findViewById<View>(R.id.activity_main),
                R.string.permission_denied_explanation,
                Snackbar.LENGTH_INDEFINITE
            )
//            .setAction(R.string.settings, View.OnClickListener {
//                // Build intent that displays the App settings screen.
//                val intent = Intent()
//                intent.action = Settings.ACTION_APPLICATION_DETAILS_SETTINGS
//                val uri = Uri.fromParts(
//                    "package",
//                    BuildConfig.APPLICATION_ID,
//                    null
//                )
//                intent.data = uri
//                intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
//                activity.startActivity(intent)
//            })
            .show()
            callbackMap.remove(randomInt)
        }

        this.callbackMap[randomInt] = Pair(onceSuccess, onceError)
        requestPermissionsWithRationale(permissions, randomInt)
    }

    private fun requestPermissionsWithRationale(
		permissions: Array<String>,
		reqCode: Int){
		
        if (shouldProvideRationale(permissions)) {
            Snackbar.make(
                activity.findViewById<View>(R.id.activity_main),
                R.string.permission_rationale,
                Snackbar.LENGTH_INDEFINITE
            ).setAction(R.string.ok) {
                // Request permission
                requestPermissions(permissions, reqCode)
            }.show()
        } else {
            requestPermissions(permissions, reqCode)
        }
    }
}
