import { showErrorTemp } from "./error";
import historyLib from "../lib/history";

export const UPDATE_HISTORY_ENTRIES = "UPDATE_HISTORY_ENTRIES";
export const updateHistory = (entries) => ({
    type: UPDATE_HISTORY_ENTRIES,
    entries
});

export const SELECT_DATE = "SELECT_DATE";
const selectDate = (selectedDateISO) => ({
    type: SELECT_DATE,
    selectedDateISO
});

export const SELECT_INTERSECTION = "SELECT_INTERSECTION";
export const selectIntersection = (intersection) => ({
	type: SELECT_INTERSECTION,
	intersection
});

//todo: move to history library
export const showHistory = (date) => async (dispatch) => {
	try{
		const selectedDate = new Date(date);
		if(selectedDate > new Date()){
			return;
		}
		dispatch(selectDate(date));
		const fromMs = selectedDate.setHours(0,0,0,0);
		const toMs = fromMs + 24 * 60 * 60 * 1000;
		const historyObject = await historyLib.get(fromMs, toMs);
		dispatch(updateHistory(historyObject));
		return;
	}catch(err){
		dispatch(showErrorTemp(err))
	}
}
