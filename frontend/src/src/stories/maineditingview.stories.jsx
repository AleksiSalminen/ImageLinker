import React from "react"
import MainEditingView from "../main_editing_view/MainEditingView"
import WelcomeView from "../main_editing_view/welcome_view/WelcomeView"
import SlidesTable from "../main_editing_view/slides_table/SlidesTable"

export default {
    title: "Main Editing View",
    decorators: [
        (Story) => (
            <Story />
        )
    ]
}

export const Main = (props) => <MainEditingView {...props} />
export const Welcome_View = (props) => <WelcomeView {...props} />
export const Slides_Table = (props) => <SlidesTable {...props} />
