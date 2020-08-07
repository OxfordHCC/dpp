package me.zugri.ptracker

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.graphics.drawable.Icon
import android.location.Location


class NotificationCreator {

    companion object{
        const val NOTIFICATION_ID = 12345678
        const val CHANNEL_ID = "notif_channel"
        private var lastLocation: Location? = null
        private var notification: Notification? = null
        private lateinit var mNotificationManager: NotificationManager
        private lateinit var ctx: Context
        private var initialized: Boolean = false

        fun init(context: Context){
            if(initialized){
                return
            }

            ctx = context
            mNotificationManager = ctx.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            val name: CharSequence = ctx.getString(R.string.app_name)
            val mChannel = NotificationChannel(CHANNEL_ID, name, NotificationManager.IMPORTANCE_DEFAULT)
            // Set the Notification Channel for the Notification Manager.
            mNotificationManager.createNotificationChannel(mChannel)
        }

        //TODO: replace with call to the location service inside getNotification
        fun setLastLocation(loc: Location){
            lastLocation = loc
        }

        fun getNotificationManager(): NotificationManager{
            return mNotificationManager
        }

        //not sure if passing the context is right? Since we already init with a context, perhaps
        //it should use that... TODO: investigate
        fun getNotification(context: Context, _mLocation: Location?): Notification{
            if(_mLocation != null){
                setLastLocation((_mLocation));
            }
            val mLocation = lastLocation
            val intent = Intent(context, LocationService::class.java)
            val text: CharSequence = Utils.getLocationText(mLocation)
            // Extra to help us figure out if we arrived in onStartCommand via the notification or not.
            intent.putExtra(LocationService.EXTRA_STARTED_FROM_NOTIFICATION, true)

            // The PendingIntent that leads to a call to onStartCommand() in this service.
            val servicePendingIntent = PendingIntent.getService(
                context, 0, intent,
                PendingIntent.FLAG_UPDATE_CURRENT
            )

            // The PendingIntent to launch activity.
            val activityPendingIntent = PendingIntent.getActivity(
                context, 0,
                Intent(context, MainActivity::class.java), 0
            )

            val launchActivityAction = Notification.Action.Builder(
                Icon.createWithResource(context, me.zugri.ptracker.R.drawable.ic_stat_name),
                context.getString(me.zugri.ptracker.R.string.launch_activity),
                activityPendingIntent
            ).build()

            val stopServiceAction = Notification.Action.Builder(
                Icon.createWithResource(context, me.zugri.ptracker.R.drawable.ic_stat_name),
                context.getString(me.zugri.ptracker.R.string.remove_location_updates),
                servicePendingIntent
            ).build()

            val builder = Notification.Builder(context, CHANNEL_ID)
                .addAction(launchActivityAction)
                .addAction(stopServiceAction)
                .setContentText(text)
                .setContentTitle(Utils.getLocationTitle(context))
                .setOngoing(true)
                .setSmallIcon(me.zugri.ptracker.R.mipmap.ic_launcher)
                .setTicker(text)
                .setWhen(System.currentTimeMillis())
                .setChannelId(CHANNEL_ID)

            return builder.build()
        }
    }
}