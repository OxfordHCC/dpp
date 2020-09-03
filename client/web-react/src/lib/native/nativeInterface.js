import {
	last
} from '../util.js';
import location from '../location.js';
import udp from '../udp';
import intersection from '../intersection';
import device from '../devices';
import openroute from '../openroute';
import { UDP_ENTER, UDP_EXIT } from '../udp';
import { store } from '../../index.jsx';
import { refreshCurrent } from '../../actions/current.js';

export const LOCATION_UPDATE = "LOCATION_UPDATE";
export const WEBVIEW_READY = "WEBVIEW_READY";
export const SYNC_UDP = 'sync_udp';
export const TOGGLE_DETECTION_SERVICE = 'toggle_detection_service';
export const GET_DETECTION_SERVICES = 'get_detection_services';

const eventHandlers = {
	[LOCATION_UPDATE]: locationUpdate,
	[UDP_ENTER]: handleUDP,
	[UDP_EXIT]: handleUDP
}

async function locationUpdate(events){
	//turn location update events into location entries
	const lastLocation = await location.getLastPosition();
	let locations = events.map(evt => ({
		...evt.data,
		timestampMs: new Date(evt.timestamp).valueOf()
	}));
	
	//store location entries
	locations = await location.bulkPut(locations);

	if(locations.length <= 0){
		//do nothing
		return;
	}

	if(lastLocation
	   && locations.length === 1
	   && locations[0].latitude === lastLocation.latitude
	   && locations[0].longitude === lastLocation.longitude){
		return;
	}

	
	//try to also compute intersections
	try{
		const latestEvent = last(locations);
		const openroutes = await openroute.estimatePath([lastLocation, ...locations]);
		const deviceBounds = location.getBoundsArray(openroutes, { pad: 0.1, min: 500 });
		const devices = await device.getAround(deviceBounds);


		//intersections calculated using the new location updates
		const newIntersections = (await location.computeIntersections(openroutes, devices))
			  .map(inx => ({
				  ...inx,
				  //mark intersections computed using last location as open
				  endMs: (inx.path[1].timestamp === latestEvent.timestamp)? -1 : inx.endMs
			  }));

		
		//existing intersections
		const oldIntersections = (await intersection.getCurrent())
			  .filter(inx => inx.detectionType === "geolocation")
			  .map(inx => ({
				  ...inx,
				  endMs: inx.path[1].timestamp
			  }));

//		const toClose = oldInxs.filter(notIn(newInxs));
//		const toAdd = newInxs.filter(notIn(oldInxs));
	
		await intersection.bulkPut([...oldIntersections, ...newIntersections]);
		store.dispatch(refreshCurrent());
	}catch(err){
		console.error('error while trying to compute intersections on location update event', err);
	}
}

function handleUDP(events){
	return udp.handleEvents(events);
}

export function handleEvents(data, handlers){
	const mapBy = x =>	x.reduce((acc, curr) => {
		let arr = acc.get(handlers[curr.type]);
		if(!arr){
			arr = [];
			acc.set(handlers[curr.type], arr);
		}
		arr.push(curr);
		return acc;
	}, new Map());

	const promises = Array.from(mapBy(data), ([handler, entries]) => handler(entries));
	return Promise.all(promises);
}

function handleMessage({ type, data }){
	console.log('handle message called', type, data);
	if(!type){
		return;
	}
	if(type === 'event'){
		return handleEvents(data, eventHandlers);
	}
	
	throw "message type unknown";
}

const nativeInterface = native => {
	const sendMessage = (type, data) => native.send({ type, data });
	native.setMessageHandler(handleMessage);
	sendMessage(WEBVIEW_READY);

	return {
		getServices: () => sendMessage(GET_DETECTION_SERVICES),
		settings: {
			toggleService: id => sendMessage(TOGGLE_DETECTION_SERVICE, { id })
		},
		syncUDP: (entries) => sendMessage(SYNC_UDP, { entries })
	}
}


export default nativeInterface;




