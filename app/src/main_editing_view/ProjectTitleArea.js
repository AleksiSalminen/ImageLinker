import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the view for the project title area
 * @param {Object} props received parameters
 */
function ProjectTitleArea(props) {

    return (
        <div>
            <Typography variant="h4" align="center">
                {props.projectName}&nbsp;
                <Button variant="contained">Change</Button>
            </Typography>
        </div>
    );
}

export default ProjectTitleArea;
