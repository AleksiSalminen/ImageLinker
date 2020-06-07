import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SlidesTable from './SlidesTable.js';


/**
 * Function that returns the view for the main editing area of projects
 * @param {Object} props received parameters
 */
function MainEditingView(props) {
    const selectedProject = props.selectedProjectInfo.selected
    const projectName = (selectedProject ? selectedProject.name : "(Create or open a project)");


    const changeSelectedProject = (file) => {
        if(file) {
            let reader = new FileReader();
            reader.onload = function() {
                let fileContent = JSON.parse(this.result);
                
            };
            reader.readAsText(file);
        }
    }

    return (
        <div>

        <AppBar position="static">
            <Toolbar>
                <Box>
                    <Button variant="contained" color="primary">New</Button>
                    <Button variant="contained" component="label" color="primary">
                        Open
                        <input type="file" style={{ display: "none" }} onChange={(event) => {changeSelectedProject(event.target.files[0])}}/>
                    </Button>
                    <Button variant="contained" color="primary">Play</Button>
                    <Button variant="contained" color="primary">Settings</Button>
                </Box>
            </Toolbar>
        </AppBar>

        <br/>
        <Box>
            <Typography variant="h4" align="center">
                {projectName}&nbsp;
                <Button variant="contained">Change</Button>
            </Typography>
        </Box>
        <br/><br/>
        <SlidesTable/>

        </div>
    );
}

export default MainEditingView;
