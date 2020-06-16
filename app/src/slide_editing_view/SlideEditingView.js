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

            <Box style={{ margin:"auto", width:"90%" }}>
                <Grid container rows spacing={4} style={{ marginTop:"0.5rem" }}>
                    <Grid item style={{width:"29rem", borderStyle:"hidden ridge hidden hidden", height:"35rem"}}>
                        <ImageEditArea/>
                    </Grid>
                    <Grid item style={{ width:"29rem", marginRight:"10rem", borderStyle:"hidden ridge hidden hidden" }}>
                        <TextField label="Heading" defaultValue={props.selectedSlide.heading} fullWidth/>

                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Allow reverting"
                            labelPlacement="start"
                        />
                        
                        <TextField
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={14}
                            rowsMax={14}
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Box style={{ marginTop:"1.5rem", borderStyle:"ridge hidden hidden hidden", padding:"0.5rem" }}>
                    <Button variant="contained" color="primary" style={{}}>Save</Button>
                    <Button variant="contained" color="secondary" style={{ marginLeft:"40%" }}>Delete</Button>
                    <Button variant="contained" style={{ marginLeft:"40%" }}>Cancel</Button>
                </Box>
            </Box>
        </div>
    );
}

export default SlideEditingView;
