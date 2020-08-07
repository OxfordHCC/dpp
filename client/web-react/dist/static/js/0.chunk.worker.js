/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./node_modules/eslint-loader/dist/cjs.js?!./src/workers/compression.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/eslint-loader/dist/cjs.js?!./src/workers/compression.worker.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--6-oneOf-1!./node_modules/eslint-loader/dist/cjs.js??ref--5-0!./src/workers/compression.worker.js ***!
  \**********************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/geometry.js */ "./src/lib/geometry.js");
//reduce entries by joining two adjacent inersecting location readings into a single one
//the center of the new location reading will be the halway point between the two intersecting
//readings. The resulting radius is the smallest of the two.
//on message, filter and group by date.
// importScripts('geometry.js');


onmessage = evt => {
  const {
    entries,
    port
  } = evt.data;
  const stdPll = (entries[0].latitude + entries[entries.length - 1].latitude) / 2;

  const toCartesian = (entry, i) => Object.assign({}, {
    r: entry.accuracy,
    originalIndex: i
  }, Object(_lib_geometry_js__WEBPACK_IMPORTED_MODULE_0__["latLongToCartesian"])(entry.latitude, entry.longitude, stdPll));

  const toLatLng = point => Object.assign({}, entries[point.originalIndex], {
    accuracy: point.r
  }, Object(_lib_geometry_js__WEBPACK_IMPORTED_MODULE_0__["cartesianToLatLong"])(point.x, point.y, stdPll));

  let processed = entries.map(toCartesian).reduce(reducer, []).map(toLatLng);

  if (port) {
    port.postMessage({
      event: "done",
      entries: processed
    });
    port.close();
  } else {
    postMessage({
      event: "done",
      entries: processed
    });
  } //Note: we use an "equirectangular" projection: basically 
  //stretching the earth flat. This seems to have a an error
  //of around 0.3 meters when a sensible "standard" parallel
  //is chosen. So the flat earth isn't too bad.
  //https://en.wikipedia.org/wiki/Equirectangular_projection


  function reducer(acc, curr, i) {
    const last = acc[acc.length - 1];

    if (!last) {
      acc.push(curr);
      return acc;
    }

    const d = Object(_lib_geometry_js__WEBPACK_IMPORTED_MODULE_0__["distanceCartesian"])(last, curr); //if distance within one meter, skip it...

    if (d < 1) {
      return acc;
    }

    if (d <= last.r + curr.r) {
      //intersecting circles, so merge them
      let intersection = Object(_lib_geometry_js__WEBPACK_IMPORTED_MODULE_0__["getMedianIntersection"])(last, curr);
      last.x = intersection.x;
      last.y = intersection.y;
      last.r = Math.min(last.r, curr.r);
    } else {
      acc.push(curr);
    }

    return acc;
  }
};

/***/ }),

/***/ "./src/lib/geometry.js":
/*!*****************************!*\
  !*** ./src/lib/geometry.js ***!
  \*****************************/
