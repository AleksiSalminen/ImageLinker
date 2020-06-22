import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useTranslation } from 'react-i18next';

import SettingsMenu from './settings_menu/SettingsMenu.js';
import { UndoButton, RedoButton } from '../history/history.js';


/**
 * Function that returns the top bar of the application
 * @param {Object} props received parameters
 */
function TopBar(props) {
    const { t } = useTranslation();

    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                <Box style={{marginLeft:"0rem", marginRight:"auto"}}>
                    <img src="Logo.png" alt="Slide Linker logo" style={{height:"2.0rem", width:"auto"}}/>
                </Box>
                
                <Box style={{marginLeft:"auto", marginRight:"0rem", padding:"0.5rem"}}>                    
                    <UndoButton history={props.history}/>

                    <RedoButton history={props.history}/>

                    <SettingsMenu
                        font={props.font}
                        setFont={props.setFont}
                        fontSize={props.fontSize}
                        setFontSize={props.setFontSize}
                        darkState={props.darkState}
                        handleThemeChange={props.handleThemeChange}
                        primaryColor={props.primaryColor}
                        setPrimaryColor={props.setPrimaryColor}
                        secondaryColor={props.secondaryColor}
                        setSecondaryColor={props.setSecondaryColor}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
