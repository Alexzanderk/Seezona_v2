import omit from 'lodash/omit';
import values from 'lodash/values';
import invert from 'lodash/invert';

import {
    GET_REQUEST,
    GET_WEATHER_FAIL,
    GET_WEATHER_SUCCESS,
    REMOVE_WEATHER_SUCCESS
} from '../actions/weather_actions';

const mock = {625144: "Minsk", 2643743: "London"}

const initialState = {
    loading: false,
    citiesWeather: {},
    cities: {...mock},
    currentCityWeather: null,
    city: null,
    unit: undefined,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                currentCityWeather: action.currentCityWeather,
                cities: {
                    ...state.cities,
                    [action.city.id]: action.city.name
                },
                city: action.city.name,
                loading: false,
                unit: action.unit
            };

        case GET_WEATHER_FAIL:
            return {
                ...state,
                error: action.payload.message,
                loading: false
            };

        case REMOVE_WEATHER_SUCCESS:
            return {
                ...state,
                cities: invert(omit(invert(state.cities), action.payload)),
                currentCityWeather: state.city === action.payload ? null : state.currentCityWeather
            };

        default:
            return state;
    }
}

export const getCitiesName = state => values(state.weather.cities);

export const getCitiesWeathers = state => {
    let weathers = values(state.weather.citiesWeather);
    let newWeather = [];
    weathers.forEach(weather => {
        let obj = {};
        obj.city = weather.city.name;
        obj.list = weather.list;
        newWeather.push(obj);
    });
    return newWeather;
};
