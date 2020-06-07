import React from 'react';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the sorting button for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableSortButton(props) {

    return (
        <Button variant="outlined">
            Sort
        </Button>
    );
}

export default SlidesTableSortButton;
