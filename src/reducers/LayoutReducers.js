import { LAYOUT_ACTIONS } from './../actions/actionTypes'

const INITIAL_STATE = {
    
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LAYOUT_ACTIONS.ACTION:
            return { ...state };
        default:
            return state;
    }
}