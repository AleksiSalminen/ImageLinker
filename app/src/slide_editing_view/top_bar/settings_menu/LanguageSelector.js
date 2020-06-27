import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the language selector
 * @param {Object} props received parameters
 */
function LanguageSelector(props) {
    const { t, i18n } = useTranslation();

    const english = props.settings.english;
    const finnish = props.settings.finnish;
    const language = props.settings.language;
    const setLanguage = props.settings.setLanguage;

    /** Function that changes the language */
    const changeLanguage = (newLang) => {
        i18n.changeLanguage(newLang);
        setLanguage(newLang);
    }

    return (
        <Box style={{margin:"1.0rem", padding:"0.5rem", borderStyle:"ridge hidden hidden hidden"}}>
            <Typography>
                {t("TopBar.Settings.Language")}:
            </Typography>
            &nbsp;&nbsp;

            <Button 
                onClick={() => {changeLanguage(english)}} 
                variant="contained" 
                color={language === english ? "primary" : "default"}
            >
                English
            </Button>

            &nbsp;&nbsp;

            <Button 
                onClick={() => {changeLanguage(finnish)}} 
                variant="contained" 
                color={language === finnish ? "primary" : "default"}
            >
                Suomi
            </Button>
        </Box>
    );
}

export default LanguageSelector;
