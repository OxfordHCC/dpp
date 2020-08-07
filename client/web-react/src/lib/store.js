//handle persistent data storage on the client side
//!! Note that schema declarations only declare the primary keys.
//	 So do NOT add every field you want to use. Only add the primary keys.
import Dexie from 'dexie';

const db = new Dexie('test');

db.version(1).stores({
    location: 'timestampMs',
    device: 'id, lat, long',
    meta: 'id',
    mock_device: '++id, lat, long',
    intersection: '++id, startMs, endMs',
    openroute: 'timestampMs'
});


export default db;
