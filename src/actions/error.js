
export const HIDE_ERROR = "HIDE_ERROR";
export const hideError = () => ({
	type: HIDE_ERROR
});

export const SHOW_ERROR = "SHOW_ERROR";
export const showError = error => ({	
		type: SHOW_ERROR,
		error
	});

export const showErrorTemp = error => dispatch => {
	console.error(error);
	dispatch(showError(error));
	setTimeout(() => {
		dispatch(hideError());
	}, 4000);
}
