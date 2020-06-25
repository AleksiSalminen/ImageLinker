import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

import LightModeSelector from './LightModeSelector.js';
import ColorsPicker from './ColorsPicker.js';
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

    let themeSettings = null;
    let fontSettings = null;
    let languageSettings = null;
    let colorsSettings = null;

    for(let i = 0;i < props.interfaceSettings.length;i++) {
        const setting = props.interfaceSettings[i];
        
        if(setting.theme) {
            themeSettings = setting.theme;
        }
        else if(setting.font) {
            fontSettings = setting.font;
        }
        else if(setting.language) {
            languageSettings = setting.language;
        }
        else if(setting.colors) {
            colorsSettings = setting.colors;
        }
    }

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
                getContentAnchorEl={null}
                anchorEl={settingsAnchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                keepMounted
                open={Boolean(settingsAnchor)}
                onClose={handleSettingsClose}
            >
                <LightModeSelector
                    settings={themeSettings}
                />
                
                <ColorsPicker
                    settings={colorsSettings}
                />

                <LanguageSelector
                    settings={languageSettings}
                />

                <FontSelector
                    settings={fontSettings}
                />

                <FontSizeSelector
                    settings={fontSettings}
                />
            </Menu>
        </>
    );
}

export default SettingsMenu;
