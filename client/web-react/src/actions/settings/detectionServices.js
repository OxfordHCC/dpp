import native from '../../lib/native';

export const UPDATE_STATUS = "UPDATE_STATUS";
export const updateStatus = (service, status) => ({
	type: UPDATE_STATUS,
	service,
	status
});

export const SET_LIST = "SET_LIST";
export const setList = (list) => ({
	type: SET_LIST,
	list
});

export const toggle = (service) => async (dispatch, getState) =>  {
	//call native, get reply and update_status with reply
	const { status } = await native.settings.toggleService(service);
	dispatch(updateStatus(service, status));
};

const shouldInit = (state) => {
	const services = state.settings.detectionServices;
	if(services.length === 0){
		return true;
	}
	return false;
};

export const init = () => async (dispatch, getState) => {
	if(!shouldInit(getState())){
		return;
	}
	const res = await native.getServices();
	return dispatch(setList(res));
};

export default { toggle, init };
