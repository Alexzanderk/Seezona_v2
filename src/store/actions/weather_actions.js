import Api from '../../utils/api';

const request = new Api();

export const GET_REQUEST = 'GET_REQUEST';

export const getRequest = () => {
    return {
        type: GET_REQUEST
    };
};

export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';

export const getWeather = (city, unit) => {
    return dispatch => {
        dispatch(getRequest());
        return request
            .getCurrentWeather(city, unit)
            .then(({ data }) => {
                console.log(data);
                dispatch({
                    type: GET_WEATHER_SUCCESS,
                    citiesWeather: data,
                    currentCityWeather: data,
                    city: {name:data.name, id: data.id},
                    unit
                });
            })
            .catch(({ response: { data } }) => dispatch(getWeatherFail(data)));
    };
};

export const GET_WEATHER_FAIL = 'GET_WEATHER_FAIL';

export const getWeatherFail = data => {
    return {
        type: GET_WEATHER_FAIL,
        payload: data
    };
};

export const REMOVE_WEATHER_SUCCESS = 'REMOVE_WEATHER_SUCCESS';

export const removeCity = city => {
    return {
        type: REMOVE_WEATHER_SUCCESS,
        payload: city
    };
};
