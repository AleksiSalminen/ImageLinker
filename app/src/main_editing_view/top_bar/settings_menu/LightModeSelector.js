import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';


/**
 * Function that returns the light/dark mode selector
 * @param {Object} props received parameters 
 */
function LightModeSelector(props) {
    const { t } = useTranslation();
    
    return (
        <MenuItem>
            {t("TopBar.Settings.Mode.Theme")}:
            &nbsp;&nbsp;
            {t("TopBar.Settings.Mode.LightMode")}
            <Switch
                checked={props.darkState}
                color="primary"
                onChange={props.handleThemeChange}
                inputProps={{ 'aria-label': 'light dark mode selection' }}
            />
            {t("TopBar.Settings.Mode.DarkMode")}
        </MenuItem>
    );
}

export default LightModeSelector;
