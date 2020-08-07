import {combineReducers} from 'redux';
import detectionServices from './detectionServices';
import exportUrl from './exportUrl';

export default combineReducers({
	detectionServices,
	exportUrl
});
