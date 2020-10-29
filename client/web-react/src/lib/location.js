/**
   @module location
*/

import db from './store.js';
import { last } from './util';
import L from 'leaflet';

let lastPosition;
let sharedCompressionWorker;
let sharedIntersectionWorker;

/**
   Get last known position
*/
export async function getLastPosition(){
	return lastPosition || (await db.location.limit(1).last());
}

function cacheLastPosition(pos){
	lastPosition = pos;
}

function getCompressionWorker(){
	if(!sharedCompressionWorker){
		sharedCompressionWorker = new Worker(
			'../workers/compression.worker.js',
			{ type: 'module' }
		);
	}
	return sharedCompressionWorker;
}

function getIntersectionWorker(){
	if(!sharedIntersectionWorker){
		sharedIntersectionWorker = new Worker(
			'../workers/intersection.worker.js',
			{ type: 'module' }
		);
	}
	return sharedIntersectionWorker;
}


/**
   Compress latlon points
*/
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

/**
   Compress and store new location entries.
   @return {Promise<Array>} stored entries
*/
async function bulkPut(entries){
	const lastPos = await getLastPosition();
	if(lastPos){
		entries = [lastPos, ...entries];
	}
	
	const simplified = await compressPoints(entries);
	await db.location.bulkPut(simplified);
	await cacheLastPosition(last(simplified));
	return simplified;
}

export const objToLonLat = ({ longitude, latitude }) => ([ longitude, latitude ]);
export const objToLatLon = ({ longitude, latitude }) => ([ latitude, longitude ]);
export const lonLatToObj = ([ longitude, latitude ]) => ({ longitude, latitude });
export const LatLngToLatLon = ({lat, lng}) => ([lat, lng]);

/**
   @param {Number} startMs Start Unix timestamp in milliseconds
   @param {Number} endMs End Unix timestamp in milliseconds
   @return {Array<Location>} array of location readings
*/
function getLocationHistory(startMs, endMs){
	return db.location
		.where('timestampMs')
		.between(startMs, endMs)
		.toArray();
}

/**
   @param objArr
   @param opts
   @return {} bounds
*/
function getBoundsArray(objArr, opts){
	if(!objArr || objArr.length === 0){
		return undefined;
		//throw "getBoundsArray(objArr), objArr falsy or length 0";
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
