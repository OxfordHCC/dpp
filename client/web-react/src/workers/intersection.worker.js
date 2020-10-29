/**
   Compute intersections between location readings and devices.
*/

import { 
	latLongToCartesian, 
	getIntersections, 
	cartesianToLatLong 
} from '../lib/geometry.js';

onmessage = (evt) => {
	let { devices, entries, port} = evt.data;
	const stdPll = (entries[0].latitude + entries[entries.length-1].latitude)/2;
	const toCartesian = (entry, i) => Object.assign(
		{},
		{ r: entry.accuracy || entry.radius, originalIndex: i}, 
		latLongToCartesian(entry.latitude, entry.longitude, stdPll)
	);

	const toLatLng = point => Object.assign(
		{},
		cartesianToLatLong(point.x, point.y, stdPll)
	);

	const paths = entries.map(toCartesian)
		  .reduce((acc, curr, i, src) => {
			  let next = src[i+1];
			  if(!next){
				  next = curr;
			  }
			  acc.push([curr, next]);
			  return acc;
		  }, []);

	const cartesianDevices = devices.map(toCartesian);
	const processed = (getIntersections(paths, cartesianDevices) || [])
	.filter((x,i,arr) => {
		if(arr[i-1] && arr[i-1].deviceIndex === x.deviceIndex){
			return false;
		}
		return true;
	})
	.map(({ pathIndex, deviceIndex })=>{
        const path = paths[pathIndex].map(p => entries[p.originalIndex]);
        const device = devices[deviceIndex];
		return {
            pManifest: device.privacy_manifest,
			radius: device.radius,
			latitude: device.latitude,
			longitude: device.longitude,
			path,
            startMs: path[0].timestampMs,
            endMs: path[1].timestampMs,
            detectionType: 'geolocation'
		}
	});

	if(port){ 
		port.postMessage({ event: "done", entries: processed });
		port.close();
	}else{
		postMessage({ event: "done", entries: processed });
	}
}
