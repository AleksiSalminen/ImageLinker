import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
        <Box style={{margin:"1.5rem"}}>
            <Typography>{t("TopBar.Settings.Font")}:</Typography>
            

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
        </Box>
    );
}

export default FontSelector;
