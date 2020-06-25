import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import PresentationImage from './PresentationImage.js';
import OptionTable from './OptionTable.js';
import SettingsMenu from './settings_menu/SettingsMenu';


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
    const [previousSlides, setPreviousSlides] = useState([]);

    const moveToSelectedSlide = () => {
        if(selectedOption) {
            const slideID = selectedOption.endpoint_id;
            const slide = findSlide(props.slides, slideID);
            if(slide) {
                setPreviousSlides(previousSlides.concat(currentSlide));
                setCurrentSlide(slide);
                setSelectedOption(null);
            }
            else {
                alert(t("PresentationArea.NoSlideWarning"));
            }
        }
    }

    const returnToStart = () => {
        setCurrentSlide(startSlide);
        setSelectedOption(null);
        setPreviousSlides([]);
    }

    const returnToPreviousSlide = () => {
        if(previousSlides.length > 0) {
            let prevSlides = previousSlides;
            const previousSlide = prevSlides.pop();
            setCurrentSlide(previousSlide);
            setSelectedOption(null);
            setPreviousSlides(prevSlides);
        }
    }

    const returnToMainView = () => {
        props.setActiveView(props.MAIN_EDITING_VIEW);
        setStartSlide(null);
        setCurrentSlide(null);
        setSelectedOption(null);
        setPreviousSlides([]);
    }

    function RevertingButtons(props) {
        if(props.allowReverting) {
            return (
                <div>
                    <Button variant="outlined" color="default" size="small" onClick={returnToStart}>
                        {t("PresentationArea.ToStartButton")}
                    </Button>

                    <Button variant="outlined" color="default" size="small" onClick={returnToPreviousSlide}>
                        {t("PresentationArea.PrevSlideButton")}
                    </Button>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    return (
        <Box style={{ width:"90%", margin:"auto" }}>
            <Grid container spacing={3} style={{ marginTop:"0.5rem" }}>
                <Grid item>
                    <Button variant="outlined" color="primary" size="small" onClick={returnToMainView}>
                        {t("PresentationArea.HomeButton")}
                    </Button>
                </Grid>

                <Grid item>
                    <RevertingButtons
                        allowReverting={currentSlide.reverting}
                    />
                </Grid>

                <Grid item>
                    <Typography variant="h4">{currentSlide.heading}</Typography>
                </Grid>

                <Grid item>
                    <SettingsMenu
                        interfaceSettings={props.interfaceSettings}
                    />
                </Grid>
            </Grid>

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
                        {t("PresentationArea.ProceedButton")}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PresentationView;
