import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';

import LightModeSelector from './LightModeSelector.js';
import LanguageSelector from './LanguageSelector.js';
import FontSelector from './FontSelector.js';
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
            <Button variant="contained" color={settingsAnchor ? "secondary" : "primary"} aria-controls="settings-menu" aria-haspopup="true" onClick={handleSettingsClick} style={{margin:"0.25rem"}}>
                {t("TopBar.Settings.SettingsButton")}
            </Button>

            <Menu
                id="settings-menu"
                anchorEl={settingsAnchor}
                anchorOrigin={{
                    vertical: 'bottom'
                }}
                keepMounted
                open={Boolean(settingsAnchor)}
                onClose={handleSettingsClose}
            >
                <LightModeSelector darkState={props.darkState} handleThemeChange={props.handleThemeChange}/>
                <LanguageSelector/>
                <FontSelector font={props.font} setFont={props.setFont}/>
                <FontSizeSelector fontSize={props.fontSize} setFontSize={props.setFontSize}/>
            </Menu>
        </>
    );
}

export default SettingsMenu;
