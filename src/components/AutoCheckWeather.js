import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const AutoCheckWeather = ({change, value}) => {
    return (
        <FormControlLabel
            control={
                <Switch
                    disableRipple
                    checked={value}
                    color="primary"
                    onChange={change }
                    value="checkedB"
                />
            }
            label="Auto check weather"
        />
    );
};

export default AutoCheckWeather;
