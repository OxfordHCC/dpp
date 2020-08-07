import {
	SHOW_ERROR,
	HIDE_ERROR //hide error is handled by the default switch handler, not explicitly
} from '../actions/error';

export default (state = {
	visible:false
}, action) => {
	
	switch(action.type){
	case SHOW_ERROR:
		return {
			message: action.error.message,
			visible: true
		};
	case HIDE_ERROR:
		return {
			...state,
			visible:false
		}
	default:
		return state;
	}
};
