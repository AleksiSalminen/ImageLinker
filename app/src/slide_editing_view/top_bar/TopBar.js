import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SettingsMenu from './settings_menu/SettingsMenu.js';
import { UndoButton, RedoButton } from '../history/history.js';


/**
 * Function that returns the top bar of the application
 * @param {Object} props received parameters
 */
function TopBar(props) {

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
                        interfaceSettings={props.interfaceSettings}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
