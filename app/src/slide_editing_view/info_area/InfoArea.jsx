import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


/**
 * Function that returns the info area component
 * @param {Object} props received parameters
 */
function InfoArea(props) {
    const { t } = useTranslation();
    
    const [heading, setHeading] = useState(props.slide.heading);
    const [reverting, setReverting] = useState(props.slide.reverting === "true");
    const [description, setDescription] = useState(props.slide.description);

    /** Function that updates the slide heading */
    const updateHeading = (event) => {
        props.addOperation(setHeading, event.target.value, heading);
        setHeading(event.target.value);
    }

    /** Function that updates whether reverting is allowed */
    const updateReverting = () => {
        props.addOperation(setReverting, !reverting, reverting);
        setReverting(!reverting);
    }

    /** Function that updates the slide description */
    const updateDescription = (event) => {
        props.addOperation(setDescription, event.target.value, description);
        setDescription(event.target.value);
    }

    return (
        <div>
            <TextField label={t("InfoArea.Heading")} value={heading} onChange={updateHeading} fullWidth/>

            <FormControlLabel
                control={<Checkbox checked={reverting} color="primary" onChange={updateReverting}/>}
                label={t("InfoArea.Reverting")}
                labelPlacement="start"
            />

            <TextField
                value={description}
                onChange={updateDescription}
                label={t("InfoArea.Description")}
                variant="outlined"
                multiline
                rows={14}
                fullWidth
            />
        </div>
    );
}

export default InfoArea;
