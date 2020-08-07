import {
	SELECT_DATE,
	UPDATE_HISTORY_ENTRIES
} from '../actions/history.js';

const defaultState = {
    selectedDateISO: new Date().toISOString(),
    entries:{
        locations: [],
        devices: [],
        intersections: [],
        openroutes: []
    }
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
        default:
            return state;
    }
}

export default historyReducer;
