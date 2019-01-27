import Api from '../../utils/api';

export const GET_FORECAST_REQUEST = 'GET_FORECAST_REQUEST';

export const getForecastRequest = () => ({
    type: GET_FORECAST_REQUEST
});

export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';

export const getForecast = (city, unit) => {
    return dispatch => {
        dispatch(getForecastRequest());
        return Api
            .getForcaseWeather(city, unit)
            .then(({ data }) => {
                dispatch({
                    type: GET_FORECAST_SUCCESS,
                    payload: data.list
                });
            })
            .catch(response => dispatch(getForecastFail(response)));
    };
};

export const GET_FORECAST_FAIL = 'GET_FORECAST_FAIL';

export const getForecastFail = data => ({
    type: GET_FORECAST_FAIL,
    payload: data
});
