import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * Function that returns the font size selector
 * @param {Object} props received parameters
 */
function FontSizeSelector(props) {
    const [fontSize, setFontSize] = useState("Medium");

    return (
        <MenuItem>
            Font:
            &nbsp;&nbsp;
            <Button variant="contained" color={fontSize === "Small" ? "primary" : ""}>Small</Button>
            &nbsp;&nbsp;
            <Button variant="contained" color={fontSize === "Medium" ? "primary" : ""}>Medium</Button>
            &nbsp;&nbsp;
            <Button variant="contained" color={fontSize === "Large" ? "primary" : ""}>Large</Button>
        </MenuItem>
    );
}

export default FontSizeSelector;
