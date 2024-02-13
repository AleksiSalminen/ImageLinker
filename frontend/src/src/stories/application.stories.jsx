import React from "react"
import Slidelinker from "../Slidelinker"

export default {
    title: "Application",
    decorators: [(Story) => <Story />],
}

export const EmptyEntrypoint = () => <>Entrypoint Story</>

export const Application = (props) => <Slidelinker {...props} />
Application.args = {
    selectedProjectInfo: {},
    changeSelectedProject: () => {},
    slides: [],
    updateSlides: () => {},
    selectSlide: () => {},
    interfaceSettings: [
        {
            theme: {
                palette: {
                    mode: "light",
                    primary: {
                        main: "red",
                    },
                    secondary: {
                        main: "green",
                    },
                },
                typography: {
                    fontFamily: "Arial",
                    fontSize: 15,
                },
                handleThemeChange: () => console.log("Change theme"),
            },
            font: {
                font: "Arial",
                setFont: (font) => console.log(`Change font: ${font}`),
                fontSize: 15,
                setFontSize: (fontSize) => console.log(`Change font size: ${fontSize}`),
            },
            language: {
                english: "en",
                finnish: "fi",
                language: "en",
                setLanguage: () => {},
            },
            colors: {},
        },
    ],
}
