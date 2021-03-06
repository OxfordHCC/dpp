import remote from './remote.js';
import { deNormCoord } from './util.js';
import geometry from './geometry';


//FUN FACT: if you name your file "tracking.js", your adblocker may block it.
const deNormResult = ({latitude, longitude, ...other}) => ({
	latitude: deNormCoord(latitude),
	longitude: deNormCoord(longitude),
	...other
});

let sharedIntersectionWorker;
function getIntersectionWorker(){
	if(!sharedIntersectionWorker){
		sharedIntersectionWorker = new Worker('../workers/intersection.worker.js', {type: 'module'});
	}
	return sharedIntersectionWorker;
}

function getIntersections(entries, devices){
	if(!entries || entries.length === 0 || !devices || devices.length === 0){ 
		return;
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
		intersectionWorker.postMessage({entries, devices, port: port2}, [port2]);
	});
}

function getDevices([lat, lon]){
	return remote.getMarkers({lat, lon})
	.then(res => {
		let devs = res.results;
		return devs;
	});
}

function interpolate(entries, l, r, t1, t2){
	const n = r - l || 1;
	const dt = t2 - t1;
	let Ti = dt/n;
	for(let i = l; i <= r; i++){
		entries[i].timestamp = t1 + Ti * ((i-l) || 1);
	}
}

//Note: this has side-effects on the estimated array
function estimateTimestampsNSquared(recorded, estimated){
	//this is not euclidean distance, but it's just good enough to determine _relative_ "likeness"
	const distance = (a, b) => (a.latitude - b.latitude) * (a.latitude - b.latitude) 
							+ (a.longitude - b.longitude) * (a.longitude - b.longitude);
	let r = 1;
	let l = r;
	let min = 200;
	estimated[0].timestamp = recorded[0].timestampMs;
	for(let i = 1, n = recorded.length; i < n; i++){
		min = 200;
		for(let j = r, m = estimated.length; j < m; j++){
			let dist = distance(recorded[i], estimated[j]);
			if(dist < min){
				min = dist;
				r = j;
			}
		}
		interpolate(estimated, l, r, recorded[i-1].timestampMs, recorded[i].timestampMs);
		l = r;
	}
	return estimated;
}

//BORKED, do not use
function matchEntries(recorded, estimated){
	const distance = (a, b) => (a.latitude - b.latitude) * (a.latitude - b.latitude) +
								(a.longitude - b.longitude) * (a.longitude - b.longitude);

	let eL = 1;
	let eR = estimated.length-2;
	let rL = 1;
	let rR = recorded.length-2;

	let minDistanceL = 200;
	let minDistanceR = 200;

	let lastL = eL;
	let lastR = eR;

	while(eL < eR && rL < rR){
		let distanceL = distance(estimated[eL], recorded[rL]);
		if(distanceL > minDistanceL){
			interpolate(estimated, lastL, eL, recorded[rL].timestamp, recorded[rL-1].timestamp);
			rL++;
			lastL = eL;
			minDistanceL = 200;
		}else{
			eL++;
			minDistanceL = distanceL;
		}
		let distanceR = distance(estimated[eR], recorded[rR]);
		if(distanceR > minDistanceR){
			interpolate(estimated, eR, lastR, recorded[rR].timestamp, recorded[rR+1].timestamp);
			rR--;
			lastR = eR;
			minDistanceR = 200;
		}else{
			eR--;
			minDistanceR = distanceR;
		}
	}
}

function estimateTime(recorded, estimated){
	return estimateTimestampsNSquared(recorded, estimated);
}

export default { getDevices,  getIntersections };
