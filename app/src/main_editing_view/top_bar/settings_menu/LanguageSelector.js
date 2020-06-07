import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the language selector
 * @param {Object} props received parameters
 */
function LanguageSelector(props) {
    const [language, setLanguage] = useState("en");

    return (
        <MenuItem>
            Language:
            &nbsp;&nbsp;
            <Button variant="contained" color={language === "en" ? "primary" : ""}>English</Button>
            &nbsp;&nbsp;
            <Button variant="contained" color={language === "fi" ? "primary" : ""}>Suomi</Button>
        </MenuItem>
    );
}

export default LanguageSelector;
