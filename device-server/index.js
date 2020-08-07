const readline = require('readline');
const fs = require('fs');
const https = require('https');
const http = require('http');
const geohash = require('ngeohash');
const express = require('express');
const cors = require('cors');
const app = express();
const Database = require('better-sqlite3');
const db = new Database('./db/db', { verbose: console.log });
const credentials = require('./config.js');

app.use(cors());
app.use(express.json());

app.get('/', function(req, res){
	res.sendStatus(200);
});

//used when dealing with sql database
const normCoord = (coord) => coord.toFixed(7) * 10000000;
const deNormCoord = (nCoord) => nCoord/10000000;
app.post('/demo-openroute', async function(req, res){
	try{
		let {coordinates} = req.body;
		console.log('request coordinates', coordinates);
		let orReq = https.request({
			hostname: "api.openrouteservice.org",
			method:"POST",
			path: "/v2/directions/foot-walking/geojson",
			headers: {
				"Content-Type": "application/json",
				Accept:'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
				Authorization: credentials.openrouteKey
			}
		}, (orRes) => {
			let resData = '';
			orRes.setEncoding('utf8');
			orRes.on('data', d => {
				resData += d;
			});
			orRes.on('end', ()=>{
				console.log('openroute demo response: \n',resData);
				res.json(JSON.parse(resData));
			});
		});

		orReq.on('error', e => { throw e; });
		orReq.write(JSON.stringify({coordinates}));
		orReq.end();
	}catch(err){
		console.error(err);
		res.status(500).json(err);
	}
})

function getDevicesAround([minlat, minlon],[maxlat, maxlon]){
	let stmt = db.prepare(`SELECT * FROM position 
	WHERE latitude >= ? 
	AND latitude <= ?
	AND longitude >= ?
	AND longitude <= ?`);
	
	console.log('getting around', minlat, minlon, maxlat, maxlon);
	let positions = stmt.all(
		normCoord(minlat),
		normCoord(maxlat),
		normCoord(minlon),
		normCoord(maxlon)
	);

	let map = positions.reduce((acc, curr)=>{
		acc[curr.id] = {
			lat: deNormCoord(curr.latitude),
			lon: deNormCoord(curr.longitude),
			id: curr.id
		}
		return acc;
	}, {})

	console.log('found positions ', positions.length);

	const idString = positions.map(r => r.id).join();
	let tagStmt = db.prepare(`SELECT * FROM tag WHERE id in (${idString})`);
	let tags = tagStmt.all();
	
	tags.forEach(x => {
		Object.assign(map[x.id], {[x.k] : x.v});
	})

	const compilePManifest = (entry) => {
		let privacyManifest = {};
		//if it has entry, it's tagged ergo it's from osmcamera.
		if(entry.timestamp){
			Object.assign(privacyManifest,{
				...entry,
				...(entry.operator && {controllers:[entry.operator]}),
				provenance: 'osmcamera'
			});
		}else{
			Object.assign(privacyManifest, {
				...entry,
				provenance: 'DPP database' //our database
			});
		}
		return privacyManifest;
	}

	let results = Object.values(map)
	.map(res => ({
		latitude: Number(res.lat),
		longitude: Number(res.lon),
		radius: 30,
		privacy_manifest: compilePManifest(res)
	}));
	
	return results;
}

app.get('/v2/markers', function(req,res){
	const minlat = Number(req.query.minlat);
	const minlon = Number(req.query.minlon);
	const maxlat = Number(req.query.maxlat);
	const maxlon = Number(req.query.maxlon);
	
	try{
		let devices = getDevicesAround([minlat, minlon], [maxlat, maxlon]);
		res.json({ results: devices });
	}catch(error){
		console.error(error);
		res.status(500).json({ error })
	}
});

app.get('/markers', function(req, res){
	let { lon, lat, precision } = req.query;
	let hashstring = geohash.encode(lat, lon, precision);
	let [ minlat, minlon, maxlat, maxlon ] = geohash.decode_bbox(hashstring);
	console.log(Date.now());
	
	let devices = getDevicesAround([minlat, minlon], [maxlat, maxlon]);
	res.json({ minlat, minlon, maxlat, maxlon, results: devices});
});

//delete marker
app.delete('/markers', function(req, res){
	try{
		let { id, lat, lon } = req.body;
		if(id === undefined || id === null){
			let getIdStmt = db.prepare(`SELECT id FROM position 
			WHERE latitude = ? 
			AND latitude = ?`);

			let results = getIdStmt.get(normCoord(lat), normCoord(lon));
			id = results[0].id;
		}
		if(id === undefined || id === null){
			throw new Error("Could not find device marker");
		}
		console.log('id is ', id);
		deleteStmt = db.prepare(`DELETE FROM position WHERE id = ?`);
		let deleteResult = deleteStmt.run(id);
		res.status(200);	
	}catch(err){
		console.error(err);
		res.status(500).json(err);
	}
});

app.put('/markers', function(req, res){
	try{
		let {lat, lon} = req.body;
		
		let stmt = db.prepare(`INSERT INTO position (latitude, longitude) 
		VALUES (?, ?)`);

		let result = stmt.run(normCoord(lat), normCoord(lon));
		
		res.json({ result });
	}catch(err){
		console.error(err);
		res.status(500).json(err);
	}
});

const serverOpts = {
	key: fs.readFileSync('ssl.key'),
	cert: fs.readFileSync('ssl.crt')
};

//const server = https.createServer(serverOpts, app).listen(3000);
const server = http.createServer(app).listen(3000);
console.log('listening on port 3000');

process.on('SIGINT', () => {
	console.log('\nReceived SIGINT. Closing...\n');
	db.close();
	server.close();
});
