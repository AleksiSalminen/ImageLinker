import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"

import PresentationImage from "./PresentationImage"
import OptionTable from "./OptionTable"
import SettingsMenu from "./settings_menu/SettingsMenu"

/**
 * Function that returns the presentation view
 * @param {Object} props received parameters
 */
function PresentationView(props) {
    const { t } = useTranslation()

    /** Function that finds a slide with a certain ID */
    const findSlide = (slidesArray, idToFind) => {
        for (let i = 0; i < slidesArray.length; i++) {
            if (slidesArray[i]["id"] === idToFind) {
                return slidesArray[i]
            }
        }
        return null
    }

    const [startSlide, setStartSlide] = useState(findSlide(props.slides, props.selectedProjectInfo.selected.start_slide_id))
    const [currentSlide, setCurrentSlide] = useState(startSlide)
    const [selectedOption, setSelectedOption] = useState(null)
    const [previousSlides, setPreviousSlides] = useState([])

    const setActiveView = props.activeViewSettings.setActiveView
    const MAIN_EDITING_VIEW = props.activeViewSettings.MAIN_EDITING_VIEW

    /** Function that changes the selected slide according to the selected option */
    const moveToSelectedSlide = () => {
        if (selectedOption) {
            const slideID = selectedOption.endpoint_id
            const slide = findSlide(props.slides, slideID)
            if (slide) {
                setPreviousSlides(previousSlides.concat(currentSlide))
                setCurrentSlide(slide)
                setSelectedOption(null)
            } else {
                alert(t("PresentationArea.NoSlideWarning"))
            }
        }
    }

    /** Function that sets the active slide to the first slide */
    const returnToStart = () => {
        setCurrentSlide(startSlide)
        setSelectedOption(null)
        setPreviousSlides([])
    }

    /** Function that sets the active slide to be the previous active slide */
    const returnToPreviousSlide = () => {
        if (previousSlides.length > 0) {
            let prevSlides = previousSlides
            const previousSlide = prevSlides.pop()
            setCurrentSlide(previousSlide)
            setSelectedOption(null)
            setPreviousSlides(prevSlides)
        }
    }

    /** Function that sets the main editing view active */
    const returnToMainView = () => {
        setActiveView(MAIN_EDITING_VIEW)
        setStartSlide(null)
        setCurrentSlide(null)
        setSelectedOption(null)
        setPreviousSlides([])
    }

    /**
     * Function that returns the buttons for revert actions
     * @param {Object} props received parameters
     */
    function RevertingButtons(props) {
        if (props.allowReverting === "true") {
            return (
                <div>
                    <Button variant="outlined" size="small" onClick={returnToStart}>
                        {t("PresentationArea.ToStartButton")}
                    </Button>

                    <Button variant="outlined" size="small" onClick={returnToPreviousSlide}>
                        {t("PresentationArea.PrevSlideButton")}
                    </Button>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    return (
        <Box style={{ width: "90%", margin: "auto" }}>
            <Grid container spacing={3} style={{ marginTop: "0.5rem" }}>
                <Grid item>
                    <Button variant="outlined" size="small" onClick={returnToMainView}>
                        {t("PresentationArea.HomeButton")}
                    </Button>
                </Grid>

                <Grid item>
                    <RevertingButtons allowReverting={currentSlide.reverting} />
                </Grid>

                <Grid item>
                    <Typography variant="h4">{currentSlide.heading}</Typography>
                </Grid>

                <Grid item>
                    <SettingsMenu interfaceSettings={props.interfaceSettings} />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item>
                    <PresentationImage slide={currentSlide} />
                </Grid>

                <Grid item style={{ width: "25%" }}>
                    <TextField
                        disabled
                        value={currentSlide.description}
                        label={t("InfoArea.Description")}
                        variant="outlined"
                        multiline
                        rows={20}
                        fullWidth
                    />
                </Grid>

                <Grid item style={{ width: "25%" }}>
                    <OptionTable options={currentSlide.options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

                    <Button disabled={!selectedOption} onClick={moveToSelectedSlide} variant="contained" style={{ marginTop: "1rem" }}>
                        {t("PresentationArea.ProceedButton")}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PresentationView
