import reducer from './detectionServices';
import { updateStatus } from '../../actions/settings/detectionServices';


describe("detectionService reducer", () => {
	test("update status changes the status of service state", () => {
		const state = [{
			"id":"location",
			"name": "Location",
			"status": false
		}, {
			"id": "udp",
			"name": "UDP",
			"status": false
		}];
		
		const newState = reducer(state, updateStatus("location", true));
		
		expect(newState).toEqual([{
			id: "location",
			name: "Location",
			status: true
		}, {
			id: "udp",
			name: "UDP",
			status: false
		}]);
		
		expect(newState)
	});
});
