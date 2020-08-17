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

async function getMarkers({ lat, lon }){
	try{
		return await GET(`/markers?lat=${lat}&lon=${lon}&precision=4`);
	}catch(err){
		console.error(err);
		throw err;
	}
}

function appendDefaultHeaders(headers){
	return Object.assign({}, defaultHeaders, headers);
}

function api(endpoint, opts){
	opts.headers = appendDefaultHeaders(opts.headers);
	return fetch(`${HOST}:${PORT}${endpoint}`, opts)
	.then(res => res.json());
}

function GET(endpoint, opts){
	return api(endpoint, {...opts, method:'GET'});
}

function POST(endpoint, body, opts){
	return api(endpoint, {...opts, method:'POST', body: JSON.stringify(body)});
}

function DELETE(endpoint, body, opts){
	return api(endpoint, {...opts, method:'DELETE', body: JSON.stringify(body)});
}

function PUT(endpoint, body, opts){
	return api(endpoint, {...opts, method:'PUT', body: JSON.stringify(body)});
}

export default {
	getMarkers,
	getDemoRoute
};
