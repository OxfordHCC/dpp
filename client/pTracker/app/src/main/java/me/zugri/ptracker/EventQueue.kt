package me.zugri.ptracker

import android.content.ContentValues
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import org.json.JSONObject

//The event queue is used to queue up events from background services
//that would've otherwise been sent to WebView. When the app returns
//to foreground, it flushes events.

private const val DATABASE_NAME = "event_queue"
private const val DATABASE_VERSION: Int = 1 //needs to be Int

class DBHelper(context: Context) : SQLiteOpenHelper(context,
													DATABASE_NAME,
													null, DATABASE_VERSION
) {
    override fun onCreate(db: SQLiteDatabase) {
        db.execSQL("CREATE TABLE EventQueue (" +
                "timestamp INTEGER, " +
                "type TEXT, " +
                "data TEXT)")
    }

    //on upgrade, just throw everything away :D
    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
        db.execSQL("DROP TABLE IF EXISTS EventQueue")
        onCreate(db)
    }
}

class EventQueue(context: Context) {
    private var dbHelper: DBHelper = DBHelper(context.applicationContext)
    //TODO: switch these two around. Make the default addEvent insert
    //a list of events and make the single event function overload
    //call that (for performance purposes, ie single sqlite call).
    fun addEvent(event: WVEvent){
        Lumber.log("eventQueue: adding ${event.type}")
        var wDb = dbHelper.writableDatabase
        val dataString = event.data.toString()
        val content = ContentValues()
        content.put("type", event.type)
        content.put("timestamp", event.timestamp)
        content.put("data", dataString)
        wDb.insert("EventQueue", null, content)
    }

    fun addEvent(events: List<WVEvent>){
        events.forEach { event -> addEvent(event) }
    }

    fun truncate(endTimestamp: Long){
        Lumber.log("truncating event queue")
        val wDb = dbHelper.writableDatabase
        wDb.execSQL("DELETE FROM EventQueue WHERE timestamp <= $endTimestamp")
    }

    fun remove(ids: List<Int>){
        val idList = "( ${ids.joinToString(",")} )"
        val wDb = dbHelper.writableDatabase
        wDb.execSQL("DELETE FROM EventQueue WHERE ROWID IN $idList")
    }

    fun flush(): List<WVEvent>{
        //retrieve all events from queue, turn into WVEvent and send to webview
        val rDb = dbHelper.readableDatabase
        val projection = arrayOf("type", "timestamp", "data")
        val cursor = rDb.query("EventQueue", projection,null,null,null,null,null)
        val eventList = mutableListOf<WVEvent>()
        with(cursor) {
            while (moveToNext()) {
                val timestamp = getLong(getColumnIndexOrThrow("timestamp"))
                val type = getString(getColumnIndexOrThrow("type"))
                val data = JSONObject(getString(getColumnIndexOrThrow("data")))
                val event = WVEvent(type, timestamp, data)
                eventList.add(event)
            }
        }
        return eventList
    }

    companion object {
        private var instance: EventQueue? = null
        fun getInstance(context: Context): EventQueue
        {
            if(instance == null)
            {
                instance = EventQueue(context)
            }

            return instance!!
        }
    }
}
