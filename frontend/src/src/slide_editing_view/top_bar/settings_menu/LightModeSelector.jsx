import React from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Switch from "@mui/material/Switch"

/**
 * Function that returns the light/dark mode selector
 * @param {Object} props received parameters
 */
const LightModeSelector = React.forwardRef((props, ref) => {
    const { t } = useTranslation()

    const darkState = props.settings.darkState
    const handleThemeChange = props.settings.handleThemeChange

    return (
        <Box style={{ margin: "1.0rem", padding: "0.5rem", borderStyle: "hidden hidden hidden hidden" }}>
            <Typography>{t("TopBar.Settings.Mode.Theme")}:</Typography>
            &nbsp;&nbsp;
            {t("TopBar.Settings.Mode.LightMode")}
            <Switch
                checked={darkState}
                color="primary"
                onChange={handleThemeChange}
                inputProps={{ "aria-label": "light dark mode selection" }}
            />
            {t("TopBar.Settings.Mode.DarkMode")}
        </Box>
    )
})

export default LightModeSelector
