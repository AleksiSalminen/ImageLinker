import React from "react"
import TopBar from "../../components/top_bar/TopBar"

export default {
    title: "Components/Top Bar",
    decorators: [(Story) => <Story />],
    argTypes: {
        activeViewSettings: {
            setActiveView: { action: "() => {}" },
            MAIN_EDITING_VIEW: { control: "text" },
            SLIDE_EDITING_VIEW: { control: "text" },
            PRESENTATION_VIEW: { control: "text" },
        },
        selectedProjectInfo: {
            selected: { control: "object" },
            isFetching: { control: "boolean" },
            receivedAt: { control: "date" },
            error: { control: "text" },
        },
        changeSelectedProject: { action: "() => {}" },
        updateSlides: { action: "() => {}" },
        interfaceSettings: {
            theme: { control: "object" },
            font: { control: "object" },
            language: { control: "object" },
            colors: { control: "object" },
        },
        slides: { control: "array" },
        selectSlide: { action: "() => {}" },
    },
}

export const Logged_out = (props) => <TopBar {...props} />
Logged_out.args = {
    selectedProjectInfo: {
        selected: {},
        isFetching: false,
        receivedAt: new Date(),
        error: undefined,
    },
    changeSelectedProject: () => {},
    updateSlides: () => {},
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
            },
            font: { fontSize: 15 },
            fontSize: 15,
            language: {},
            colors: {},
        },
    ],
}
