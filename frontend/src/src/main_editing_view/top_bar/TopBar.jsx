import React from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"

import ProjectTitleArea from "./ProjectTitleArea.jsx"
import NewProjectButton from "./NewProjectButton.jsx"
import OpenProjectButton from "./OpenProjectButton.jsx"
import PlayProjectButton from "./PlayProjectButton.jsx"
import ProfileMenu from "./profile_menu/ProfileMenu.jsx"
import SettingsMenu from "./settings_menu/SettingsMenu.jsx"

/**
 * Function that returns the top bar of the application
 * @param {Object} props received parameters
 */
function TopBar(props) {
    const { t } = useTranslation()
    const darkState = props.interfaceSettings[0].theme.darkState

    if (props.token) {
        return (
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Box
                        style={{
                            marginLeft: "0rem",
                            marginRight: "auto",
                            marginTop: "0.5rem",
                        }}
                    >
                        <img
                            src={darkState ? "LogoDark.png" : "LogoLight.png"}
                            alt="Slide Linker logo"
                            style={{ height: "4.0rem", width: "auto" }}
                        />
                    </Box>

                    <Box style={{ marginLeft: "0%", padding: "0.5rem" }}>
                        <ProjectTitleArea
                            token={props.token}
                            projectName={props.projectName}
                            updateProject={props.updateProject}
                            selectedProject={props.selectedProject}
                        />
                    </Box>

                    <Box
                        style={{
                            marginLeft: "auto",
                            marginRight: "0rem",
                            padding: "0.5rem",
                        }}
                    >
                        <NewProjectButton
                            addProject={props.addProject}
                            token={props.token}
                            interfaceSettings={props.interfaceSettings}
                        />

                        <OpenProjectButton
                            token={props.token}
                            ownProjects={props.ownProjects}
                            getOwnProjects={props.getOwnProjects}
                            getSlides={props.getSlides}
                            changeSelectedProject={props.changeSelectedProject}
                            updateSlides={props.updateSlides}
                        />

                        <PlayProjectButton
                            selectedProject={props.selectedProject}
                            activeViewSettings={props.activeViewSettings}
                        />

                        <ProfileMenu
                            fetchUserLogin={props.fetchUserLogin}
                            fetchUserRegister={props.fetchUserRegister}
                            token={props.token}
                            logout={props.logout}
                            unregister={props.unregister}
                            fetchOwnInfo={props.fetchOwnInfo}
                            ownInfo={props.ownInfo}
                            updateOwnInfo={props.updateOwnInfo}
                        />

                        <SettingsMenu
                            interfaceSettings={props.interfaceSettings}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        )
    } else {
        return (
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Box
                        style={{
                            marginLeft: "0rem",
                            marginRight: "auto",
                            marginTop: "0.5rem",
                        }}
                    >
                        <img
                            src={darkState ? "LogoDark.png" : "LogoLight.png"}
                            alt="Slide Linker logo"
                            style={{ height: "4.0rem", width: "auto" }}
                        />
                    </Box>

                    <Box style={{ marginLeft: "0%", padding: "0.5rem" }}>
                        <ProjectTitleArea
                            token={props.token}
                            projectName={props.projectName}
                            updateProject={props.updateProject}
                            selectedProject={props.selectedProject}
                        />
                    </Box>

                    <Box
                        style={{
                            marginLeft: "auto",
                            marginRight: "0rem",
                            padding: "0.5rem",
                        }}
                    >
                        <ProfileMenu
                            fetchUserLogin={props.fetchUserLogin}
                            fetchUserRegister={props.fetchUserRegister}
                            token={props.token}
                            logout={props.logout}
                            unregister={props.unregister}
                            fetchOwnInfo={props.fetchOwnInfo}
                            ownInfo={props.ownInfo}
                            updateOwnInfo={props.updateOwnInfo}
                        />

                        <SettingsMenu
                            interfaceSettings={props.interfaceSettings}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        )
    }
}

export default TopBar
