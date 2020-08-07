import { handleEvents } from './nativeInterface';
import { pluck } from '../util.js';
import nativeInterface from './nativeInterface';
import AndroidInterface from './android';

//jest.mock('../credentials.js');

const typeAa = "typeAa";
const typeAb = "typeAb";
const typeB = "typeB";

test('handleEvents should group events according to event handling map and call the handlers', () => {

	const handlerA = jest.fn();
	const handlerB = jest.fn();
	
	const handlers = {
		typeAa: handlerA,
		typeAb: handlerA,
		typeB: handlerB
	};
	
	const events = [typeAa, typeAb, typeB].map(type => ({ type }));38
	handleEvents(events, handlers);
	expect(handlerA).toBeCalledTimes(1);
	expect(handlerB).toBeCalledTimes(1);
});

test('handleEvents should return a promise resolving when all handler promises have resolved', ()=>{
	const delayResolve = delay => new Promise((resolve, reject) => {
		setTimeout(() => resolve(), delay);
	});
	function handlerA(){ return  delayResolve(100) };
	function handlerB(){ return  delayResolve(200) };
	const handlers = {
		typeAa: handlerA,
		typeB: handlerB
	};
	
	const events = [typeAa, typeAa, typeB].map(type => ({ type }));
	const handleEventsRes = handleEvents(events, handlers);
	expect(handleEventsRes).toBeInstanceOf(Promise)
	expect(handleEventsRes).resolves.toBe([]);
});


test('nativeInterface can be initialized with android interface', () => {
	console.warn("not implemented");
});

test('nativeInterface can be initialized with ios interface', () => {
	console.warn("not implemented");
});
