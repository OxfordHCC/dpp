import { LatLngToLatLon } from './location';


const HOST = 'http://10.0.2.2';
//const HOST = 'http://localhost';
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

//get markers around lat lon position, using geohashing precision
//deprecated
async function deprecated_getMarkers({ lat, lon }){
	try{
		return await GET(`/v2/markers?lat=${lat}&lon=${lon}&precision=4`);
	}catch(err){
		console.error(err);
		throw err;
	}
}

//min = objLatLng - lower left corner
//max = objLatLng - upper right corner
async function getDevicesBounded([min, max]){
    const [minlat, minlon] = LatLngToLatLon(min);
    const [maxlat, maxlon] = LatLngToLatLon(max);
    const query = `minlat=${minlat}&minlon=${minlon}&maxlat=${maxlat}&maxlon=${maxlon}`;
    const res = await GET(`/v2/markers?${query}`);
    if(res.error){
        console.log('error', res.error);
        throw new Error(res.error);
    }
    return res.results;
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

/* unused
function DELETE(endpoint, body, opts){
	return api(endpoint, {...opts, method:'DELETE', body: JSON.stringify(body)});
}

function PUT(endpoint, body, opts){
	return api(endpoint, {...opts, method:'PUT', body: JSON.stringify(body)});
}
*/

export default {
	deprecated_getMarkers,
    getDemoRoute,
    getDevicesBounded
};
