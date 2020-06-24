import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import PresentationImage from './PresentationImage.js';
import OptionTable from './OptionTable.js';


/**
 * Function that returns the presentation view
 * @param {Object} props received parameters
 */
function PresentationView(props) {
    const { t } = useTranslation();

    const findSlide = (slidesArray, idToFind) => {
        for(let i = 0; i < slidesArray.length; i++) {
            if(slidesArray[i]['id'] === idToFind) {
                return slidesArray[i];
            }
        }
        return null;
    }

    const [startSlide, setStartSlide] = useState(findSlide(props.slides, props.selectedProjectInfo.selected.start_slide_id));
    const [currentSlide, setCurrentSlide] = useState(startSlide);
    const [selectedOption, setSelectedOption] = useState(null);

    const moveToSelectedSlide = () => {
        if(selectedOption) {
            const slideID = selectedOption.endpoint_id;
            const slide = findSlide(props.slides, slideID);
            if(slide) {
                setCurrentSlide(slide);
                setSelectedOption(null);
            }
            else {
                alert("No slide related to the chosen option found");
            }
        }
    }

    return (
        <Box style={{ width:"90%", margin:"auto" }}>
            <Typography variant="h3">{currentSlide.heading}</Typography>

            <Grid container spacing={3}>
                <Grid item>
                    <PresentationImage
                        slide={currentSlide}
                    />
                </Grid>

                <Grid item style={{ width:"25%" }}>
                    <TextField
                        disabled
                        value={currentSlide.description}
                        label={t("InfoArea.Description")}
                        variant="outlined"
                        multiline
                        rows={20}
                        rowsMax={20}
                        fullWidth
                    />
                </Grid>

                <Grid item style={{ width:"25%" }}>
                    <OptionTable
                        options={currentSlide.options}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />

                    <Button
                        disabled={!selectedOption}
                        onClick={moveToSelectedSlide}
                        variant="contained"
                        color="primary"
                        style={{ marginTop:"1rem" }}
                    >
                        Proceed
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PresentationView;
