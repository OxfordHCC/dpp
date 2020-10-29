/**
   @module history
*/

import intersection from './intersection';
import openroute from './openroute';
import device from './devices';
import location from './location';

/**
   Return history between start and end time
   @param {Number} fromMs
   @param {Number} toMs
   @return {Object}
*/
export async function get(fromMs, toMs){
	const locations = await location.getLocationHistory(fromMs, toMs);
	const openroutes = await openroute.estimatePath(locations);
	const deviceBounds = location.getBoundsArray(openroutes, { pad: 0.1, min: 5000 });
	const devices = await device.getAround(deviceBounds);
	let intersections = await intersection.getHistory(fromMs, toMs);
	const geoIntersections = await location.computeIntersections(openroutes, devices);
	intersections = intersections.concat(geoIntersections);
	return { intersections, devices, openroutes, locations };
}

export default {
	get
};
