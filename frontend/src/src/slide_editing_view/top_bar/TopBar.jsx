import React from "react"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

import SettingsMenu from "./settings_menu/SettingsMenu"
import { UndoButton, RedoButton } from "../history/HistoryButtons"

/**
 * Function that returns the top bar of the application
 * @param {Object} props received parameters
 */
function TopBar(props) {
    return (
        <AppBar position="sticky" color="grey">
            <Toolbar>
                <Box style={{ marginLeft: "0rem", marginRight: "auto" }}>
                    <img src="Logo.png" alt="Slide Linker logo" style={{ height: "2.0rem", width: "auto" }} />
                </Box>

                <Box style={{ marginLeft: "auto", marginRight: "0rem", padding: "0.5rem" }}>
                    <UndoButton history={props.history} />

                    <RedoButton history={props.history} />

                    <SettingsMenu interfaceSettings={props.interfaceSettings} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
