import React from 'react';
import moment from 'moment-js';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { formatTemperature } from '../utils/temperatureFormat';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ForecastWeatherDialog = ({
    isOpen,
    handleClose,
    city,
    unit,
    forecast,
    loading
}) => {
    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            maxWidth="xl"
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                Forecast weather for {city}
            </DialogTitle>
            <DialogContent>
                {loading ? (
                    <Grid container justify='center' alignItems='center'>
                        <CircularProgress />
                    </Grid>
                ) : (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Temp min</TableCell>
                                <TableCell align="right">Temp max</TableCell>
                                <TableCell align="right">Pressure</TableCell>
                                <TableCell align="right">Humidity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {forecast.map((forecast, i) => (
                                <Tooltip
                                    placement="bottom-start"
                                    key={i}
                                    title={forecast.weather[0].description}
                                >
                                    <TableRow hover>
                                        <TableCell component="th" scope="row">
                                            {moment(forecast.dt).format(
                                                'DD/MM/YYYY hh:mm'
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <img
                                                src={`http://openweathermap.org/img/w/${
                                                    forecast.weather[0].icon
                                                }.png`}
                                                alt=""
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            {Math.round(
                                                forecast.main.temp_min
                                            ) + formatTemperature(unit)}
                                        </TableCell>
                                        <TableCell align="right">
                                            {Math.round(
                                                forecast.main.temp_max
                                            ) + formatTemperature(unit)}
                                        </TableCell>
                                        <TableCell align="right">
                                            {Math.round(forecast.main.pressure)}
                                        </TableCell>
                                        <TableCell align="right">
                                            {forecast.main.humidity}
                                        </TableCell>
                                    </TableRow>
                                </Tooltip>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ForecastWeatherDialog;
