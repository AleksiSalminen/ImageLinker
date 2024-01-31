import React from "react"
import Button from "@mui/material/Button"
import { useTranslation } from "react-i18next"

/**
 * Function that returns the button for adding a new project
 * @param {Object} props received parameters
 */
function NewProjectButton(props) {
    const { t } = useTranslation()

    const addProject = () => {
        const settings = props.interfaceSettings

        const uiSettings = {
            darkTheme: settings[0].theme.darkState,
            font: settings[1].font.font,
            fontSize: settings[1].font.fontSize,
            primaryColor: settings[3].colors.primaryColor,
            secondaryColor: settings[3].colors.secondaryColor,
        }

        const project = {
            uiSettings: uiSettings,
        }

        props.addProject(props.token, project).then((error) => {
            if (error) {
                alert("Could not add a new project")
            }
        })
    }

    return (
        <Button
            onClick={addProject}
            variant="contained"
            component="label"
            color="primary"
            style={{ margin: "0.25rem" }}
        >
            {t("TopBar.NewButton")}
        </Button>
    )
}

export default NewProjectButton
