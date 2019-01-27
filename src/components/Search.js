import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import CitiesWeatherContainer from '../containers/CitiesWeatherContainer';
import AutoCheckWeather from './AutoCheckWeather';

const Search = props => {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('default');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(
        () => {
            let interval;

            document.title = `Weather for ${props.city ? props.city : '❓'}`;
            if (props.city && props.autocheck) {
                interval = setInterval(checkWeather, 1000 * 10);
            } else {
                clearInterval(interval);
            }

            return () => {
                clearInterval(interval);
            };
        },
        [props.city, props.autocheck, props.unit]
    );

    function handleClickOpen() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

    const checkWeather = () => props.getWeather(props.city, props.unit);

    const handleChangeCity = event => setCity(event.target.value);

    const handleChangeUnit = event => {
        setUnit(event.target.value);
        if (props.city) {
            props.getWeather(props.city, event.target.value);
        }
    };

    const handleDelete = city => () => {
        props.removeCity(city, props.cities);
    };
    const handleGetWeather = (city, unit) => {
        props.getWeather(city, unit);
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        setCity('');
        props.getWeather(city, props.unit);
    };

    return (
        <Grid container direction="column" alignItems="center" justify="center">
            <Paper elevation={8} style={{ width: 800, padding: 20 }}>
                <Grid item>
                    <h1 className="search_title">
                        Where you want to see weather?
                    </h1>
                </Grid>
                <Grid item>
                    <form id="search" onSubmit={handleSubmitForm}>
                        <TextField
                            style={{ width: '100%' }}
                            id="search"
                            label="Find weather in your city"
                            value={city}
                            onChange={handleChangeCity}
                            margin="normal"
                        />

                        <FormControl style={{ width: '50%' }}>
                            <InputLabel htmlFor="unit">
                                Select temperature unit
                            </InputLabel>
                            <Select
                                value={unit}
                                onChange={e => handleChangeUnit(e)}
                                inputProps={{
                                    name: 'unit',
                                    id: 'unit'
                                }}
                            >
                                <MenuItem value="default">
                                    <em>Kelvin</em>
                                </MenuItem>
                                <MenuItem value="metric">Celsius</MenuItem>
                                <MenuItem value="imperial">Fahrenheit</MenuItem>
                            </Select>
                            <FormHelperText>
                                Default temperature unit -- Kelvin
                            </FormHelperText>
                        </FormControl>
                    </form>
                    <Grid item style={{ margin: '20px 0' }}>
                        {props.cities.map((city, i) => (
                            <Tooltip
                                key={i}
                                title="Click to look weather or you can delete city"
                            >
                                <Chip
                                    color="primary"
                                    variant="outlined"
                                    style={{ marginRight: '5px' }}
                                    label={city}
                                    onClick={e =>
                                        handleGetWeather(
                                            e.target.innerText,
                                            props.unit
                                        )
                                    }
                                    onDelete={handleDelete(city)}
                                />
                            </Tooltip>
                        ))}
                        {props.cities.length > 1 ? (
                            <Button
                                onClick={() => {
                                    handleClickOpen();
                                    props.getWeatherAll(
                                        props.cities,
                                        props.unit
                                    );
                                }}
                            >
                                Show all cities
                            </Button>
                        ) : null}

                        <CitiesWeatherContainer
                            isOpen={isOpen}
                            handleClose={handleClose}
                        />
                    </Grid>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        item
                    >
                        <Button
                            color="primary"
                            type="submit"
                            variant="contained"
                            form="search"
                        >
                            Submit
                        </Button>

                        <AutoCheckWeather
                            value={props.autocheck}
                            change={props.toggleAutoCheck}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Search;