/*! exports provided: pointProjectionOnLine, getMedianIntersection, getIntersectionSegment, latLongToCartesian, cartesianToLatLong, distanceCartesian, distanceLatLongPythagora, distanceLatLongHaversine, isPointBetween, isCircleIntersectingCircle, isSegmentIntersectingCircle, getIntersections, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointProjectionOnLine", function() { return pointProjectionOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMedianIntersection", function() { return getMedianIntersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersectionSegment", function() { return getIntersectionSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latLongToCartesian", function() { return latLongToCartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianToLatLong", function() { return cartesianToLatLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceCartesian", function() { return distanceCartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceLatLongPythagora", function() { return distanceLatLongPythagora; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceLatLongHaversine", function() { return distanceLatLongHaversine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointBetween", function() { return isPointBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCircleIntersectingCircle", function() { return isCircleIntersectingCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSegmentIntersectingCircle", function() { return isSegmentIntersectingCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersections", function() { return getIntersections; });
//TODO: Capitalize point param names
//Get projection of point t on a line (a, b): a line that goes through a and b
function pointProjectionOnLine(t, [a, b]) {
  //let s be the slope of line (a, b)
  let s = (a.y - b.y) / (a.x - b.x); //we get the basis(?) of the line, so we can compute the equation of the
  //line later

  let bS = a.y - s * a.x; //let r be the slope of the line orthogonal to our line

  let r = -1 / s; //since we know that point t is on this line, we can compute the basis of 
  //this line

  let bR = t.y - r * t.x; //the point we're interested in is on both lines (at the intersection), 
  //so it satisfies both line equations:
  // 		y = s * x + bS;
  //and 	y = r * x + bR;
  //we replace y in the second equation to get x, then get y using x in the first eq.

  let x = (bR - bS) / (s - r);
  let y = s * x + bS;
  return {
    x,
    y
  };
} //given two overlapping circles, get the middle point of their intersection.
//c1 - {x, y, r} -> coords and radius of circle 1
//idm c2
//d - optional distance param to avoid computing again: usually if this function is called, it's
//because the distnance has been calculated before.

function getMedianIntersection(c1, c2, d) {
  d = d || distanceCartesian(c1, c2);
  let segment = getIntersectionSegment(c1, c2, d);
  return {
    x: (segment[0].x + segment[1].x) / 2,
    y: (segment[0].y + segment[1].y) / 2
  };
}
function getIntersectionSegment(c1, c2, d) {
  const s = c1.r + c2.r - d;
  const l = c1.r - s;
  const k = c2.r - s; //why am I not using this? TODO:investigate

  const uc1c2 = [(c2.x - c1.x) / d, (c2.y - c1.y) / d]; //unit vector from c1 to c2

  const uc2c1 = uc1c2.map(c => -c); //invert unit vector (unit vector from c2 to c1)

  const a = {
    x: c1.x + l * uc1c2[0],
    y: c1.y + l * uc1c2[1]
  };
  const b = {
    x: c2.x + l * uc2c1[0],
    y: c2.y + l * uc2c1[1]
  };
  return [a, b];
}
function latLongToCartesian(lat, long, lat0) {
  if (!lat0) {
    lat0 = lat;
  }

  const R = 6371e3;
  const longRad = long * (Math.PI / 180);
  const latRad = lat * (Math.PI / 180);
  const lat0Rad = lat0 * (Math.PI / 180);
  const x = R * longRad * Math.cos(lat0Rad);
  const y = R * latRad;
  return {
    x,
    y
  };
}
function cartesianToLatLong(x, y, lat0) {
  const R = 6371e3;
  const lat0Rad = lat0 * (Math.PI / 180);
  const longRad = x / (R * Math.cos(lat0Rad));
  const latRad = y / R;
  const latitude = latRad / (Math.PI / 180);
  const longitude = longRad / (Math.PI / 180);
  return {
    latitude,
    longitude
  };
}
/*
DISTANCE BETWEEN POINTS
*/
//naive pythagora for flat earthers

function distanceCartesian(a, b) {
  let v = a.y - b.y;
  let u = a.x - b.x;
  return Math.sqrt(v * v + u * u);
} //https://www.movable-type.co.uk/scripts/latlong.html

function distanceLatLongPythagora(a, b) {
  const R = 6371e3;
  const x = (b.longitude - a.longitude) * Math.cos((a.latitude + b.latitude) / 2);
  const y = b.latitude - a.latitude;
  return Math.sqrt(x * x + y * y) * R;
} //https://www.movable-type.co.uk/scripts/latlong.html

function distanceLatLongHaversine(a, b) {
  var R = 6371e3;
  var φ1 = a.latitude * (Math.PI / 180);
  var φ2 = b.latitude * (Math.PI / 180);
  var Δφ = (b.latitude - a.latitude) * (Math.PI / 180);
  var Δλ = (b.longitude - a.longitude) * (Math.PI / 180);
  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
} //given point P on a line and [A, B] a segment on the same line, is P between
//segment bounds?

function isPointBetween(P, [A, B]) {
  let dotProd = (A.x - P.x) * (A.x - B.x) + (A.y - P.y) * (B.y - A.y);

  if (dotProd < 0) {
    return false;
  }

  let abSquareDist = (A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y);

  if (dotProd > abSquareDist) {
    return false;
  }

  return true;
}
function isCircleIntersectingCircle(C1, r1, C2, r2) {
  if (distanceCartesian(C1, C2) > r1 + r2) {
    return false;
  }

  return true;
} //given a circle with center at point C and radius r, and a segment [A, B], 
//does the segment ntersect the circle?

function isSegmentIntersectingCircle(C, r, [A, B]) {
  //let P = projection of C on (A,B) 
  let P = pointProjectionOnLine(C, [A, B]); //if radius is smaller than the distance between C and its projections, then
  //the circle is too far away

  let d = distanceCartesian(C, P); //console.log('distance between C, P', d);

  if (isNaN(d)) {
    return false;
  }

  if (d > r) {
    return false;
  } //check if  P is between [A, B];


  if (!isPointBetween(P, [A, B])) {
    return false;
  }

  return true;
} //given an array of paths and an array of circles, return their intersections

function getIntersections(paths, devices) {
  let res = [];

  for (let i = 0, n = paths.length; i < n; i++) {
    for (let j = 0, m = devices.length; j < m; j++) {
      if (isSegmentIntersectingCircle(devices[j], devices[j].r, paths[i])) {
        res.push({
          device: devices[j],
          path: paths[i],
          pathIndex: i,
          deviceIndex: j
        });
      }
    }
  }

  return res;
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
};
/* harmony default export */ __webpack_exports__["default"] = (geometryHelper);

/***/ })

/******/ });
//# sourceMappingURL=0.chunk.worker.js.map