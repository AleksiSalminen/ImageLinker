import React from "react"
import SlideEditingView from "../../slide_editing_view/SlideEditingView"
import ImageEditArea from "../../slide_editing_view/image_edit_area/ImageEditArea"
import InfoArea from "../../slide_editing_view/info_area/InfoArea"
import OptionsArea from "../../slide_editing_view/options_area/OptionsArea"
import HistoryButtons from "../../slide_editing_view/history/HistoryButtons"
import BottomArea from "../../slide_editing_view/bottom_area/BottomArea"

export default {
    title: "Views/Slide Editing View",
    decorators: [(Story) => <Story />],
}

export const Main = (props) => <SlideEditingView {...props} />
export const Image_Edit_Area = (props) => <ImageEditArea {...props} />
export const Info_Area = (props) => <InfoArea {...props} />
export const Options_Area = (props) => <OptionsArea {...props} />
export const History_Buttons = (props) => <HistoryButtons {...props} />
export const Bottom_Area = (props) => <BottomArea {...props} />
