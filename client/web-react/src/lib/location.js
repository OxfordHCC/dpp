import db from './store.js';
import { last } from './util';
import L from 'leaflet';

let lastPosition;
export async function getLastPosition(){
	return lastPosition || (await db.location.limit(1).last());
}

function storeLastPosition(pos){
	lastPosition = pos;
}

let sharedCompressionWorker;
function getCompressionWorker(){
	if(!sharedCompressionWorker){
		sharedCompressionWorker = new Worker('../workers/compression.worker.js', { type: 'module' });
	}
	return sharedCompressionWorker;
}

//TODO: rename to "simplify" (or smth else)
export function compressPoints(points){
	if(!points || points.length === 0){ 
		return []; 
	}

	return new Promise((resolve, reject) => {
		let scWorker = getCompressionWorker();
		let channel = new MessageChannel();
		let port1 = channel.port1;
		port1.onmessage = msg => {
			if(msg.data.event === 'done'){
				resolve(msg.data.entries);
				port1.close();
			}
		}
		port1.onerrormessage = msg => reject(msg);	
		scWorker.postMessage({entries: points, port: channel.port2}, [channel.port2]);
	});
}


let sharedIntersectionWorker;
function getIntersectionWorker(){
	if(!sharedIntersectionWorker){
		sharedIntersectionWorker = new Worker('../workers/intersection.worker.js', {type: 'module'});
	}
	return sharedIntersectionWorker;
}

function computeIntersections(entries, devices){
	if(!entries || entries.length === 0 || !devices || devices.length === 0){ 
		return [];
	}

	return new Promise((resolve, reject) => {
		const intersectionWorker = getIntersectionWorker();
		const channel = new MessageChannel();
		const port1 = channel.port1;
		const port2 = channel.port2;
		port1.onmessage = msg => {
			if(msg.data.event === "done"){
				resolve(msg.data.entries);
				port1.close();
			}
		}
		intersectionWorker.onerror = err => reject(err);
		intersectionWorker.postMessage({ entries, devices, port: port2 }, [port2]);
	});
}

//deprecated, please use the newer bulkPut function
async function deprecated_put(pos){
	console.trace("DEPRECATED METHOD");
	let scWorker = getCompressionWorker();
	let channel = new MessageChannel();
	let lastPos = await getLastPosition();
	if(!lastPos){
		return storeLastPosition(pos);
	}

	let inEntries = [lastPos, pos];
	channel.port1.onmessage = msg => {
		if(msg.data.event === 'done'){
			let outEntries = msg.data.entries;
			if(outEntries.length === 1){
				//entries were compressed, so update the last entry
				console.log('overwritting last position');
				lastPos.latitude = outEntries[0].latitude;
				lastPos.longitude = outEntries[0].longitude;
				return storeLastPosition(lastPos);
			}
			//the new entry is different enough to warrant a new, separate entry
			storeLastPosition(pos);
		}
	}
	scWorker.postMessage({entries: inEntries, port: channel.port2}, [channel.port2]);
}

//should probably just rename to put and remove old put
async function bulkPut(entries){
	const lastPos = await getLastPosition();
	if(lastPos){
		entries = [lastPos, ...entries];
	}
	
	const simplified = await compressPoints(entries);
	await db.location.bulkPut(simplified);
	await storeLastPosition(last(simplified));
	return simplified;
}

//leaflet uses 3 (THREE) different _mostly_ interchangeable formats for coordinates: {lat, lon}, {lat, lng} and [lat, lon]
//something else that I can't seem to recall rn uses a 4th format (the [lon,lat])
//while our indexeded db uses a 5th format ({ latitude, longitude }) because... it was created before I realised the disaster.
//Basically it's hell. I keep refactoring these, but I always end up with more than I wish for. At some point will do it properly, but it will require changes across multiple platforms and so I keep deferring it.
export const objToLonLat = ({ longitude, latitude }) => ([ longitude, latitude ]);
export const objToLatLon = ({ longitude, latitude }) => ([ latitude, longitude ]);
export const lonLatToObj = ([ longitude, latitude ]) => ({ longitude, latitude });
export const LatLngToLatLon = ({lat, lng}) => ([lat, lng]);

function getLocationHistory(startMs, endMs){
	return db.location
		.where('timestampMs')
		.between(startMs, endMs)
		.toArray();
}

function getBoundsArray(objArr, opts){
	if(!objArr || objArr.length === 0){
		//return undefined;
		throw "getBoundsArray(objArr), objArr falsy or length 0";
	}
	const latLon = objArr.map(objToLatLon);
	let bounds = L.polyline(latLon).getBounds();
	if(opts.pad){
		bounds = bounds.pad(opts.pad);
	}
	if(opts.min){
		const minBounds = bounds.getCenter().toBounds(opts.min);
		bounds.extend(minBounds);
	}
	return [bounds.getSouthWest(), bounds.getNorthEast()];
}

export default {
	computeIntersections,
	getBoundsArray,
	getLocationHistory,
  	bulkPut,
	deprecated_put,
	getLastPosition
};
