import React from 'react';
import Typography from '@material-ui/core/Typography';


/**
 * Function that returns the view for the welcome area
 * @param {Object} props received parameters
 */
function WelcomeView(props) {

    return (
        <div>
            <Typography variant="h3" align="center">
                Welcome to Slide Linker
            </Typography>

            <br/><br/><br/>

            <Typography variant="h5" align="center">
                Select "New" to create a new project
            </Typography>

            <br/>

            <Typography variant="h5" align="center">
                Select "Open" to open a project
            </Typography>

            <br/>

            <Typography variant="h5" align="center">
                Select "Play" to play presentations
            </Typography>

            <br/>

            <Typography variant="h5" align="center">
                Select "Settings" to adjust the settings in the interface
            </Typography>
        </div>
    );
}

export default WelcomeView;
