import AndroidInterface from "./native/android.js";
import iOSInterface from "./native/ios.js";
import WebInterface from './native/web.js';
import NativeInterface from './native/nativeInterface.js';

const android = window.Android;
const ios = window.iOS;

const getNative = () => {
	if(android){
		return new AndroidInterface({
			timeout: 5000
		});
	}
	if(ios){
		return new iOSInterface();
	}
	return new WebInterface();
}

const nativeInterface = NativeInterface(getNative());

window.nativeInterface = nativeInterface;
export default nativeInterface;
