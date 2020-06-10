import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

import OpenProjectButton from './OpenProjectButton.js';
import SettingsMenu from './settings_menu/SettingsMenu.js';


/**
 * Function that returns the top bar of the application
 * @param {Object} props received parameters
 */
function TopBar(props) {
    const { t } = useTranslation();

    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                <Box style={{marginLeft:"auto", marginRight:"0rem"}}>
                    <Button variant="contained" color="primary">{t("TopBar.NewButton")}</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <OpenProjectButton changeSelectedProject={props.changeSelectedProject}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary">{t("TopBar.PlayButton")}</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <SettingsMenu font={props.font} setFont={props.setFont} fontSize={props.fontSize} setFontSize={props.setFontSize} darkState={props.darkState} handleThemeChange={props.handleThemeChange}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
