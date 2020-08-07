//API keys and such
import db from './store.js';
const API_AUTH_TYPE = 'api-auth';
const apiKeys = {};

const apiKeyInitialization = new Promise((resolve, reject) => {
	return db.meta.where("type").equals(API_AUTH_TYPE).toArray()
	.then(arr => {
		Object.assign(apiKeys, arr.reduce((acc, curr) => {
			acc[curr.service] = curr.key;
			return acc;
		},{}));
		return true;
	})
	.then(() => {
		resolve();
	})
	.catch(() => reject());
});

async function getKey(service){
	await apiKeyInitialization;
	return apiKeys[service];
}

function setKey(service, key){
	return db.meta.put({
		type: API_AUTH_TYPE,
		service,
		key
	})
	.then(() => {
		apiKeys[service] = key;
	});
}

export default { setKey, getKey };