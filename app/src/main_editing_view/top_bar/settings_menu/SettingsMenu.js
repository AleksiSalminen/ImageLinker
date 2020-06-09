import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { useTranslation } from 'react-i18next';

import LightModeSelector from './LightModeSelector.js';
import LanguageSelector from './LanguageSelector.js';
import FontSizeSelector from './FontSizeSelector.js';


/**
 * Function that returns the view for settings menu
 * @param {Object} props received parameters
 */
function SettingsMenu(props) {
    const { t } = useTranslation();
    const [settingsAnchor, setSettingsAnchor] = useState(null);

    const handleSettingsClick = (event) => {
        setSettingsAnchor(event.currentTarget);
    };
    
    const handleSettingsClose = () => {
        setSettingsAnchor(null);
    };

    return (
        <>
            <Button variant="contained" color="primary" aria-controls="settings-menu" aria-haspopup="true" onClick={handleSettingsClick}>
                {t("TopBar.Settings.SettingsButton")}
            </Button>

            <Menu
                id="settings-menu"
                anchorEl={settingsAnchor}
                keepMounted
                open={Boolean(settingsAnchor)}
                onClose={handleSettingsClose}
            >
                <LightModeSelector darkState={props.darkState} handleThemeChange={props.handleThemeChange}/>
                <LanguageSelector/>
                <FontSizeSelector fontSize={props.fontSize} setFontSize={props.setFontSize}/>
            </Menu>
        </>
    );
}

export default SettingsMenu;
