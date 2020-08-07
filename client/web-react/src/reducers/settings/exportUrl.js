import {
	UPDATE_URL
} from '../../actions/settings/exportUrl';

export default (state = {}, action) => {
	switch (action.type){
	case UPDATE_URL:
		return Object.assign({},state, {
			url: action.url
		});
	default:
		return state;
	}
}
