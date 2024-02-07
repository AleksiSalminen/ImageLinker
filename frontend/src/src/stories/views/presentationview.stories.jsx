import React from "react"
import PresentationView from "../../presentation_view/PresentationView"
import PresentationImage from "../../presentation_view/PresentationImage"
import OptionTable from "../../presentation_view/OptionTable"

export default {
    title: "Views/Presentation View",
    decorators: [(Story) => <Story />],
}

export const Main = (props) => <PresentationView {...props} />
export const Presentation_Image = (props) => <PresentationImage {...props} />
export const Option_Table = (props) => <OptionTable {...props} />
