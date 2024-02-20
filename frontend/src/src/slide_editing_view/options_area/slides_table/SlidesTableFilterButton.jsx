import React, { useState } from "react"
import Button from "@mui/material/Button"
import { useTranslation } from "react-i18next"

import SlidesTableFilterDialog from "./SlidesTableFilterDialog"

/**
 * Function that returns the filter button for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableFilterButton(props) {
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
                {t("SlidesTable.Filtering.FilterButton")}
            </Button>

            <SlidesTableFilterDialog
                open={dialogOpen}
                closeDialog={closeDialog}
                filterHeading={props.filterHeading}
                setFilterHeading={props.setFilterHeading}
            />
        </>
    )
}

export default SlidesTableFilterButton
