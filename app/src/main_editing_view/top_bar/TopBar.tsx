import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import ProjectTitleArea from './ProjectTitleArea.js';
import OpenProjectButton from './OpenProjectButton.js';
import PlayProjectButton from './PlayProjectButton.js';
import SettingsMenu from './settings_menu/SettingsMenu.js';


/**
 * Function that returns the top bar of the application
 * @param {Object} props received parameters
 */
function TopBar(props) {
    const { t } = useTranslation();

    return (
        <AppBar position="sticky" color="grey">
            <Toolbar>
                <Box style={{marginLeft:"0rem", marginRight:"auto"}}>
                    <img src="Logo.png" alt="Slide Linker logo" style={{height:"2.0rem", width:"auto"}}/>
                </Box>

                <Box style={{marginLeft:"0%", padding:"0.5rem"}}>
                    <ProjectTitleArea projectName={props.projectName}/>
                </Box>

                <Box style={{marginLeft:"auto", marginRight:"0rem", padding:"0.5rem"}}>
                    <Button variant="contained" style={{margin:"0.25rem"}}>{t("TopBar.NewButton")}</Button>
                    
                    <OpenProjectButton
                        changeSelectedProject={props.changeSelectedProject}
                        updateSlides={props.updateSlides}
                    />
                    
                    <PlayProjectButton
                        selectedProject={props.selectedProject}
                        activeViewSettings={props.activeViewSettings}
                    />
                    
                    <SettingsMenu
                        interfaceSettings={props.interfaceSettings}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
