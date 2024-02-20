import React from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

import fonts from "./fonts"

/**
 * Function that returns the font selector
 * @param {Object} props received parameters
 */
function FontSelector(props) {
    const { t } = useTranslation()

    const font = props.settings.font
    const setFont = props.settings.setFont

    return (
        <Box style={{ margin: "1.0rem", padding: "0.5rem", borderStyle: "ridge hidden hidden hidden" }}>
            <Typography>{t("TopBar.Settings.Font")}:</Typography>

            <Autocomplete
                id="font-select"
                value={font}
                onChange={(event, newFont) => {
                    setFont(newFont)
                }}
                options={fonts}
                size="small"
                disableClearable={true}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
            />
        </Box>
    )
}

export default FontSelector
