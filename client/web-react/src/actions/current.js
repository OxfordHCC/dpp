import intersection from '../lib/intersection';

export const SET_CURRENT = "SET_CURRENT";
export const setCurrent = entries => ({
	type: SET_CURRENT,
	entries
});

export const refreshCurrent = () => async (dispatch, getState) => {
	const entries = await intersection.getCurrent();
	console.log('refresh current', entries);
	dispatch(setCurrent(entries));
}
