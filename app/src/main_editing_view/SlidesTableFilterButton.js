import React from 'react';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the sorting button for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableFilterButton(props) {

    return (
        <Button variant="outlined">
            Filter
        </Button>
    );
}

export default SlidesTableFilterButton;
