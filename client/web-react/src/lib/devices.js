import remote from './remote';

//bounds = [ LatLon, LatLon ]
function getAround(bounds){
	if(!bounds){
		return [];
	}
	return remote.getDevicesBounded(bounds);
}

export default { getAround };
