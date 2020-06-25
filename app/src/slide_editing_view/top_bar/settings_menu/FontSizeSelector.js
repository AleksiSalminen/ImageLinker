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

    const fontSize = props.settings.fontSize;
    const setFontSize = props.settings.setFontSize;

    return (
        <Box style={{margin:"1.0rem", padding:"0.5rem", borderStyle:"ridge hidden hidden hidden"}}>
            <Typography>{t("TopBar.Settings.FontSize.FontSize")}:</Typography>
            &nbsp;&nbsp;

            <input 
                type="number"
                value={fontSize}
                style={{padding:"0.5rem", borderStyle:"solid", borderRadius:"0.3rem", borderWidth:"thin", borderColor:"grey"}}
                min={5}
                max={30}
                onChange={(event) => {setFontSize(event.target.value)}}
            />
        </Box>
    );
}

export default FontSizeSelector;
