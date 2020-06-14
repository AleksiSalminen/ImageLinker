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
    const [filterDescription, setFilterDescription] = useState(props.filterDescription !== null);
    const [descriptionFilter, setDescriptionFilter] = useState(props.filterDescription);

    const changeFilterHeading = () => {
        setFilterHeading(!filterHeading);
    }

    const changeHeadingFilter = (event) => {
        setHeadingFilter(event.target.value);
    }

    const changeFilterDescription = () => {
        setFilterDescription(!filterDescription);
    }

    const changeDescriptionFilter = (event) => {
        setDescriptionFilter(event.target.value);
    }

    return (
        <Dialog open={props.open} onClose={props.closeDialog}>
            <Box style={{ margin:"1.0rem" }}>
                <Typography>Table filtering options</Typography>

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
                        label="Filter headings"
                    />
                    <TextField
                        disabled={!filterHeading}
                        onChange={changeHeadingFilter}
                    >
                        {headingFilter}
                    </TextField>
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
                        label="Filter descriptions"
                    />
                    <TextField
                        disabled={!filterDescription}
                        onChange={changeDescriptionFilter}
                    >
                        {descriptionFilter}
                    </TextField>
                </FormGroup>

                <Button variant="contained" color="primary" size="small">
                    Save
                </Button>
                &nbsp;
                <Button variant="contained" color="default" size="small">
                    Cancel
                </Button>
            </Box>
        </Dialog>
    );
}

export default SlidesTableFilterDialog;
