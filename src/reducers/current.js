import { SET_CURRENT } from '../actions/current';

const defaultState = [];

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_CURRENT:
            return action.entries;
        default:
            return state;
    }
}

export default reducer;
