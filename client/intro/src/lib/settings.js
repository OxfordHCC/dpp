const LOCATION_SERVICE = 1;
const PROXIMITY_SERVICE = 2;

export default {
	services: {
		get location(){
			return localStorage.getItem(LOCATION_SERVICE);
		},
		set location(val){
			localStorage.setItem(LOCATION_SERVICE, val);
		},
		get proximity(){
			return localStorage.getItem(PROXIMITY_SERVICE);
		},
		set proximity(val){
			localStorage.setItem(PROXIMITY_SERVICE, val);
		}
	}
}