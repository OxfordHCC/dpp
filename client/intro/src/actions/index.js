import remote from '../lib/remote';
import pTracker from '../lib/pTracker';
import { Unique } from '../lib/util.js';

export const MAP_CLICK = "MAP_CLICK";
export const OPENROUTE_REQUEST = "OPEN_ROUTE_REQUEST";
export const OPENROUTE_RECEIVE = "OPEN_ROUTE_RECEIVE";
export const GEODEVICE_RECEIVE = "GEODEVICE_RECEIVE";
export const UPDATE_INTERSECTIONS = "UPDATE_INTERSECTIONS";


const updateIntersections = (intersections) => ({
    type: UPDATE_INTERSECTIONS,
    intersections
});

const calculateIntersections = async (dispatch, entries, devices) => {
    try{
        let res = (await pTracker.getIntersections(entries, devices));
        dispatch(updateIntersections(res));
    }catch(err){
        console.error(err);
    }
}

export const superMapClick = (point) => async (dispatch, getState) => {
    let state = getState();
    if(state.route){
        return;
    }
    
    await dispatch(mapClick(point));
    state = getState();
    if(state.from && state.to){
        await fetchRoutes(dispatch, [state.from, state.to]);
        await fetchDevices(dispatch, state.from);
        let {route, devices} = getState();
        route = route.map(([latitude, longitude])=> ({ latitude, longitude }));
        if(route && devices){
            calculateIntersections(dispatch, route, devices);
        }
    }
}

const geodeviceReceive = (devices) => ({
    type: GEODEVICE_RECEIVE,
    devices
});

export const fetchDevices = async (dispatch, location) => {
    try{
        let res = await pTracker.getDevices([location.latitude, location.longitude]);
        dispatch(geodeviceReceive(res));
    }catch(err){
        console.error(err);
    }
}

export const mapClick = (point) => ({
    type: MAP_CLICK,
    point
});


export const openrouteReceive = (path) => ({
    type: OPENROUTE_RECEIVE,
    path
});

export const fetchRoutes = async (dispatch, points) => {
    try{
        let res = await remote.getDemoRoute(points);
        dispatch(openrouteReceive(res));
    }catch(err){
        console.error(err);
    }
}