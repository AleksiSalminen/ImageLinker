import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "@mui/material/Button"

import LoginDialog from "./LoginDialog.jsx"

/**
 * Function that returns the button for switching to login view
 * @param {Object} props received parameters
 */
function LoginButton(props) {
    const { t } = useTranslation()

    const [dialogOpen, setDialogOpen] = useState(false)

    const openLoginDialog = () => {
        setDialogOpen(true)
    }

    const closeLoginDialog = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <Button variant="contained" color="primary" style={{ margin: "0.25rem" }} onClick={openLoginDialog}>
                {t("TopBar.LoginButton")}
            </Button>

            <LoginDialog open={dialogOpen} closeDialog={closeLoginDialog} fetchUserLogin={props.fetchUserLogin} />
        </>
    )
}

export default LoginButton
