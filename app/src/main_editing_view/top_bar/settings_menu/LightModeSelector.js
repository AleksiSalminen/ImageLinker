import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import { useTranslation } from 'react-i18next';


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
            {t("TopBar.Settings.Mode.DarkMode")}
            <Switch
                checked={true}
                color="primary"
                onChange={2}
                inputProps={{ 'aria-label': 'light dark mode selection' }}
            />
            {t("TopBar.Settings.Mode.LightMode")}
        </MenuItem>
    );
}

export default LightModeSelector;
