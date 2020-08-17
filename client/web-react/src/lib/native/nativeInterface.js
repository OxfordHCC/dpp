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
	location.bulkPut(locations);

	//try to also compute intersections
	try{
		const latestEvent = last(locations);
		const openroutes = await openroute.estimatePath([lastLocation, ...locations]);
		console.log('shouldn\'t get here');
		const deviceBounds = location.getBoundsArray(openroutes, { pad: 0.1, min: 500 });
		const devices = await device.getAround(deviceBounds);
		const newIntersections = (await location.computeIntersections(openroutes, devices))
			  .map(inx => ({ //mark intersections computed using last location as open
				  ...inx,
				  endMs: (inx.path[1].timestamp === latestEvent.timestamp)? -1 : inx.endMs
			  }));
		
		const oldIntersections = (await intersection.getCurrent())
			  .filter(inx => inx.detectionType === "geolocation")
			  .map(inx => ({
				  ...inx,
				  endMs: inx.path[1].timestamp
			  }));
	
	
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
	const sendMessage = (type, data) => native.send({type, data});
	native.setMessageHandler(handleMessage);
	sendMessage(WEBVIEW_READY);

	return {
		test: () => sendMessage('test'),
		getServices: () => sendMessage("get_detection_services"),
		settings: {
			toggleService: id => sendMessage("toggle_detection_service", { id })
		},
		syncUDP: (entries) => sendMessage('sync_udp', { entries })
	}
}


export default nativeInterface;
