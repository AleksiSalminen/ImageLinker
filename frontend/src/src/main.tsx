import React, { Suspense } from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import SlideLinker from "./SlideLinker.jsx"
import store from "./state/reducers/mainReducers.js"
import "./i18n.js"

const domNode = document.getElementById("root")
const root = createRoot(domNode)

// Rendering here
root.render(
    <React.StrictMode>
        <Suspense fallback={<div></div>}>
            <Provider store={store}>
                <SlideLinker />
            </Provider>
        </Suspense>
    </React.StrictMode>
)
