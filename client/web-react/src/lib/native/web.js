import { LOCATION_UPDATE } from './nativeInterface';
import MockInterface from "./mock.js";

const locationService = (webInterface) => {
	const LS_KEY = "settings_location_service";
	const MAX_ACCURACY = 50; //meters
	let listenerId;

	init();
	
	const sendEvent = (...events) => {
		webInterface.receive({ type: 'event', data: events });
	}
	
	const sendLocation = (location) => {
		sendEvent({
			type: LOCATION_UPDATE,
			data: location
		});
	}

	function init(_this){
		if(getStatus()){
			start();
		}
		return _this;
	}
	
	function start(){
		localStorage.setItem(LS_KEY, true);
		listenerId = navigator.geolocation.watchPosition(geoLoc => {
			if(geoLoc.coords.accuracy > MAX_ACCURACY){
				return;
			}
			sendLocation({
				timestampMs: geoLoc.timestamp || Date.now(),
				latitude: geoLoc.coords.latitude,
				longitude: geoLoc.coords.longitude,
				accuracy: geoLoc.coords.accuracy
			});
		}, error => {
			console.error(error);
			stop();
		},{
			enableHighAccuracy: true
		});
	}

	function stop(){
		localStorage.setItem(LS_KEY, false);
		navigator.geolocation.clearWatch(listenerId);
	}

	function getStatus(){
		return localStorage.getItem(LS_KEY) === 'true' || false;
	}

	function getName(){
		return "Location";
	}

	function toggle(){
		getStatus()? stop() : start();
		return getStatus();
	}
	
	return {
		start,
		stop,
		toggle,
		getStatus,
		getName
	}
}

const theWeb  = (webInterface) => {
	
	const detectionServices = {
		location: locationService(webInterface)
	};
	
	function toggleDetectionService({ id }){
		const status = detectionServices[id].toggle();
		return { status };
	}
	
	function receiveMessage(message){
		const { type, data } = message;
		if(type === "toggle_detection_service"){
			return toggleDetectionService(data);
		}
		if(type === "get_detection_services"){
			return getServices();
		}

		
		//return Promise.reject({error: `Undefined message type '${message.type}'` });
	}

	function getServices(){
		return Object.entries(detectionServices)
			.map(([id, service]) => ({
				id,
				name: service.getName(),
				status: service.getStatus()
			}));
	}
	
	return {
		receiveMessage
	};
}

//The reason I split it into theWeb and the WebInterface is to emulate the native
//counterpart that would exist on native implementations. The WebInterface then looks more
//similar to AndroidInterface and the IOSInterface classes.
//This makes the code more uniform and lets patterns emerge.
export default class WebInterface{
	constructor(){
		this.theWeb = theWeb(this);
		window.mock = new MockInterface(this);
	}
	
	send(message){ //to native
		return this.theWeb.receiveMessage(message);
	}

	receive(message){ //from native
		return this.handleMessage(message);
	}

	setMessageHandler(handler){
		this.handleMessage = handler;
	}
}
