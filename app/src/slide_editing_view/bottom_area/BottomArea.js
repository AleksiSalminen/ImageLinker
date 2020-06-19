import React from 'react';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the bottom area component
 * @param {Object} props received parameters
 */
function BottomArea(props) {

    return (
        <div>
            <Button variant="contained" color="primary" style={{}}>Save</Button>
            <Button variant="contained" color="secondary" style={{ marginLeft:"40%" }}>Delete</Button>
            <Button variant="contained" style={{ marginLeft:"40%" }}>Cancel</Button>
        </div>
    );
}

export default BottomArea;
