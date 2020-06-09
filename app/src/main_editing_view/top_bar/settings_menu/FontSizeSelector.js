import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


/**
 * Function that returns the font size selector
 * @param {Object} props received parameters
 */
function FontSizeSelector(props) {
    const { t } = useTranslation();

    return (
        <Box style={{margin:"1.5rem"}}>
            <Typography>{t("TopBar.Settings.FontSize.FontSize")}:</Typography>
            &nbsp;&nbsp;

            <input 
                type="number"
                value={props.fontSize}
                min={5}
                max={30}
                onChange={(event) => {props.setFontSize(event.target.value)}}
            />
        </Box>
    );
}

export default FontSizeSelector;
