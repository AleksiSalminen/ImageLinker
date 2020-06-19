import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TopBar from './top_bar/TopBar.js';
import ImageEditArea from './image_edit_area/ImageEditArea.js';


/**
 * Function that returns the slide editing view
 * @param {Object} props received parameters
 */
function SlideEditingView(props) {
    const slide = props.selectedSlide;
    const project = props.selectedProjectInfo.selected;

    console.log(slide);
    
    const [heading, setHeading] = useState(slide.heading);
    const [reverting, setReverting] = useState(slide.reverting);
    const [description, setDescription] = useState(slide.description);

    const updateHeading = (event) => {
        setHeading(event.target.value);
    }

    const updateReverting = () => {
        setReverting(!reverting)
    }

    const updateDescription = (event) => {
        setDescription(event.target.value);
    }
    
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
                projectName={project.name}
                primaryColor={props.primaryColor}
                setPrimaryColor={props.setPrimaryColor}
                secondaryColor={props.secondaryColor}
                setSecondaryColor={props.setSecondaryColor}
            />

            <Box style={{ margin:"auto", width:"90%" }}>
                <Grid container rows spacing={4} style={{ marginTop:"0.5rem" }}>
                    <Grid item style={{width:"29rem", borderStyle:"hidden ridge hidden hidden", height:"35rem"}}>
                        <ImageEditArea info={slide.image}/>
                    </Grid>

                    <Grid item style={{ width:"29rem", borderStyle:"hidden ridge hidden hidden" }}>
                        <TextField label="Heading" value={heading} onChange={updateHeading} fullWidth/>

                        <FormControlLabel
                            control={<Checkbox checked={reverting} color="primary" onChange={updateReverting}/>}
                            label="Allow reverting"
                            labelPlacement="start"
                        />
                        
                        <TextField
                            value={description}
                            onChange={updateDescription}
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={14}
                            rowsMax={14}
                            fullWidth
                        />
                    </Grid>

                    <Grid item style={{ width:"29rem", height:"32rem", marginLeft:"1rem" }}>
                        <Paper>
                            <TableContainer style={{ height:"32rem" }}>
                                <Table style={{borderStyle:"double hidden hidden hidden", borderColor:"lightgrey", borderWidth:"thin"}} stickyHeader aria-label="options table">
                                <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Button variant="outlined" size="small">
                                                    +
                                                </Button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                Options
                                            </TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow hover>
                                        <TableCell>
                                            AAAA
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
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
