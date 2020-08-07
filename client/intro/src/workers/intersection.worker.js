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
	.reduce((acc, curr, i, src)=>{
		if(i === 0){
			return acc;
		}
		let last = src[i-1];
		acc.push([last, curr]);
		return acc;
	}, []);

	const cartesianDevices = devices.map(toCartesian);

	const processed = getIntersections(paths, cartesianDevices)
	.filter((x,i,arr) => {
		if(arr[i-1] && arr[i-1].deviceIndex === x.deviceIndex){
			return false;
		}
		return true;
	})
	.map(({ pathIndex, deviceIndex, path, device })=>{
		return {
			device: devices[deviceIndex],
			path: paths[pathIndex].map(pt => entries[pt.originalIndex]),
			...(toLatLng(cartesianDevices[deviceIndex])),
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
