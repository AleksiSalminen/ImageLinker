import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


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

    function OptionFilter(props) {
        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={props.filtering}
                            color="primary"
                            onChange={props.changeFiltering}
                            inputProps={{ 'aria-label': props.ariaLabel }}
                        />
                    }
                    label={props.label}
                />
                <TextField
                    disabled={!props.filtering}
                    value={props.filter}
                    onChange={props.changeFilter}
                    autoFocus={true}
                >
                </TextField>
            </FormGroup>
        );
    }

    return (
        <Dialog open={props.open} onClose={props.closeDialog}>
            <Box style={{ margin:"1.0rem" }}>
                <Typography>Table filtering options</Typography>

                <OptionFilter
                    filtering={filterHeading}
                    changeFiltering={changeFilterHeading}
                    filter={headingFilter}
                    changeFilter={changeHeadingFilter}
                    label="Filter headings"
                    ariaLabel="heading filtering checkbox"
                />

                <OptionFilter
                    filtering={filterDescription}
                    changeFiltering={changeFilterDescription}
                    filter={descriptionFilter}
                    changeFilter={changeDescriptionFilter}
                    label="Filter descriptions"
                    ariaLabel="description filtering checkbox"
                />

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
