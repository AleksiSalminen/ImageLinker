import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';


/**
 * Function that returns the light/dark mode selector
 * @param {Object} props received parameters 
 */
function LightModeSelector(props) {
    const { t } = useTranslation();
    
    return (
        <Box style={{margin:"1.5rem"}}>
            <Typography>{t("TopBar.Settings.Mode.Theme")}:</Typography>
            &nbsp;&nbsp;
            {t("TopBar.Settings.Mode.LightMode")}
            <Switch
                checked={props.darkState}
                color="primary"
                onChange={props.handleThemeChange}
                inputProps={{ 'aria-label': 'light dark mode selection' }}
            />
            {t("TopBar.Settings.Mode.DarkMode")}
        </Box>
    );
}

export default LightModeSelector;
