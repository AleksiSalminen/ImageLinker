import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


/**
 * Function that returns the filter dialog for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableFilterDialog(props) {
    const { t } = useTranslation();

    const [filterHeading, setFilterHeading] = useState(props.filterHeading !== null);
    const [headingFilter, setHeadingFilter] = useState(props.filterHeading);

    const changeFilterHeading = () => {
        setFilterHeading(!filterHeading);
    }

    const changeHeadingFilter = (event) => {
        setHeadingFilter(event.target.value);
    }

    const saveChanges = () => {
        props.closeDialog();

        if(filterHeading) {
            props.setFilterHeading(headingFilter);
        }
        else {
            props.setFilterHeading(null);
            setHeadingFilter(null);
        }
    }

    const cancelChanges = () => {
        props.closeDialog();

        setFilterHeading(props.filterHeading !== null);
        setHeadingFilter(props.filterHeading);
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
                        value={headingFilter}
                        onChange={changeHeadingFilter}
                    />
                </FormGroup>

                <Box style={{ marginTop:"1.0rem" }}>
                    <Button style={{ marginRight:"0.5rem" }} variant="contained" color="primary" size="small" onClick={saveChanges}>
                        {t("SlidesTable.Filtering.SaveButton")}
                    </Button>

                    <Button style={{ margin:"0.5rem" }} variant="contained" color="default" size="small" onClick={cancelChanges}>
                        {t("SlidesTable.Filtering.CancelButton")}
                    </Button>
                </Box>

            </Box>
        </Dialog>
    );
}

export default SlidesTableFilterDialog;
