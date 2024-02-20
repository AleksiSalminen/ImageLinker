import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "@mui/material/Button"

import RegisterDialog from "./RegisterDialog.jsx"

/**
 * Function that returns the button for switching to register view
 * @param {Object} props received parameters
 */
function RegisterButton(props) {
    const { t } = useTranslation()

    const [dialogOpen, setDialogOpen] = useState(false)

    const openRegisterDialog = () => {
        setDialogOpen(true)
    }

    const closeRegisterDialog = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <Button variant="contained" color="primary" style={{ margin: "0.25rem" }} onClick={openRegisterDialog}>
                {t("TopBar.RegisterButton")}
            </Button>

            <RegisterDialog open={dialogOpen} closeDialog={closeRegisterDialog} fetchUserRegister={props.fetchUserRegister} />
        </>
    )
}

export default RegisterButton
