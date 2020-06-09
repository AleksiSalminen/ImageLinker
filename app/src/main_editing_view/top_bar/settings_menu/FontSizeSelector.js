import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';


/**
 * Function that returns the font size selector
 * @param {Object} props received parameters
 */
function FontSizeSelector(props) {
    const { t } = useTranslation();

    return (
        <MenuItem>
            {t("TopBar.Settings.FontSize.FontSize")}:
            &nbsp;&nbsp;

            <input 
                type="number"
                value={props.fontSize}
                min={5}
                max={30}
                onChange={(event) => {props.setFontSize(event.target.value)}}
            />
        </MenuItem>
    );
}

export default FontSizeSelector;
