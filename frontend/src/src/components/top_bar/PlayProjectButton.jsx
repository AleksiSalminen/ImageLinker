import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "@mui/material/Button"

/**
 * Function that returns the button for switching to presentation view
 * @param {Object} props received parameters
 */
function PlayProjectButton(props) {
    const { t } = useTranslation()

    const [disabled, setDisabled] = useState(props.selectedProject === undefined)

    const setActiveView = props.activeViewSettings ? props.activeViewSettings.setActiveView : null
    const PRESENTATION_VIEW = props.activeViewSettings ? props.activeViewSettings.PRESENTATION_VIEW : null

    if (disabled && props.selectedProject !== undefined) {
        setDisabled(false)
    } else if (!disabled && props.selectedProject === undefined) {
        setDisabled(true)
    }

    /** Function that sets the presentation view to be active */
    const playPresentation = () => {
        if (props.selectedProject !== undefined) {
            setActiveView(PRESENTATION_VIEW)
        }
    }

    return (
        <Button disabled={disabled} variant="contained" color="primary" style={{ margin: "0.25rem" }} onClick={playPresentation}>
            {t("TopBar.PlayButton")}
        </Button>
    )
}

export default PlayProjectButton
