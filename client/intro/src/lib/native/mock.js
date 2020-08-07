import db from '../store.js';
import NativeInterface from './nativeInterface.js';
import geometry from '../geometry.js';

export default class MockInterface extends NativeInterface{

	constructor(){
		super();
	}

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
				super.detectDevice({...(dev.device), timestamp: Date.now()});
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
		super.updateLocation(pos);
		this.proximityCheck(pos);
	}
}

export const addMockDevice = async mockDevice => await db.mockDevices.put(mockDevice);
export const rmMockDevice = async mockDevice => await db.mockDevice.delete(mockDevice);

window.mock = {
	nativeInterface: new MockInterface(),
	addMockDevice,
	rmMockDevice
}