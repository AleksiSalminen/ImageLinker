import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import fonts from './fonts.js';


/**
 * Function that returns the font selector
 * @param {Object} props received parameters
 */
function FontSelector(props) {
    const { t } = useTranslation();

    return (
        <MenuItem>
            {t("TopBar.Settings.Font")}:
            &nbsp;&nbsp;

            <Autocomplete
                id="font-select"
                value={props.font}
                onChange={(event, newFont) => {props.setFont(newFont)}}
                options={fonts}
                disableClearable={true}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
            />
        </MenuItem>
    );
}

export default FontSelector;
