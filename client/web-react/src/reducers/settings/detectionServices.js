import {
	UPDATE_STATUS,
	SET_LIST
} from '../../actions/settings/detectionServices';

export default (state = [], action) => {
	switch(action.type){
	case SET_LIST:
		return action.list;
	case UPDATE_STATUS:
		return state.map(service => {
			let newService = Object.assign({}, service);
			if(newService.id === action.service){
				newService.status = action.status;
			}
			return newService;
		});
	default:
		return state;
	}
}
