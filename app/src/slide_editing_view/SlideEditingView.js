import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import TopBar from './top_bar/TopBar.js';
import ImageEditArea from './image_edit_area/ImageEditArea.js';
import InfoArea from './info_area/InfoArea.js';
import OptionsArea from './options_area/OptionsArea.js';
import BottomArea from './bottom_area/BottomArea.js';

import { addOperation, emptyHistory } from './history/history.js';


/**
 * Function that returns the slide editing view
 * @param {Object} props received parameters
 */
function SlideEditingView(props) {
    const slide = props.selectedSlide;
    const project = props.selectedProjectInfo.selected;
    let options = slide.options;
    
    return (
        <div>
            <TopBar
                history={props.history}
                changeSelectedProject={props.changeSelectedProject}
                updateSlides={props.updateSlides}
                projectName={project.name}
                interfaceSettings={props.interfaceSettings}
            />

            <Box style={{ margin:"auto", width:"90%" }}>
                <Grid container rows spacing={4} style={{ marginTop:"0.5rem" }}>
                    <Grid item style={{width:"29rem", borderStyle:"hidden ridge hidden hidden", height:"35rem"}}>
                        <ImageEditArea
                            info={slide.image}
                            addOperation={addOperation}
                        />
                    </Grid>

                    <Grid item style={{ width:"29rem", borderStyle:"hidden ridge hidden hidden" }}>
                        <InfoArea
                            slide={slide}
                            addOperation={addOperation}
                        />
                    </Grid>

                    <Grid item style={{ width:"29rem", height:"32rem", marginLeft:"1rem" }}>
                        <OptionsArea
                            addOperation={addOperation}
                            options={options}
                            slides={props.slides}
                        />
                    </Grid>
                </Grid>

                <Box style={{ marginTop:"1.5rem", borderStyle:"ridge hidden hidden hidden", padding:"0.5rem" }}>
                    <BottomArea
                        selectSlide={props.selectSlide}
                        activeViewSettings={props.activeViewSettings}
                        emptyHistory={emptyHistory}
                    />
                </Box>
            </Box>
        </div>
    );
}

export default SlideEditingView;
