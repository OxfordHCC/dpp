import credentials from './credentials.js';
import { objToLonLat, lonLatToObj } from './location';
import { chunk, flatten } from './util.js';
import db from './store';


async function directionsRequest(coordinates){
	
	if(coordinates.length < 2){
		return coordinates;
	}

	const endPoint = 'https://api.openrouteservice.org/v2/directions/foot-walking/geojson';
	const apiKey = await credentials.getKey('openroute');
    const body = JSON.stringify({ coordinates });
    if(!apiKey){
        throw new Error("Missing api key for openroute");
    }
	return fetch(endPoint,{
		method: "POST",
		headers:{
			'Content-Type': 'application/json',
			'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
			'Authorization': apiKey,
		},
		body
	})
	.then(res => res.json())
	.then(data => data.features[0].geometry.coordinates);
}

async function interpolateLocation(coordinates){
	if(coordinates.length < 2){
		return coordinates;
	}

	return Promise.all(chunk(40, coordinates).map(directionsRequest)).then(flatten);
}

//TODO: there seems to be a bug with time estimation... need to investigate
function estimateTimestampsNSquared(recorded, estimated){
	//this is not euclidean distance, but it's just good enough to determine minimum distance between points
	//(i hope)
	const distance = (a, b) => (a.latitude - b.latitude) * (a.latitude - b.latitude) 
							+ (a.longitude - b.longitude) * (a.longitude - b.longitude);
	let r = 1;
	let l = r;
	let min = 200;
	estimated[0].timestampMs = recorded[0].timestampMs;
	for(let i = 1, n = recorded.length; i < n; i++){
		min = 200;
		for(let j = r, m = estimated.length; j < m; j++){
			let dist = distance(recorded[i], estimated[j]);
			if(dist < min){
				min = dist;
				r = j;
			}
		}
		interpolateTimestamp(estimated, l, r, recorded[i-1].timestampMs, recorded[i].timestampMs);
		l = r;
	}
	return estimated;
}

function interpolateTimestamp(entries, l, r, t1, t2){
	const n = r - l || 1;
	const dt = t2 - t1;
	let Ti = dt/n;
	for(let i = l; i <= r; i++){
		entries[i].timestampMs = t1 + Ti * ((i-l) || 1);
	}
}

function estimateTime(recorded, estimated){
	return estimateTimestampsNSquared(recorded, estimated);
}

async function estimatePath(entries, doEstimateTime = true){
	entries = entries.filter(x => x !== null && x !== undefined);
	if(!entries || entries.length === 0){
		console.warn("getEstimatedPath entries length 0."); 
		return []; 
	}
	
	const lonlats = entries.map(objToLonLat);
	const estimated = (await interpolateLocation(lonlats)).map(lonLatToObj);
	
	if(doEstimateTime){
		estimateTime(entries, estimated); //this changes the estimated array
	}
	
	return estimated;
}

async function getHistory(from, to){
	return db.openroute
		  .where('timestampMs')
		  .between(from, to)
		  .toArray();
}

export default { estimatePath, getHistory };
