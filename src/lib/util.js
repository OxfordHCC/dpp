/*
  Documentation

  
  groupBy

  chunk(n, arr?) => [] | fn
  flatten(arr) => []
  groupBy(key, arr?) => {} | fn
  pluck(indeces, arr) => []
  Evented
  uuidv4 - generate uuidv4 (conforms to ISOsomething(4.4))
*/

function noopTag(t) {
	for (var o = [t[0]], i = 1, l = arguments.length; i < l; i++){
		o.push(arguments[i], t[i]);
	}
	return o.join('').trim();
}

//copied from so
export function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export function last(arr){
	return arr[arr.length-1];
}

export function first(arr){
	return arr[0];
}

export function groupBy(key, data){
	let keyFn = key;
	if(typeof keyFn === "string"){
		keyFn = x => x[key];
	}

	function doGroupBy(data){
		return data.reduce((acc, curr) => {
			const k = keyFn(curr);
			(acc[k] = acc[k] || []).push(curr)
			return acc;
		},{});
	}
	if(!data){
		return doGroupBy;
	}
	return doGroupBy(data);
}

export function chunk(size, arr){
	function doChunk(arr){
		return arr.reduce((acc, curr, i) => {
			const cIdx = Math.floor(i / size);
			const cArr = (acc[cIdx] = acc[cIdx] || []);
			cArr[i % size] = curr;
			return acc;
		},[]);
	}
	
	if(!arr){
		return doChunk;
	}
	
	return doChunk(arr);
}

export function pluck(indeces, fromArr){
	return indeces.map(i => fromArr[i]);
}

export function htmlCompile(t) {
	for (var o = [t[0]], i = 1, l = arguments.length; i < l; i++){
	let val = arguments[i];
		if(val instanceof HTMLElement){
			val = `<fosh-placeholder id="${i}"></fosh-placeholder>`;
		}
		o.push(val, t[i]);
	}

	let tempNode = document.createElement('template'); 
	let htmlStr = o.join('').trim();
	tempNode.innerHTML = htmlStr;
	tempNode = tempNode.content;

	for(const pHolder of tempNode.querySelectorAll('fosh-placeholder')){
		pHolder.replaceWith(arguments[pHolder.getAttribute('id')]);
	}

	return tempNode;
}

export function cssCompile(t) {
	for (var o = [t[0]], i = 1, l = arguments.length; i < l; i++){
		o.push(arguments[i], t[i]);
	}

	let styleNode = document.createElement('style');
	styleNode.innerHTML = o.join('').trim();
	
	return styleNode;
}


//could use this instead:
//(c)(opied from)https://gist.github.com/aishikaty/dcb6e7f3441c1c8321a34437139bf17f
export function htmlEscape(strings, ...values){
  return Array.from(strings).map((string, index) => (
    string + (
      Array.isArray(values[index])
      ? values[index].join("")
      : (new Option(values[index])).innerHTML
    )
  )).join('');
}

export function gel(elem){ return document.querySelector(elem); }
export function gell(elem){ return document.querySelectorAll(elem); }
export function deNormCoord(coord){ return coord/10000000; }

export const html = noopTag;
export const css = noopTag;

//flatten one levelx
export function flatten(arr){
	return arr.reduce((acc, curr)=> acc.concat(curr), []);
}

//SHOULD BE DEPRECATED
export const DEVICE_RADIUS = 33;

export class Evented{
	constructor(){
		this.callbacks = {};
		return this;
	}

	trigger(id, ...args){
		if(this.callbacks[id] === undefined){
			return;
		}
		this.callbacks[id].forEach(cb => cb.apply(null, args));
	}

	on(id, cb){
		(this.callbacks[id] = this.callbacks[id] || []).push(cb);
		return cb;
	}

	once(id, cb){
		const cbOnce = function(){
			cb.apply(null, arguments);
			this.off(id, cb);
		}

		this.on(id, cbOnce);
		return this;
	}

	off(id, cb){
		let indx = this.callbacks[id].find(cb);
		this.callbacks[id].splice(indx,1);
		return this;
	}
}

export const Unique = (field) => {
	let map ={};
	const keyFn = x => (field && x[field]) || x;
	return (x => {
		const key = keyFn(x) ;
		if(map[key]){
			return false;
		}
		map[key] = x;
		return true;
	});
}

export default {gel, html, deNormCoord, DEVICE_RADIUS, chunk, Evented, cssCompile};
