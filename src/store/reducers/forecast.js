import {
    GET_FORECAST_REQUEST,
    GET_FORECAST_SUCCESS,
    GET_FORECAST_FAIL
} from '../actions/foresact_action';

const initialState = {
    forecast: [],
    loading: false,
    error: null
};
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_FORECAST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_FORECAST_SUCCESS:
            return {
                ...state,
                forecast: action.payload,
                error: null,
                loading: false
            };
        case GET_FORECAST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
