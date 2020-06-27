import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import TopBar from './top_bar/TopBar.js';
import ImageEditArea from './image_edit_area/ImageEditArea.js';
import InfoArea from './info_area/InfoArea.js';
import OptionsArea from './options_area/OptionsArea.js';
import BottomArea from './bottom_area/BottomArea.js';


/**
 * Function that returns the slide editing view
 * @param {Object} props received parameters
 */
function SlideEditingView(props) {
    const slide = props.selectedSlide;
    const project = props.selectedProjectInfo.selected;
    let options = slide.options;
    
    /** Operations history, undo, redo settings */
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const [lastOperation, setLastOperation] = useState(null);
    const [historyLength, setHistoryLength] = useState(50);

    /** Function that adds an operation to the history stack */
    const addOperation = async (operation, newValue, oldValue) => {
        setLastOperation({operation: operation, value: newValue});
        setRedoStack([]);

        undoStack.push({operation: operation, value: oldValue});
        while(undoStack.length > historyLength) {
            undoStack.shift();
        }
        setUndoStack(undoStack);
    }
    
    /** Function that empties the operations history */
    const emptyHistory = async () => {
        setUndoStack([]);
        setRedoStack([]);
        setLastOperation(null);
    }

    /** Operations history settings combined to one object */
    const history = {
        undoStack: undoStack,
        setUndoStack: setUndoStack,
        redoStack: redoStack,
        setRedoStack: setRedoStack,
        lastOperation: lastOperation,
        setLastOperation: setLastOperation
    }
    
    return (
        <div>
            <TopBar
                history={history}
                changeSelectedProject={props.changeSelectedProject}
                updateSlides={props.updateSlides}
                projectName={project.name}
                interfaceSettings={props.interfaceSettings}
            />

            <Box style={{ margin:"auto", width:"90%" }}>
                <Grid container spacing={4} style={{ marginTop:"0.5rem" }}>
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
