import NativeInterface from './nativeInterface.js';

export default class AndroidInterface extends NativeInterface{
	constructor(){
		super();
		window.AndroidInterface = this;
		window.Android.onWebLoaded();
	}

	_fromNative_updateLocation(pos){
		console.log("received  location from native", pos);
		super.updateLocation(pos);
	}

	_fromNative_flushLocation(locArr){
		console.log('flushed locations', locArr);
		super.flushLocation(locArr);
	}

	startLocationService(){
		window.Android.startLocationService();
		super.startLocationService();
	}

	stopLocationService(){
		window.Android.stopLocationService();
		super.stopLocationService();
	}

	startProximityDetection(){}
	stopProximityDetection(){}
}