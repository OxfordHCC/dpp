import { Evented } from '../util.js';
import settings from '../settings.js';

export const DETECT_MANIFEST = "detect_privacy_manifest";
export const FLUSH_MANIFEST = "flush_privacy_manifest";
export const UPDATE_LOCATION = "update_location";
export const FLUSH_LOCATION = "flush_location";

class NativeInterface extends Evented{

	updateLocation(pos){
		//if accuracy is worse than 50m, don't even talk to me
		if(pos.accuracy > 50){
			console.warn("Accuracy too low, discarding location update event.");
			return;
		}
		this.trigger(UPDATE_LOCATION, pos);
	}

	updateManifest(){
		this.trigger(DETECT_MANIFEST, ...arguments);
	}

	flushManfiest(manifestArr){
		this.trigger(FLUSH_MANIFEST, manifestArr);
	}

	flushLocation(locArr){
		this.trigger(FLUSH_LOCATION, locArr);
	}

	detectDevice(){
		console.log('native detected device', arguments);
	}

	startLocationService(){
		settings.services.location = true;
	}
	stopLocationService(){
		settings.services.location = false;
	}
}

export default NativeInterface;