import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import PresentationImage from './PresentationImage.js';

/**
 * Function that returns the presentation view
 * @param {Object} props received parameters
 */
function PresentationView(props) {
    const { t } = useTranslation();

    const findStartSlide = () => {
        const startID = props.selectedProjectInfo.selected.start_slide_id;
        
        for(let i = 0;i < props.slides.length;i++) {
            const slide = props.slides[i];
            if(slide.id === startID) {
                return slide;
            }
        }
    }

    const [startSlide, setStartSlide] = useState(findStartSlide());
    const [currentSlide, setCurrentSlide] = useState(startSlide);

    return (
        <Box style={{ width:"90%", margin:"auto" }}>
            <Typography variant="h3">{currentSlide.heading}</Typography>

            <Grid container spacing={3}>
                <Grid item>
                    <PresentationImage
                        slide={currentSlide}
                    />
                </Grid>

                <Grid item style={{ width:"50%" }}>
                    <TextField
                        disabled
                        value={currentSlide.description}
                        label={t("InfoArea.Description")}
                        variant="outlined"
                        multiline
                        rows={8}
                        rowsMax={8}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default PresentationView;
