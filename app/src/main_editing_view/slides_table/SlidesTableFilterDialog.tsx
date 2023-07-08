import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


/**
 * Function that returns the filter dialog for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableFilterDialog(props) {
    const { t } = useTranslation();

    /** Settings for the filtering */
    const [filterHeading, setFilterHeading] = useState(props.filterHeading !== null);
    const [headingFilter, setHeadingFilter] = useState(props.filterHeading);
    const [filterDescription, setFilterDescription] = useState(props.filterDescription !== null);
    const [descriptionFilter, setDescriptionFilter] = useState(props.filterDescription);

    /** Function that changes whether the heading should be filtered or not */
    const changeFilterHeading = () => {
        setFilterHeading(!filterHeading);
    }

    /** Function that changes the filter for headings */
    const changeHeadingFilter = (event) => {
        setHeadingFilter(event.target.value);
    }

    /** Function that changes whether the description should be filtered or not */
    const changeFilterDescription = () => {
        setFilterDescription(!filterDescription);
    }

    /** Function that changes the filter for descriptions */
    const changeDescriptionFilter = (event) => {
        setDescriptionFilter(event.target.value);
    }

    /** Function that closes the dialog and saves the filtering settings */
    const saveChanges = () => {
        props.closeDialog();

        if(filterHeading) {
            props.setFilterHeading(headingFilter);
        }
        else {
            props.setFilterHeading(null);
            setHeadingFilter(null);
        }

        if(filterDescription) {
            props.setFilterDescription(descriptionFilter);
        }
        else {
            props.setFilterDescription(null);
            setDescriptionFilter(null);
        }
    }

    /** Function that cancels the changes made to filtering settings */
    const cancelChanges = () => {
        props.closeDialog();

        setFilterHeading(props.filterHeading !== null);
        setHeadingFilter(props.filterHeading);
        setFilterDescription(props.filterDescription !== null);
        setDescriptionFilter(props.filterDescription);
    }
    

    return (
        <Dialog open={props.open}>
            <Box style={{ margin:"1.0rem" }}>
                <Typography>{t("SlidesTable.Filtering.Header")}</Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filterHeading}
                                color="primary"
                                onChange={changeFilterHeading}
                                inputProps={{ 'aria-label': 'heading filtering checkbox' }}
                            />
                        }
                        label={t("SlidesTable.Filtering.HeadingFilter")}
                    />
                    <TextField
                        disabled={!filterHeading}
                        value={headingFilter ? headingFilter : ""}
                        onChange={changeHeadingFilter}
                    />
                </FormGroup>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filterDescription}
                                color="primary"
                                onChange={changeFilterDescription}
                                inputProps={{ 'aria-label': 'description filtering checkbox' }}
                            />
                        }
                        label={t("SlidesTable.Filtering.DescriptionFilter")}
                    />
                    <TextField
                        disabled={!filterDescription}
                        value={descriptionFilter ? descriptionFilter : ""}
                        onChange={changeDescriptionFilter}
                    />
                </FormGroup>

                <Box style={{ marginTop:"1.0rem" }}>
                    <Button style={{ marginRight:"0.5rem" }} variant="contained" color="primary" size="small" onClick={saveChanges}>
                        {t("SlidesTable.Filtering.SaveButton")}
                    </Button>

                    <Button style={{ margin:"0.5rem" }} variant="contained"  size="small" onClick={cancelChanges}>
                        {t("SlidesTable.Filtering.CancelButton")}
                    </Button>
                </Box>

            </Box>
        </Dialog>
    );
}

export default SlidesTableFilterDialog;
