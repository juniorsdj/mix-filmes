import { LAYOUT_ACTIONS } from './../actions/actionTypes'

const INITIAL_STATE = {
    prop: 1
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LAYOUT_ACTIONS.EX:
            return { ...state };
        default:
            return state;
    }
}