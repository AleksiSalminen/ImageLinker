import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import OpenProjectDialog from './OpenProjectDialog.js';
import SlidesTable from './SlidesTable.js';


/**
 * Function that returns the view for the main editing area of projects
 * @param {Object} props received parameters
 */
function MainEditingView(props) {
    const selectedProject = props.selectedProjectInfo.selected
    const projectName = (selectedProject ? selectedProject.name : "(Create or open a project)");
    const [projectDialogOpen, setProjectDialogOpen] = useState(false);
    const [projects, setProjects] = useState([]);

    const openProjectDialog = () => {
        setProjects([{"id":"1", "name":"First"}, {"id":"2", "name":"Second"}]);
        setProjectDialogOpen(true);
    }

    const changeSelectedProject = (id) => {
        if(id) {
            alert(id);
        }

        setProjectDialogOpen(false);
    }

    return (
        <div>

        <AppBar position="static">
            <Toolbar>
                <Box>
                    <Button variant="contained" color="primary">New</Button>
                    <Button variant="contained" color="primary" onClick={openProjectDialog}>Open</Button>
                    <Button variant="contained" color="primary">Play</Button>
                    <Button variant="contained" color="primary">Settings</Button>
                </Box>
            </Toolbar>
        </AppBar>

        <OpenProjectDialog open={projectDialogOpen} projects={projects} changeSelectedProject={changeSelectedProject}/>

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
