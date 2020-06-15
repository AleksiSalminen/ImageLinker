import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TopBar from './top_bar/TopBar.js';


/**
 * Function that returns the slide editing view
 * @param {Object} props received parameters
 */
function SlideEditingView(props) {
    const selectedProject = props.selectedProjectInfo.selected;
    
    return (
        <div>
            <TopBar
                changeSelectedProject={props.changeSelectedProject}
                updateSlides={props.updateSlides}
                darkState={props.darkState}
                handleThemeChange={props.handleThemeChange}
                font={props.font}
                setFont={props.setFont}
                fontSize={props.fontSize}
                setFontSize={props.setFontSize}
                projectName={selectedProject.name}
                primaryColor={props.primaryColor}
                setPrimaryColor={props.setPrimaryColor}
                secondaryColor={props.secondaryColor}
                setSecondaryColor={props.setSecondaryColor}
            />

            <Box style={{ margin:"auto", marginTop:"2rem", width:"90%" }}>
                <TextField label="Heading" defaultValue={props.selectedSlide.heading}/>

                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Allow reverting"
                    labelPlacement="start"
                />
            </Box>
        </div>
    );
}

export default SlideEditingView;
