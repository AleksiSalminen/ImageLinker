import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"

/**
 * Function that returns the option editing dialog
 * @param {Object} props received parameters
 */
function LoginDialog(props) {
    const { t } = useTranslation()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const updateUserName = (event) => {
        setUserName(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        const user = {
            userName: userName,
            password: password,
        }

        props.fetchUserLogin(user).then((error) => {
            if (error) {
                const alertMsg = t("TopBar.LoginFailed")
                alert(alertMsg)
            }
        })
    }

    return (
        <Dialog open={props.open} style={{ padding: "0.5rem" }}>
            <Box style={{ padding: "1rem" }}>
                <Typography variant="h4">{t("TopBar.LoginTitle")}</Typography>

                <TextField label={t("TopBar.LoginUserName")} value={userName} type="text" onChange={updateUserName} />
                <br />

                <TextField label={t("TopBar.LoginPassword")} value={password} type="password" onChange={updatePassword} />

                <Box style={{ marginTop: "1rem" }}>
                    <Button onClick={login} variant="contained" color="primary" style={{ marginRight: "2rem" }}>
                        {t("TopBar.LoginButton")}
                    </Button>

                    <Button
                        onClick={props.closeDialog}
                        variant="contained"
                        //color="default" // FIXME: This has stopped working?
                        style={{ marginRight: "2rem" }}
                    >
                        {t("TopBar.CancelButton")}
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )
}

export default LoginDialog
