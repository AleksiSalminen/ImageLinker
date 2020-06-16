import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TopBar from './top_bar/TopBar.js';
import ImageEditArea from './image_edit_area/ImageEditArea.js';


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

                <Grid container rows spacing={2}>
                    <Grid item style={{width:"30rem", borderStyle:"hidden ridge hidden hidden"}}>
                        <ImageEditArea/>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Description"
                            size="medium"
                            variant="outlined"
                            multiline
                            rows={10}
                            rowsMax={10}
                        />
                    </Grid>
                </Grid>

                <Box>
                    <Button variant="contained" color="primary" style={{ marginLeft:"0rem" }}>Save</Button>
                    <Button variant="contained" color="secondary" style={{ margin:"auto" }}>Delete</Button>
                    <Button variant="contained" style={{ marginRight:"0rem" }}>Cancel</Button>
                </Box>
            </Box>
        </div>
    );
}

export default SlideEditingView;
