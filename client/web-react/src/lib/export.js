/**
   @module export
*/

import db from './store';

/**
   Dump indexeddb data to json and generate blob url for it.
   @return {String} Url of blob
*/
export async function getDataURL(){
	const data = await db.intersection.toArray();
	const blob = new Blob([JSON.stringify(data)], { type : "application/json" });
	return URL.createObjectURL(blob);
}
