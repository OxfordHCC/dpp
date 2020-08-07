package me.zugri.ptracker

import org.json.JSONObject

data class WVEvent(val type: String, val timestamp: Long, val data: JSONObject){
    companion object{
        const val LOCATION_UPDATE = "LOCATION_UPDATE"
		const val UDP_ENTER = "UDP_ENTER"
		const val UDP_EXIT = "UDP_EXIT"
		const val WEBVIEW_READY = "WEBVIEW_READY"
	}

	fun toJSONObject(): JSONObject{
		return JSONObject("""{
			type: $type,
			timestamp: $timestamp,
			data: $data
		}""".trimMargin())
	}
}
