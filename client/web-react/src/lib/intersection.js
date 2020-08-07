import db from './store';
import location from './location';
import openroute from './openroute';
import device from './devices';
import L from 'leaflet';

const IX_VALID_EDGE = 'intersection-valid-edge-left';

//get currently active intersections
//active intersections are intersections 
async function getCurrent(){
	return await db.intersection
		  .where('endMs')
		  .equals(-1)
		  .toArray();
}

async function getHistory(from, to){
	//const test = await db.intersection.where('endMs').between(from,to).toArray();
	//console.log(test);
	return db.intersection
		.where("endMs")
		.between(from, to)
		.toArray();
}

function bulkPut(entries){
	return db.intersection.bulkPut(entries);
}

export default {
	getCurrent,
	getHistory,
	bulkPut
};
