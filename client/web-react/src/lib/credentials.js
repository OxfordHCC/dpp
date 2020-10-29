/**
   @module credentials 
*/
import db from './store.js';
const API_AUTH_TYPE = 'api-auth';

// memory store for quick retrieval of keys. Keys are stored here on
// app startup and subsequent calls to retrieve api keys will retrieve
// them from here
const apiKeys = {};

// promise that resolves once keys have been retrieved from indexeddb
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
});

/**
   Get API key of external service
   @param {String} service - id of service
   @returns {String} API key
*/
async function getKey(service){
	await apiKeyInitialization;
	return apiKeys[service];
}

/**
   Set API key of external service
   @async
   @param {String} service
   @param {String} key
   @returns {Promise<Null>}
*/
async function setKey(service, key){
	await db.meta.put({
        id: `${API_AUTH_TYPE}-${service}`,
		type: API_AUTH_TYPE,
		service,
		key
	})
	
	apiKeys[service] = key;
}

export default { setKey, getKey };
