import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

import MainEditingView from "../main_editing_view/MainEditingView"
import PresentationView from "../presentation_view/PresentationView"
import SlideEditingView from "../slide_editing_view/SlideEditingView"

const PATHS = {
    mainEditingView: "/main",
    presentationView: "/presentation",
    slideEditingView: "/slide",
}

function Router(props) {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<MainEditingView {...props} />} />
                <Route path={PATHS.mainEditingView} element={<MainEditingView {...props} />} />
                <Route path={PATHS.presentationView} element={<PresentationView />} />
                <Route path={PATHS.slideEditingView} element={<SlideEditingView />} />
            </Routes>
        </HashRouter>
    )
}

export default Router
