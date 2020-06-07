import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


/**
 * Function that returns the view for settings menu
 * @param {Object} props received parameters
 */
function SettingsMenu(props) {
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
                Settings
            </Button>

            <Menu
                id="settings-menu"
                anchorEl={settingsAnchor}
                keepMounted
                open={Boolean(settingsAnchor)}
                onClose={handleSettingsClose}
            >
                <MenuItem onClick={handleSettingsClose}>Light/Dark</MenuItem>
                <MenuItem onClick={handleSettingsClose}>Language</MenuItem>
                <MenuItem onClick={handleSettingsClose}>Font size</MenuItem>
            </Menu>
        </>
    );
}

export default SettingsMenu;
