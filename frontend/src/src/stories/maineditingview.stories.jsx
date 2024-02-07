import React from "react"
import MainEditingView from "../main_editing_view/MainEditingView"
import WelcomeView from "../main_editing_view/welcome_view/WelcomeView"
import SlidesTable from "../main_editing_view/slides_table/SlidesTable"

export default {
    title: "Main Editing View",
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

export const Main = (props) => <MainEditingView {...props} />
Main.args = {
    selectedProjectInfo: {
        selected: {
            name: "Hippity-hoppity",
        },
        isFetching: false,
        receivedAt: new Date(),
        error: undefined,
    },

    activeViewSettings: {
        setActiveView: () => {},
        MAIN_EDITING_VIEW: "MAIN_EDITING_VIEW",
        SLIDE_EDITING_VIEW: "SLIDE_EDITING_VIEW",
        PRESENTATION_VIEW: "PRESENTATION_VIEW",
    },
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
                        main: "blue",
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
    slides: [],
    selectSlide: () => {},
}

export const Welcome_View = (props) => <WelcomeView {...props} />
export const Slides_Table = (props) => <SlidesTable {...props} />
