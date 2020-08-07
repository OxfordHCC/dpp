import db from './store';

export async function getDataURL(){
	const data = await db.intersection.toArray();
	const blob = new Blob([JSON.stringify(data)], { type : "application/json" });
	return URL.createObjectURL(blob);
}
