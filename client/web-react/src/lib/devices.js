/**
   @module devices
*/

import { LatLngToLatLon } from './location';
import { GET } from './remote';

/**
   @param [LatLon] bounds
   @return Array<Object>
*/
function getAround(bounds){
	if(!bounds){
		return [];
	}
	return getDevicesBounded(bounds);
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


export default { getAround };
