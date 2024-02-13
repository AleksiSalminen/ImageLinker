import React, { useState } from "react"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Router from "./routes/Router.jsx"

/**
 * Function that returns the main Slide Linker view
 * @param {Object} props received parameters
 */
function SlideLinker(props) {
    /** Settings for the user interface are defined here */
    const [primaryColor, setPrimaryColor] = useState("#977F55")
    const [secondaryColor, setSecondaryColor] = useState("#D1AF74")
    const [font, setFont] = useState("Gabriola")
    const [fontSize, setFontSize] = useState(20)
    const english = "en"
    const finnish = "fi"
    const [language, setLanguage] = useState(english)
    const [darkState, setDarkState] = useState(false)
    const palletType = darkState ? "dark" : "light"

    /** Here the theme used in the user interface is defined */
    const theme = createTheme({
        palette: {
            mode: palletType,
            primary: {
                main: primaryColor,
            },
            secondary: {
                main: secondaryColor,
            },
        },
        typography: {
            fontFamily: font,
            fontSize: parseInt(fontSize),
        },
    })

    /** Function that changes the theme state from light->dark or dark->light */
    const handleThemeChange = () => {
        setDarkState(!darkState)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Slide Linker</title>
                </Helmet>
            </HelmetProvider>

            <Router
                selectedProjectInfo={props.selectedProjectInfo}
                changeSelectedProject={props.changeSelectedProject}
                slides={props.slides}
                updateSlides={props.updateSlides}
                selectSlide={props.selectSlide}
                interfaceSettings={props.interfaceSettings}
            />
        </ThemeProvider>
    )
}

export default SlideLinker
