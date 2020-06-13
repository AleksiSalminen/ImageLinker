import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ColorPicker from 'material-ui-color-picker'


/**
 * Function that returns the settings for the colors
 * @param {Object} props received parameters
 */
function ColorsPicker(props) {
    const { t } = useTranslation();

    const changePrimaryColor = (newColor) => {
        props.setPrimaryColor(newColor);
    }

    const changeSecondaryColor = (newColor) => {
        props.setSecondaryColor(newColor);
    }

    return (
        <Box style={{margin:"1.0rem", padding:"0.5rem", borderStyle:"ridge hidden hidden hidden"}}>
            <Typography>{t("TopBar.Settings.Colors.Heading")}</Typography>

            <Grid container spacing={3}>
                <Grid item>
                    {t("TopBar.Settings.Colors.PrimaryColor")}:
                    <Box style={{backgroundColor:props.primaryColor, width:"7.0rem", borderRadius:"0.3rem"}}>
                        <ColorPicker
                            defaultValue='#000'
                            value={props.primaryColor}
                            onChange={(color) => {changePrimaryColor(color)}}
                        />
                    </Box>
                </Grid>

                <Grid item>
                    {t("TopBar.Settings.Colors.SecondaryColor")}:
                    <Box style={{backgroundColor:props.secondaryColor, width:"7.0rem", borderRadius:"0.3rem"}}>
                        <ColorPicker
                            defaultValue='#000'
                            value={props.secondaryColor}
                            onChange={(color) => {changeSecondaryColor(color)}}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ColorsPicker;
