//import { compressPoints } from './location';


describe("location library", () => {

	it('will be implemented', () => console.log("location lib test not implemented"))
	/*
	const toObject = accuracy => ([latitude, longitude]) => ({
		latitude,
		longitude,
		accuracy
	});
	
	describe("location entry simplify", () => {
		test("should compress points close to one another", async () => {
			const latlons = [
				[ 50.937469, -1.398254 ],
				[ 50.937483, -1.398272 ],
				[ 50.937437, -1.398250 ],
				[ 50.937442, -1.398230 ]
			];
			const accuracy = 30;
			const points = latlons.map(toObject(accuracy));
			const compressed = await compressPoints(points);
			expect(compressed.length).toEqual(1);
		})
		test("points far apart should not be compressed", () => {
			const latlons = [
				[ 50.937469, -1.398254 ],
				[ 50.937483, -1.398272 ],
				[ 50.937437, -1.398250 ],
				[ 50.937442, -1.398230 ]
			]
			const accuracy = 1;
			const points = latlons.map(toObject(accuracy));
			const compressed = compressPoints(points);
			expect(compressed.length).toEqual(latlons.length);
		})
	})*/
});

