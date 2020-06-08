import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';


/**
 * Function that returns the language selector
 * @param {Object} props received parameters
 */
function LanguageSelector(props) {
    const { t, i18n } = useTranslation();
    const english = "en";
    const finnish = "fi";
    const [language, setLanguage] = useState(english);

    const changeLanguage = (newLang) => {
        i18n.changeLanguage(newLang);
        setLanguage(newLang);
    }

    return (
        <MenuItem>
            {t("Language")}:
            &nbsp;&nbsp;
            <Button onClick={() => {changeLanguage(english)}} variant="contained" color={language === english ? "primary" : ""}>English</Button>
            &nbsp;&nbsp;
            <Button onClick={() => {changeLanguage(finnish)}} variant="contained" color={language === finnish ? "primary" : ""}>Suomi</Button>
        </MenuItem>
    );
}

export default LanguageSelector;
