import credentials from './credentials.js';
import { chunk, flatten } from './util.js';

async function directionsRequest(coordinates){
	if(coordinates.length < 2){
		return coordinates;
	}

	const endPoint = 'https://api.openrouteservice.org/v2/directions/foot-walking/geojson';
	const apiKey = await credentials.getKey('openrouteservice');
	const body = JSON.stringify({ coordinates });
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

async function estimatePath(coordinates){
	if(coordinates.length < 2){
		return coordinates;
	}

	return Promise.all(chunk(coordinates, 40).map(directionsRequest)).then(flatten);
}	

export default { estimatePath };