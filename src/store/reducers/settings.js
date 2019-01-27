import {TOGGLE_AUTOCHECK} from '../actions/settings_action'
const initialState = {
    autoCheck: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_AUTOCHECK:
            return {
                ...state,
                autoCheck: !state.autoCheck
            }
    
        default:
            return state
    }
}