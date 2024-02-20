import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Dialog from "@mui/material/Dialog"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Checkbox from "@mui/material/Checkbox"
import TextField from "@mui/material/TextField"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

/**
 * Function that returns the filter dialog for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableFilterDialog(props) {
    const { t } = useTranslation()

    /** Settings for the filtering */
    const [filterHeading, setFilterHeading] = useState(props.filterHeading !== null)
    const [headingFilter, setHeadingFilter] = useState(props.filterHeading)

    /** Function that changes whether the heading should be filtered or not */
    const changeFilterHeading = () => {
        setFilterHeading(!filterHeading)
    }

    /** Function that changes the filter for headings */
    const changeHeadingFilter = (event) => {
        setHeadingFilter(event.target.value)
    }

    /** Function that closes the dialog and saves the filtering settings */
    const saveChanges = () => {
        props.closeDialog()

        if (filterHeading) {
            props.setFilterHeading(headingFilter)
        } else {
            props.setFilterHeading(null)
            setHeadingFilter(null)
        }
    }

    /** Function that cancels the changes made to filtering settings */
    const cancelChanges = () => {
        props.closeDialog()

        setFilterHeading(props.filterHeading !== null)
        setHeadingFilter(props.filterHeading)
    }

    return (
        <Dialog open={props.open}>
            <Box style={{ margin: "1.0rem" }}>
                <Typography>{t("SlidesTable.Filtering.Header")}</Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filterHeading}
                                color="primary"
                                onChange={changeFilterHeading}
                                inputProps={{ "aria-label": "heading filtering checkbox" }}
                            />
                        }
                        label={t("SlidesTable.Filtering.HeadingFilter")}
                    />
                    <TextField disabled={!filterHeading} value={headingFilter ? headingFilter : ""} onChange={changeHeadingFilter} />
                </FormGroup>

                <Box style={{ marginTop: "1.0rem" }}>
                    <Button style={{ marginRight: "0.5rem" }} variant="contained" size="small" onClick={saveChanges}>
                        {t("SlidesTable.Filtering.SaveButton")}
                    </Button>

                    <Button style={{ margin: "0.5rem" }} variant="contained" size="small" onClick={cancelChanges}>
                        {t("SlidesTable.Filtering.CancelButton")}
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )
}

export default SlidesTableFilterDialog
