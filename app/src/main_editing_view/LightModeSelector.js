import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';


/**
 * Function that returns the light/dark mode selector
 * @param {Object} props received parameters 
 */
function LightModeSelector(props) {

    return (
        <MenuItem>
            Dark
            <Switch
                checked={true}
                color="primary"
                onChange={2}
                inputProps={{ 'aria-label': 'light dark mode selection' }}
            />
            Light
        </MenuItem>
    );
}

export default LightModeSelector;
