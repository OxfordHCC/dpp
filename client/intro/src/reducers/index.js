import { 
    MAP_CLICK,
    OPENROUTE_RECEIVE,
    GEODEVICE_RECEIVE,
    UPDATE_INTERSECTIONS
} from '../actions';

const mapClick = (state, point) => {
    if(!state.from){
        return {
            ...state,
            from: point
        }
    }
    if(!state.to){
        return {
            ...state,
            to: point
        }
    }
    return state;
}

const introReducer = (state = {}, action) => {
    switch(action.type){
        case MAP_CLICK:
            return mapClick(state, action.point);
        case OPENROUTE_RECEIVE:
            return {...state, route: action.path};
        case GEODEVICE_RECEIVE:
            return {...state, devices: action.devices};
        case UPDATE_INTERSECTIONS:
            return {...state, intersections: action.intersections};
        default:
            return state;
    }
}

export default introReducer;