import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { formatTemperature } from '../utils/temperatureFormat';

const CurrentWeather = ({currentWeather, unit}) => {
  return (
    <Table>
    <TableHead>
        <TableRow>
            <TableCell>Property</TableCell>
            <TableCell align="right">Value</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell component="th" scope="row">
                Temperature max:
            </TableCell>
            <TableCell align="right">
                {Math.round(currentWeather.main.temp_max)}
                {formatTemperature(unit)}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell component="th" scope="row">
                Temperature min:
            </TableCell>
            <TableCell align="right">
                {Math.round(currentWeather.main.temp_min)}
                {formatTemperature(unit)}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell component="th" scope="row">
                Pressure
            </TableCell>
            <TableCell align="right">
                {currentWeather.main.pressure}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell component="th" scope="row">
                Humidity:
            </TableCell>
            <TableCell align="right">
                {currentWeather.main.humidity}
            </TableCell>
        </TableRow>
    </TableBody>
</Table>
  )
}

export default CurrentWeather
