import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"

/**
 * Function that returns the profile settings component
 * @param {Object} props received parameters
 */
function ProfileSettingsDialog(props) {
    const { t } = useTranslation()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const updateUserName = (event) => {
        setUserName(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    const updateInfo = () => {
        setUserName(props.ownInfo.userName)
        setPassword("")
    }

    const save = () => {
        const user = {
            userName: userName,
            password: password,
        }

        props.updateOwnInfo(user, props.token).then((error) => {
            props.closeDialog()
        })
    }

    return (
        <Dialog open={props.open} TransitionProps={{ onEntered: () => updateInfo() }} style={{ padding: "0.5rem" }}>
            <Box style={{ padding: "1rem" }}>
                <Button
                    onClick={() => props.unregister(props.token)}
                    size="small"
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: "2rem" }}
                >
                    {t("TopBar.ProfileDialog.DialogUnregisterButton")}
                </Button>

                <Button onClick={props.logout} size="small" variant="outlined" color="primary" style={{ marginRight: "2rem" }}>
                    {t("TopBar.ProfileDialog.DialogLogoutButton")}
                </Button>

                <br />
                <br />

                <Typography variant="h4">{t("TopBar.ProfileDialog.DialogTitle")}</Typography>

                <TextField label={t("TopBar.ProfileDialog.DialogUserName")} value={userName} type="text" onChange={updateUserName} />
                <br />

                <TextField label={t("TopBar.ProfileDialog.DialogPassword")} value={password} type="password" onChange={updatePassword} />

                <Box style={{ marginTop: "1rem" }}>
                    <Button onClick={save} variant="contained" color="primary" style={{ marginRight: "2rem" }}>
                        {t("TopBar.ProfileDialog.DialogSaveButton")}
                    </Button>

                    <Button
                        onClick={props.closeDialog}
                        variant="contained"
                        //color="default"
                        style={{ marginRight: "2rem" }}
                    >
                        {t("TopBar.ProfileDialog.DialogCancelButton")}
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )
}

export default ProfileSettingsDialog
