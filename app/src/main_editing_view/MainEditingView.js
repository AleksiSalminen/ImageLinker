import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TopBar from './TopBar.js';
import SlidesTable from './SlidesTable.js';


/**
 * Function that returns the view for the main editing area of projects
 * @param {Object} props received parameters
 */
function MainEditingView(props) {
    const selectedProject = props.selectedProjectInfo.selected;
    const projectName = (selectedProject ? selectedProject.name : "(Create or open a project)");


    return (
        <div>

            <TopBar changeSelectedProject={props.changeSelectedProject}/>

            <br/>
            <Box>
                <Typography variant="h4" align="center">
                    {projectName}&nbsp;
                    <Button variant="contained">Change</Button>
                </Typography>
            </Box>
            <br/><br/>

            <SlidesTable slides={(selectedProject ? selectedProject.slides : [])} />

        </div>
    );
}

export default MainEditingView;
