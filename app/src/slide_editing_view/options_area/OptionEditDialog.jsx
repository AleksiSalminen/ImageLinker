import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import SlidesTable from './slides_table/SlidesTable.jsx';


/**
 * Function that returns the option editing dialog
 * @param {Object} props received parameters
 */
function OptionEditDialog(props) {
    const { t } = useTranslation();

    const [title, setTitle] = useState(null);
    const [endPoint, setEndPoint] = useState(null);

    /** Function that finds a slide with a certain ID */
    const findSlide = (slideArray, endPointToFind) => {
        for(let i = 0; i < slideArray.length; i++) {
            if(slideArray[i]['id'] === endPointToFind) {
                return slideArray[i];
            }
        }
        return null;
    }

    /** If title and/or end point are not set, and an option was received,
    then set the title and end point according to the option's attributes */
    if((title === null || endPoint === null) && props.option) {
        setTitle(props.option.title);

        const endPointSlide = findSlide(props.slides, props.option.endpoint_id);
        setEndPoint(endPointSlide);
    }

    /** Function that updates the option title */
    const updateTitle = (event) => {
        setTitle(event.target.value);
    }

    /** Function that cancels the changes made to option settings, and closes the edit dialog */
    const cancelChanges = () => {
        props.closeDialog();
        
        setTitle(props.option.title);

        const endPointSlide = findSlide(props.slides, props.option.endpoint_id);
        setEndPoint(endPointSlide);
    }
    

    return (
        <Dialog open={props.open} style={{ padding: "0.5rem" }}>
            <Box style={{ padding: "1rem" }}>
                <TextField label={t("OptionsArea.OptionsEditDialog.Title")} value={title} onChange={updateTitle} />

                <br/><br/>
                <Typography>{ t("OptionsArea.OptionsEditDialog.EndPoint") + (endPoint ? endPoint.heading : "") }</Typography>
                <SlidesTable slides={props.slides} setEndPoint={setEndPoint} />
            
                <Box style={{ marginTop:"1rem" }}>
                    <Button variant="outlined" style={{marginRight:"2rem"}}>{t("OptionsArea.OptionsEditDialog.SaveButton")}</Button>
                    <Button variant="outlined" style={{marginRight:"2rem"}}>{t("OptionsArea.OptionsEditDialog.DeleteButton")}</Button>
                    <Button variant="outlined"  style={{}} onClick={cancelChanges}>{t("OptionsArea.OptionsEditDialog.CancelButton")}</Button>
                </Box>
            </Box>
        </Dialog>
    );
}

export default OptionEditDialog;
