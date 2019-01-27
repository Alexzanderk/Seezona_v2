import Api from '../../utils/api';

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
        return Api
            .getCurrentWeather(city, unit)
            .then(({ data }) => {
                dispatch({
                    type: GET_WEATHER_SUCCESS,
                    citiesWeather: data,
                    currentCityWeather: data,
                    city: { name: data.name, id: data.id },
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

export const removeCity = (city, cities) => {
    cities = cities.filter(item => item !== city);

    return dispatch => {
        dispatch({
            type: REMOVE_WEATHER_SUCCESS,
            payload: city
        });

        dispatch(getWeatherAll(cities));
    };
};

export const GET_WEATHER_ALL_SUCCESS = 'GET_WEATHER_ALL_SUCCESS';
export const GET_WEATHER_ALL_FAIL = 'GET_WEATHER_ALL_FAIL';

export const getWeatherAll = (cities, unit) => {
    return async dispatch => {
        dispatch(getRequest());

        let requests = await Promise.all(
            cities.map(city =>
                Api.getCurrentWeather(city, unit).then(({ data }) => data)
            )
        ).catch(res => {
            return {
                type: GET_WEATHER_ALL_FAIL,
                payload: res
            };
        });

        dispatch({
            type: GET_WEATHER_ALL_SUCCESS,
            payload: requests
        });
    };
};
