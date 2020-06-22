import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


/**
 * Function that returns the info area component
 * @param {Object} props received parameters
 */
function InfoArea(props) {
    const [heading, setHeading] = useState(props.slide.heading);
    const [reverting, setReverting] = useState(props.slide.reverting);
    const [description, setDescription] = useState(props.slide.description);

    const updateHeading = (event) => {
        props.addOperation(setHeading, event.target.value, heading);
        setHeading(event.target.value);
    }

    const updateReverting = () => {
        setReverting(!reverting)
    }

    const updateDescription = (event) => {
        setDescription(event.target.value);
    }

    return (
        <div>
            <TextField label="Heading" value={heading} onChange={updateHeading} fullWidth/>

            <FormControlLabel
                control={<Checkbox checked={reverting} color="primary" onChange={updateReverting}/>}
                label="Allow reverting"
                labelPlacement="start"
            />

            <TextField
                value={description}
                onChange={updateDescription}
                label="Description"
                variant="outlined"
                multiline
                rows={14}
                rowsMax={14}
                fullWidth
            />
        </div>
    );
}

export default InfoArea;
