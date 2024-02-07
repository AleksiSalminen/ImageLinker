import React from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

/**
 * Function that returns the settings for the colors
 * @param {Object} props received parameters
 */
function ColorsPicker(props) {
    const { t } = useTranslation()

    /* const primaryColor = props.settings.primaryColor;
    const setPrimaryColor = props.settings.setPrimaryColor;
    const secondaryColor = props.settings.secondaryColor;
    const setSecondaryColor = props.settings.setSecondaryColor;

    const changePrimaryColor = (newColor) => {
        setPrimaryColor(newColor);
    }

    const changeSecondaryColor = (newColor) => {
        setSecondaryColor(newColor);
    }

    return (
        <Box style={{margin:"1.0rem", padding:"0.5rem", borderStyle:"ridge hidden hidden hidden"}}>
            <Typography>
                {t("TopBar.Settings.Colors.Heading")}
            </Typography>

            <Grid container spacing={3}>
                <Grid item>
                    {t("TopBar.Settings.Colors.PrimaryColor")}:
                    <Box style={{backgroundColor:primaryColor, width:"7.0rem", borderRadius:"0.3rem"}}>
                        
                    </Box>
                </Grid>

                <Grid item>
                    {t("TopBar.Settings.Colors.SecondaryColor")}:
                    <Box style={{backgroundColor:secondaryColor, width:"7.0rem", borderRadius:"0.3rem"}}>
                        
                    </Box>
                </Grid>
            </Grid>
        </Box>
    ); */
}

export default ColorsPicker
