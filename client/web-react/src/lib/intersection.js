import db from './store';

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
