import { uuidv4 } from '../util';
import { LOCATION_UPDATE } from './nativeInterface';
import { UDP_ENTER, UDP_EXIT } from '../udp';

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

	function parseStrLocation(loc){
		const coordArr = loc.split(',').map(x => x.trim())
		return {
			'latitude': coordArr[0],
			'longitude': coordArr[1]
		}
	}

	function parseLatlngLocation(loc){
		return {
			'latitude': loc['lat'],
			'longitude': loc['lng']
		}
	}

	function location(loc, accuracy=5){
		if(typeof loc === 'string'){
			loc = parseStrLocation(loc)
		}

		if(loc['lat'] && loc['lng']){
			loc = parseLatlngLocation(loc)
		}
		
		return {
			type: LOCATION_UPDATE,
			timestamp: (new Date()).toISOString(),
			data: {
				accuracy,
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
