import {
	SELECT_DATE,
	UPDATE_HISTORY_ENTRIES,
	SELECT_INTERSECTION
} from '../actions/history.js';

const defaultState = {
    selectedDateISO: new Date().toISOString(),
    entries:{
        locations: [],
        devices: [],
        intersections: [],
        openroutes: []
    },
	selectedIntersection: null
};

const historyReducer = (state = defaultState, action) => {
	switch (action.type){
    case SELECT_DATE:
        return {
            ...state,
            selectedDateISO: action.selectedDateISO
        }
    case UPDATE_HISTORY_ENTRIES:
        return {
            ...state,
            entries: action.entries
        }
		
	case SELECT_INTERSECTION:
		return {
			...state,
			selectedIntersection: action.intersection
		}
		
    default:
        return state;
    }
}

export default historyReducer;
