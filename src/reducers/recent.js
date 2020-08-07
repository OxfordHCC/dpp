const defaultState = [];

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case "SET_RECENT":
            return action.entries;
        default:
            return state;
    }
}

export default reducer;