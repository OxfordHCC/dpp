import NativeInterface from './nativeInterface';
import settings from '../settings.js';
import './mock.js';


export default class WebInterface extends NativeInterface{
	constructor(){
		super();
		this.init();
	}

	async init(){
		const locationEnabled = await settings.services.location;
		console.log('loc enabled', locationEnabled);
		if(locationEnabled === true){
			this.startLocationService();
		}
	}

	startLocationService(){
		console.log('called start loc service');
		this.geoServiceId = navigator.geolocation.watchPosition(geoLoc => {
			//success =>
			super.startLocationService();
			super.updateLocation({
				timestampMs: geoLoc.timestamp || Date.now(),
				latitude: geoLoc.coords.latitude,
				longitude: geoLoc.coords.longitude,
				accuracy: geoLoc.coords.accuracy
			});
		}, error => {
			console.error(error);
		},{
			enableHighAccuracy: true
		});
	}

	stopLocationService(){
		navigator.geolocation.clearWatch(this.geoServiceId);
		super.stopLocationService();
	}
}