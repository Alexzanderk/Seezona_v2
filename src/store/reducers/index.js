import { combineReducers } from 'redux';
import weather, * as fromWeather from './weather';
import forecast from './forecast'

const rootReducer = combineReducers({
    weather,
    forecast
});

export default rootReducer;

export const getCitiesName = state => {
    return fromWeather.getCitiesName(state);
};

export const getCitiesWeathers = state => {
    return fromWeather.getCitiesWeathers(state);
};
