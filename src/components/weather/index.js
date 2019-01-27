import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

export const NoWeather = () => {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{ minHeight: 500 }}
        >
            <Paper
                elevation={8}
                style={{
                    width: 800,
                    height: 400,
                    padding: 20,
                    margin: '20px 0 50px'
                }}
            >
                <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    style={{ height: '100%' }}
                >
                    <h1>NO WEATHER</h1>
                </Grid>
            </Paper>
        </Grid>
    );
};

export const Preloader = () => {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{ minHeight: 500 }}
        >
            <Paper
                elevation={8}
                style={{
                    width: 800,
                    height: 400,
                    padding: 20,
                    margin: '20px 0 50px'
                }}
            >
                <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    style={{ height: '100%' }}
                >
                    <CircularProgress size={100} thickness={2.5} />
                </Grid>
            </Paper>
        </Grid>
    );
};
