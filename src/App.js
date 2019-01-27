import React from 'react';
import Grid from '@material-ui/core/Grid';

import SearchContainer from './containers/SearchContainer';
import WeatherInfoContainer from './containers/WeatherInfoContainer';

const App = props => {
    return (
        <Grid container>
            <p style={{ fontFamily: 'Roboto', fontSize: 11 }}>
                Application created on React with Redux! Used Material-UI
            </p>
            <SearchContainer />
            <WeatherInfoContainer />
        </Grid>
    );
};

export default App;
