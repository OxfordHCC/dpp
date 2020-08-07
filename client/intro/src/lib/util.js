function noopTag(t) {
	for (var o = [t[0]], i = 1, l = arguments.length; i < l; i++){
		o.push(arguments[i], t[i]);
	}
	return o.join('').trim();
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


export function chunk(arr, size){
	let chunks = Math.ceil(arr.length / size);
	
	return arr.reduce((acc, curr, i)=>{
		let groupIndex = Math.floor(i / size);
		acc[groupIndex].push(curr);
		return acc;
	}, Array(chunks).fill(null).map(() => ([])));
}

//flatten one level
export function flatten(arr){
	return arr.reduce((acc, curr)=>{
		acc = acc.concat(curr);
		return acc;
	}, []);
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