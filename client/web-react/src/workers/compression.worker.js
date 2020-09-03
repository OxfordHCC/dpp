//reduce entries by joining two adjacent inersecting location readings into a single one
//the center of the new location reading will be the halway point between the two intersecting
//readings. The resulting radius is the smallest of the two.

//on message, filter and group by date.
// importScripts('geometry.js');

import { 
	latLongToCartesian,
	distanceCartesian, 
	cartesianToLatLong, 
	getMedianIntersection 
} from '../lib/geometry.js'

onmessage = (evt) => {
	const { entries, port } = evt.data;

	const stdPll = (entries[0].latitude + entries[entries.length-1].latitude)/2;

	const toCartesian = (entry, i) => Object.assign(
		{},
		{ r: entry.accuracy, originalIndex: i }, 
		latLongToCartesian(entry.latitude, entry.longitude, stdPll)
	);

	const toLatLng = point => Object.assign(
		{},
		entries[point.originalIndex],
		{accuracy: point.r},
		cartesianToLatLong(point.x, point.y, stdPll)
	);

	let processed = entries
		.map(toCartesian)
		.reduce(reducer, [])
		.map(toLatLng);

	if(port){ 
		port.postMessage({ event: "done", entries: processed });
		port.close();
	}else{
		postMessage({ event: "done", entries: processed });
	}

	//Note: we use an "equirectangular" projection: basically 
	//stretching the earth flat. This seems to have a an error
	//of around 0.3 meters when a sensible "standard" parallel
	//is chosen. So the flat earth isn't too bad.
	//https://en.wikipedia.org/wiki/Equirectangular_projection
	function reducer(acc, curr, i){
		const last = acc[acc.length-1];

		if(!last){
			acc.push(curr);
			return acc;
		}

		const d = distanceCartesian(last, curr);
		//if distance within one meter, skip it...
		if(d < 1){
			return acc;
		}
		if(d <= last.r + curr.r){
			//intersecting circles, so merge them
			let intersection = getMedianIntersection(last, curr);
			last.x = intersection.x;
			last.y = intersection.y;
			last.r = Math.min(last.r, curr.r);
		}else{
			acc.push(curr);
		}
		return acc;
	}
}
