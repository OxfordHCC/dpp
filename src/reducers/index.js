import { combineReducers } from 'redux';
import historyReducer from './history';
import settingsReducer from './settings/';
import errorReducer from './error';
import currentReducer from './current';

export default combineReducers({
	history: historyReducer,
	settings: settingsReducer,
	error: errorReducer,
	current: currentReducer
});
