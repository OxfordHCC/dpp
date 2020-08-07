import db from '../store.js';
import NativeInterface from './nativeInterface.js';
import geometry from '../geometry.js';
import { uuidv4 } from '../util';
import { LOCATION_UPDATE } from './nativeInterface';
import { UDP_ENTER, UDP_EXIT } from '../udp';

/*
export default class MockInterface{
	async proximityCheck(pos){
		try{
			const mockDevices = await db.mockDevices.toArray();
			const posC = geometry.latLongToCartesian(pos.latitude, pos.longitude, pos.latitude);

			const inProximity = ({devC, devR}) => {
				return geometry.isCircleIntersectingCircle(devC, devR, posC, pos.accuracy);
			}

			mockDevices.map(device => ({
				devC: geometry.latLongToCartesian(device.latitude, device.longitude, pos.latitude), 
				devR: device.radius,
				device
			}))
			.filter(inProximity)
			.forEach(dev => {
				//super.detectDevice({...(dev.device), timestamp: Date.now()});
				console.log('device in proximity', dev);
			});
		}catch(err){
			if(err.name === "NotFoundError"){ //TODO: change to instanceof check;
				console.log('no mock devices found in db');
			}else{
				console.error(err);
			}
		}
	}

	mockLocation(pos){
		//super.updateLocation(pos);
		this.proximityCheck(pos);
	}
}

export const addMockDevice = async mockDevice => await db.mockDevices.put(mockDevice);
export const rmMockDevice = async mockDevice => await db.mockDevice.delete(mockDevice);
*/

function MockInterface(webInterface){	
	function genPManifest(from){
		return Object.assign({
			uuid: uuidv4(),
			name: "Some p manifest title",
			controller: 'Some controller',
			url: "some url"
		}, from);
	}

	function event(event){
		return{
			type: "event",
			timestamp: (new Date()).toISOString(),
			data: [event]
		};
	}
	
	function udp(pManifest){
		pManifest = genPManifest(pManifest);
		return {
			timestamp: (new Date()).toISOString(),
			data: { pManifest }
		}
	}
	
	function udpExit(pManifest){
		return {
			type: UDP_EXIT,
			...(udp(pManifest))
		}
	}

	function udpEnter(pManifest){
		return {
			type: UDP_ENTER,
			...(udp(pManifest))
		};
	}

	function location(loc){
		return {
			type: LOCATION_UPDATE,
			timestamp: (new Date()).toISOString(),
			data:{
				accuracy: 5,
				...loc
			}
		};
	}
	
	function send(message){
		webInterface.receive(message);
	}
	
	return {
		event:{
			udp:{
				enter: pManifest => send(event(udpEnter(pManifest))),
				exit: pManifest => send(event(udpExit(pManifest)))
			},
			location: loc => send(event(location(loc)))
		},
		generate: {
			pManifest: genPManifest
		}
	}
}

export default MockInterface;
