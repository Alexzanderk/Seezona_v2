import React, { useState } from 'react';
import moment from 'moment-js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Preloader, NoWeather } from './weather';
import CurrentWeather from './CurrentWeather';
import ForecastContainer from '../containers/ForecastContainer';


const WeatherInfo = props => {
    const [isOpen, setIsOpen] = useState(false);

    const { currentCityWeather: currentWeather, unit } = props;

    function handleClickOpen() {
        setIsOpen(true);
        props.getForecast(props.city, props.unit)
    }

    function handleClose() {
        setIsOpen(false);
    }

    if (props.loading) return <Preloader />;

    if (currentWeather) {
        return (
            <Grid container justify="center">
                <Paper
                    onClick={() => console.log(props)}
                    elevation={8}
                    style={{ width: 800, padding: 20, margin: '20px 0 50px' }}
                >
                    <h1>
                        {currentWeather.name} weather information on{' '}
                        {moment(currentWeather.dt).format('DD.MM.YYYY')}
                    </h1>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClickOpen}
                    >
                        Show forecast
                    </Button>
                    <CurrentWeather
                        currentWeather={currentWeather}
                        unit={unit}
                    />

                    <ForecastContainer
                        isOpen={isOpen}
                        handleClose={handleClose}
                    />
                </Paper>
            </Grid>
        );
    }
    return <NoWeather />;
};

export default WeatherInfo;
