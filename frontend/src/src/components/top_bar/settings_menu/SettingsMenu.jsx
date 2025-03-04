import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"

import LightModeSelector from "./LightModeSelector"
import ColorsPicker from "./ColorsPicker"
import LanguageSelector from "./LanguageSelector"
import FontSelector from "./FontSelector"
import FontSizeSelector from "./FontSizeSelector"

/**
 * Function that returns the view for settings menu
 * @param {Object} props received parameters
 */
function SettingsMenu(props) {
    const { t } = useTranslation()
    const [settingsAnchor, setSettingsAnchor] = useState(null)

    let themeSettings = null
    let fontSettings = null
    let languageSettings = null
    let colorsSettings = null

    /** Set the settings objects for the interface parameters */
    /* console.log(props.interfaceSettings) */
    if (props.interfaceSettings) {
        for (let i = 0; i < props.interfaceSettings.length; i++) {
            const setting = props.interfaceSettings[i]
            if (setting.theme) {
                themeSettings = setting.theme
            }
            if (setting.font) {
                fontSettings = setting.font
            }
            if (setting.language) {
                languageSettings = setting.language
            }
            if (setting.colors) {
                colorsSettings = setting.colors
            }
        }
    }

    /** When "Settings"-button is clicked, set the anchor for the settings menu */
    const handleSettingsClick = (event) => {
        setSettingsAnchor(event.currentTarget)
    }

    /** When the settings menu gets closed, remove the menu anchor */
    const handleSettingsClose = () => {
        setSettingsAnchor(null)
    }

    return (
        <>
            <Button
                variant="contained"
                aria-controls="settings-menu"
                aria-haspopup="true"
                onClick={handleSettingsClick}
                style={{ margin: "0.25rem" }}
            >
                {t("TopBar.Settings.SettingsButton")}
            </Button>

            <Menu
                id="settings-menu"
                anchorEl={settingsAnchor}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                open={Boolean(settingsAnchor)}
                onClose={handleSettingsClose}
            >
                <LightModeSelector settings={themeSettings} />

                <ColorsPicker settings={colorsSettings} />

                <LanguageSelector settings={languageSettings} />

                <FontSelector settings={fontSettings} />

                <FontSizeSelector settings={fontSettings} />
            </Menu>
        </>
    )
}

export default SettingsMenu
