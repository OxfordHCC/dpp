/**
   @module remote
*/

const HOST = 'http://localhost';
const PORT = '3000';

const defaultHeaders = {
	'Content-Type': 'application/json'
}

async function getDemoRoute(points){
	let coordinates = points.map(pt => ([pt.longitude, pt.latitude]));
	let res =  await POST('/demo-openroute', { coordinates });
	if(res.error){
		throw res.error;
	}
	return res.features[0].geometry.coordinates.map(([lon, lat]) => [lat,lon]);
}

function appendDefaultHeaders(headers){
	return Object.assign({}, defaultHeaders, headers);
}

function api(endpoint, opts){
	opts.headers = appendDefaultHeaders(opts.headers);
	return fetch(`${HOST}:${PORT}${endpoint}`, opts)
	.then(res => res.json());
}

/**
   Send GET request to server
   @param {String} endpoint
   @param {Object} opts
   @return {Promise<Object>} request
*/
export function GET(endpoint, opts){
	return api(endpoint, {...opts, method:'GET'});
}

/**
   Send POST request to server
   @param {String} endpoint
   @param {Object} opts
   @return {Promise<Object>} request
*/
export function POST(endpoint, body, opts){
	return api(endpoint, {...opts, method:'POST', body: JSON.stringify(body)});
}
