//TODO: Capitalize point param names

//Get projection of point t on a line (a, b): a line that goes through a and b
export function pointProjectionOnLine(t, [a, b]){
	//let s be the slope of line (a, b)
	let s = (a.y - b.y) / (a.x - b.x);
	//we get the basis(?) of the line, so we can compute the equation of the
	//line later
	let bS = a.y - s * a.x;

	//let r be the slope of the line orthogonal to our line
	let r = - 1 / s;
	//since we know that point t is on this line, we can compute the basis of 
	//this line
	let bR = t.y - r * t.x;

	//the point we're interested in is on both lines (at the intersection), 
	//so it satisfies both line equations:
	// 		y = s * x + bS;
	//and 	y = r * x + bR;
	//we replace y in the second equation to get x, then get y using x in the first eq.
	let x = (bR - bS) / (s - r);
	let y = s * x + bS;

	return {x, y};
}

//given two overlapping circles, get the middle point of their intersection.
//c1 - {x, y, r} -> coords and radius of circle 1
//idm c2
//d - optional distance param to avoid computing again: usually if this function is called, it's
//because the distnance has been calculated before.
export function getMedianIntersection(c1, c2, d){
	d = d || distanceCartesian(c1, c2);
	let segment = getIntersectionSegment(c1, c2, d);
	return {
		x: (segment[0].x + segment[1].x)/2,
		y: (segment[0].y + segment[1].y)/2
	};
}

export function getIntersectionSegment(c1, c2, d){
	const s = c1.r + c2.r - d;
	const l = c1.r - s;
	const k = c2.r - s; //why am I not using this? TODO:investigate
	const uc1c2 = [(c2.x - c1.x) / d, (c2.y - c1.y) / d]; //unit vector from c1 to c2
	const uc2c1 = uc1c2.map(c => -c); //invert unit vector (unit vector from c2 to c1)
	const a = {x: c1.x + l * uc1c2[0], y: c1.y + l * uc1c2[1]};
	const b = {x: c2.x + l * uc2c1[0], y: c2.y + l * uc2c1[1]};
	return [a, b];
}

export function latLongToCartesian(lat, long, lat0){
	if(!lat0){
		lat0 = lat;
	}
	const R = 6371e3; 
	const longRad = long * (Math.PI/180);
	const latRad = lat * (Math.PI/180);
	const lat0Rad = lat0 * (Math.PI/180);
	const x = R * longRad * Math.cos(lat0Rad);
	const y = R * latRad;
	return {x, y};
}

export function cartesianToLatLong(x, y, lat0){
	const R = 6371e3; 
	const lat0Rad = lat0 * (Math.PI/180);
	const longRad = x/(R*Math.cos(lat0Rad));
	const latRad = y/R;
	const latitude = latRad / (Math.PI/180);
	const longitude = longRad / (Math.PI/180);
	return {latitude, longitude};
}

/*
DISTANCE BETWEEN POINTS
*/
//naive pythagora for flat earthers
export function distanceCartesian(a, b){
	let v = a.y - b.y;
	let u = a.x - b.x;
	return Math.sqrt(v * v + u * u);
}

//https://www.movable-type.co.uk/scripts/latlong.html
export function distanceLatLongPythagora(a, b){
	const R = 6371e3;
	const x = (b.longitude - a.longitude) * Math.cos((a.latitude + b.latitude)/2);
	const y = (b.latitude - a.latitude);
	return Math.sqrt(x*x + y*y) * R;
}

//https://www.movable-type.co.uk/scripts/latlong.html
export function distanceLatLongHaversine(a, b){
	var R = 6371e3;
	var φ1 = a.latitude * (Math.PI/180);
	var φ2 = b.latitude * (Math.PI/180);
	var Δφ = (b.latitude-a.latitude) * (Math.PI/180);
	var Δλ = (b.longitude-a.longitude) * (Math.PI/180);

	var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
			Math.cos(φ1) * Math.cos(φ2) *
			Math.sin(Δλ/2) * Math.sin(Δλ/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = R * c;
	return d;
}

//given point P on a line and [A, B] a segment on the same line, is P between
//segment bounds?
export function isPointBetween(P, [A, B]){
	let dotProd = (A.x - P.x) * (A.x - B.x) + (A.y - P.y) * (B.y - A.y);
	if(dotProd < 0){
		return false;
	}

	let abSquareDist = (A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y);
	if(dotProd > abSquareDist){
		return false;
	}

	return true;
}

export function isCircleIntersectingCircle(C1, r1 ,C2 , r2){
	if(distanceCartesian(C1, C2) > r1 + r2){
		return false;
	}
	return true;
}

//given a circle with center at point C and radius r, and a segment [A, B], 
//does the segment ntersect the circle?
export function isSegmentIntersectingCircle(C, r, [A, B]){
	//let P = projection of C on (A,B) 
	let P = pointProjectionOnLine(C, [A, B]);
	//if radius is smaller than the distance between C and its projections, then
	//the circle is too far away
	let d = distanceCartesian(C, P);
	//console.log('distance between C, P', d);
	if(isNaN(d)){
		return false;
	}

	if(d > r){
		return false;
	}

	//check if  P is between [A, B];
	if(!isPointBetween(P, [A, B])){
		return false;
	}

	return true;
}

//given an array of paths and an array of circles, return their intersections
export function getIntersections(paths, devices){
	let res = [];
	for(let i = 0, n = paths.length; i < n; i++){
		for(let j = 0, m = devices.length; j < m; j++){
			//console.log('intersection check',devices[j], paths[i]);
			if(isSegmentIntersectingCircle(devices[j], devices[j].r, paths[i])){
				res.push({device: devices[j], path: paths[i], pathIndex: i, deviceIndex: j});
				//res[j] = devices[j];
			}
		}
	}
	return res;//Object.values(res);
}

const geometryHelper = {
	getIntersections,
	isSegmentIntersectingCircle,
	isPointBetween,
	distanceCartesian,
	pointProjectionOnLine,
	latLongToCartesian,
	cartesianToLatLong,
	isCircleIntersectingCircle
}

export default geometryHelper;