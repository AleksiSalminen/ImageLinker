import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';


/**
 * Function that returns the font size selector
 * @param {Object} props received parameters
 */
function FontSizeSelector(props) {
    const { t } = useTranslation();
    const small = "Small";
    const medium = "Medium";
    const large = "Large";
    const [fontSize, setFontSize] = useState(medium);

    return (
        <MenuItem>
            {t("TopBar.Settings.FontSize.Font")}:
            &nbsp;&nbsp;
            <Button variant="contained" color={fontSize === small ? "primary" : "default"}>{t("TopBar.Settings.FontSize.Small")}</Button>
            &nbsp;&nbsp;
            <Button variant="contained" color={fontSize === medium ? "primary" : "default"}>{t("TopBar.Settings.FontSize.Medium")}</Button>
            &nbsp;&nbsp;
            <Button variant="contained" color={fontSize === large ? "primary" : "default"}>{t("TopBar.Settings.FontSize.Large")}</Button>
        </MenuItem>
    );
}

export default FontSizeSelector;
