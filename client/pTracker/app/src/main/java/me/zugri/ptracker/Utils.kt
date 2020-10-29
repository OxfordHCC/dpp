package me.zugri.ptracker

import android.content.Context
import android.location.Location
import java.text.DateFormat
import java.util.*


internal object Utils {
    /**
     * Returns the `location` object as a human readable string.
     * @param location  The [Location].
     */
    fun getLocationText(location: Location?): String {
		if(location == null){
			return "Unknown location"
		}else{
			return "(" + location.latitude + ", " + location.longitude + ")"
		}								   
    }

    fun getLocationTitle(context: Context): String {
        return context.getString(
            R.string.location_updated,
            DateFormat.getDateTimeInstance().format(Date())
        )
    }
}
