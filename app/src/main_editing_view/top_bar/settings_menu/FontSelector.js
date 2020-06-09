import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';

import fonts from './fonts.js';


/**
 * Function that returns the font selector
 * @param {Object} props received parameters
 */
function FontSelector(props) {
    const { t } = useTranslation();

    return (
        <MenuItem>
            A
        </MenuItem>
    );
}

export default FontSelector;
