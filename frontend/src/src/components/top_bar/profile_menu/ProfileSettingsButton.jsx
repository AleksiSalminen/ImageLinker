import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "@mui/material/Button"

import ProfileSettingsDialog from "./ProfileSettingsDialog.jsx"

/**
 * Function that returns the button for opening profile settings
 * @param {Object} props received parameters
 */
function ProfileSettingsButton(props) {
    const { t } = useTranslation()

    const [dialogOpen, setDialogOpen] = useState(false)

    const openProfileSettingsDialog = () => {
        props.fetchOwnInfo(props.token).then((error) => {
            if (!error) {
                setDialogOpen(true)
            }
        })
    }

    const closeProfileSettingsDialog = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <Button variant="contained" color="primary" style={{ margin: "0.25rem" }} onClick={openProfileSettingsDialog}>
                {t("TopBar.ProfileButton")}
            </Button>

            <ProfileSettingsDialog
                open={dialogOpen}
                closeDialog={closeProfileSettingsDialog}
                logout={props.logout}
                unregister={props.unregister}
                token={props.token}
                ownInfo={props.ownInfo}
                updateOwnInfo={props.updateOwnInfo}
            />
        </>
    )
}

export default ProfileSettingsButton
