import {
	groupBy,
	chunk
} from './util';


test('groupBy should group using string as key', () => {
	const mockData = [
		{type: 1, id:1},
		{type: 1, id:2},
		{type: 2, id:3}
	];

	const expected = {
		1: [{type: 1, id: 1}, {type: 1, id: 2}],
		2: [{type: 2, id: 3}]
	}
	
	const grouped = groupBy("type", mockData);
	expect(grouped).toEqual(expected);
	const grouped2 = groupBy("type")(mockData);
	expect(grouped2).toEqual(expected);
});

test('groupBy should group using lambda expression as key', () => {
	const mockData = [
		{type: 1, id:1},
		{type: 1, id:2},
		{type: 2, id:3}
	];
	const expected = {
		1: [{type: 1, id: 1}, {type: 1, id: 2}],
		2: [{type: 2, id: 3}]
	};
	
	const grouped = groupBy(x => x.type, mockData);
	expect(grouped).toEqual(expected);
	const grouped2 = groupBy(x => x.type)(mockData);
	expect(grouped2).toEqual(expected);
});

test('chunk(2, arr) should split array into arrays of size 2', () => {
	const arr = [1,1,1,1,1,1];
	const chunked = chunk(2,arr);
	expect(chunked).toEqual([[1,1],[1,1],[1,1]]);
});

test('chunk(2)(arr) should split array into arrays of size 2', () => {
	const arr = [1,1,1,1,1,1];
	const chunked = chunk(2)(arr);
	expect(chunked).toEqual([[1,1],[1,1],[1,1]]);
});
