//API keys and such
import db from './store.js';
const API_AUTH_TYPE = 'api-auth';
const apiKeys = {};

const apiKeyInitialization = new Promise(async (resolve, reject) => {
    try{
        (await db.meta.toArray())
        .filter(metaEntry => metaEntry.type === API_AUTH_TYPE)
        .reduce((acc, curr) => {
            acc[curr.service] = curr.key;
            return acc;
        }, apiKeys)
        resolve();
    }catch(err){
        reject(err);
    }
}).catch(err => {
	console.error("error happened while initialising credentials", err);
})

async function getKey(service){
	await apiKeyInitialization;
	return apiKeys[service];
}

function setKey(service, key){
	return db.meta.put({
        id: `${API_AUTH_TYPE}-${service}`,
		type: API_AUTH_TYPE,
		service,
		key
	})
	.then(() => {
		apiKeys[service] = key;
	});
}

export default { setKey, getKey };
