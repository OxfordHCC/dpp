import {
	groupBy,
	chunk,
	flatten
} from './util.js';
import intersection from './intersection';
import { refreshCurrent } from '../actions/current';
import { store } from '../index.jsx';
import native from './native';

export const UDP_ENTER = "UDP_ENTER";
export const UDP_EXIT = "UDP_EXIT";

//Turn events into intersections
export function compileIntersections(events){

	//turn enter-exit 
	const pairToIntersection = ([start, end]) => ({
		...((start.id && { id: start.id }) || {}),
		startMs: new Date(start.timestamp).valueOf(),
		endMs: ((end && new Date(end.timestamp).valueOf()) || -1),
		pManifest: start.data.pManifest,
		detectionType: "UDP"
	});

	const cloneInvert = event => Object.assign(
		{}
		, event
		, {
			type: (event.type === UDP_ENTER)? UDP_EXIT : UDP_ENTER
		}
	);

	//fold pair of intersections
	const fold = (pairs) => pairs.map(pairToIntersection);

	//fill empty
	const fill = (sequence) => {
		const pattern = i => [UDP_ENTER, UDP_EXIT][i%2];
		return Array(sequence.length*2)
			.fill(null)
			.map((nil, i) => pattern(i))
			.reduce((acc, curr) => {
				if(acc.j >= sequence.length){
					return acc;					
				}
				const arr = acc.arr;
				const event = sequence[acc.j];
				if(event.type !== curr){
					arr.push(null);
					return acc;
				}
				acc.j += 1;
				arr.push(event);
				return acc;
			}, { j: 0, arr: [] })
			.arr
			.map((curr, i, arr) => {
				if(curr == null){
					return i%2 === 0?
						cloneInvert(arr[i+1]) :
						cloneInvert(arr[i-1]);
				}
				return curr;
			});
	}

	//group by pManifest.uuid
	const group = arr => Object.values(groupBy(x => x.data.pManifest.uuid)(arr))

	
	return flatten(group(events)
				   .map(fill)
				   .map(chunk(2))
				   .map(fold));
}

export async function handleEvents(events){
	const intersectionToEvent = (intersection) => ({
		id: intersection.id,
		data: { pManifest: intersection.pManifest },
		timestamp: intersection.startMs,
		type: UDP_ENTER
	});
	
	const current = (await intersection.getCurrent()).map(intersectionToEvent);
	const compiled  = compileIntersections([...current, ...events]);
	console.log('compiled intersections', compiled);
	await intersection.bulkPut(compiled);
	store.dispatch(refreshCurrent())
	return;
}

//on start, check whether we have any outdated events
(async () => {
	let current = (await intersection.getCurrent())
		.filter(inx => inx.detectionType === 'UDP');
	
	native.syncUDP(current);
})()


export default { handleEvents };
