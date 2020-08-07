import {
	UDP_ENTER,
	UDP_EXIT,
	compileIntersections
} from './udp.js';
import { pluck } from './util.js';

//jest.mock('./store.js');

function mockPManifest(id){
	return {
		data:{
			pManifest: {
				uuid: id
			}
		}
	}
}

//eNter event
function n(event){
	return { ...event, type: UDP_ENTER };
}

//eXit event
function x(event){
	return { ...event, type: UDP_EXIT };
}

function mockEvent(ids, types){
	return ids
		.map(id => mockPManifest(id))
		.map((e,i) => types[i](e));
}

function sequence(entries){
	const timeInterval = 50;
	const getTime = (i) => new Date(Date.now() - i * timeInterval).toISOString();
	return entries.map((entry, i) => ({
		...entry,
		timestamp: getTime(i)
	}))
}

test("compileIntersection should turn a pair of enter-exit events into a single closed intersection", () => {
	const uuids = [0,0];
	const types = [n,x];
	const events = sequence(mockEvent(uuids, types));
	const intersections = compileIntersections(events);
	expect(intersections).toBeDefined();
	expect(intersections.length).toEqual(1);
	const inx = intersections[0];
	expect(inx.startMs).toEqual(new Date(events[0].timestamp).valueOf());
	expect(inx.endMs).toEqual(new Date(events[1].timestamp).valueOf());
	expect(inx.pManifest.uuid).toEqual(events[0].data.pManifest.uuid)
});

test("compileIntersection should turn two enter events into two open intersections", ()=>{
	const events = sequence(mockEvent(
		[0,1],
		[n,n]
	));
	
	const intersections = compileIntersections(events);
	expect(intersections).toBeDefined();
	expect(intersections.length).toEqual(2);
	expect(intersections[0].endMs).toEqual(-1);
	expect(intersections[1].endMs).toEqual(-1);
	expect(intersections[0].startMs).toEqual(new Date(events[0].timestamp).valueOf());
	expect(intersections[1].startMs).toEqual(new Date(events[1].timestamp).valueOf());
});
