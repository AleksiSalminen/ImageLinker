import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "@mui/material/Button"

import SlidesTableSortDialog from "./SlidesTableSortDialog"

/**
 * Function that returns the sorting button for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableSortButton(props) {
    const { t } = useTranslation()
    const [dialogOpen, setDialogOpen] = useState(false)

    const openDialog = () => {
        setDialogOpen(true)
    }

    const closeDialog = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <Button variant="outlined" onClick={openDialog}>
                {t("SlidesTable.Sorting.SortButton")}
            </Button>

            <SlidesTableSortDialog open={dialogOpen} closeDialog={closeDialog} slides={props.slides} updateSlides={props.updateSlides} />
        </>
    )
}

export default SlidesTableSortButton
