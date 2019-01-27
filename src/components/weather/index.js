import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';

import DialogAbout from '../DialogAbout';
export const NoWeather = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClickOpen() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

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
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ height: '100%' }}
                >
                    <h1>
                        NO WEATHER, NO PROBLEM <span role="img">😄</span>
                    </h1>
                    <h2>BEFORE YOU START</h2>
                    <Fab
                        onClick={handleClickOpen}
                        variant="extended"
                        color="primary"
                    >
                        + CLICK ME
                    </Fab>
                    <DialogAbout isOpen={isOpen} handleClose={handleClose} />
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
