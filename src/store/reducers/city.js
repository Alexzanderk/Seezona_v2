import { GET_WEATHER_SUCCESS } from '../actions/weather_actions';

const city = (state, action) => {
    switch (action.type) {
        case GET_WEATHER_SUCCESS:
            return {
                id: action.city.id,
                name: action.city
            };

        default:
            return state;
    }
};

export default city;
