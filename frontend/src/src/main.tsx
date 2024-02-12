import React, { Suspense } from "react"
import { createRoot } from "react-dom/client"
import { connect, Provider } from "react-redux"
import SlideLinker from "./SlideLinker.jsx"
import store from "./state/reducers/mainReducers.js"
import * as actions from "./state/actions/projectsActions.js"
import "./i18n.js"

/*
 * Redux store mapping to React components
 */

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        projects: state.projectList.projects,
        selectedProjectInfo: state.selectedProject.selectedProjectInfo,
        slides: state.selectedProject.slideList.slides,
        selectedSlide: state.selectedProject.selectedSlide.selected,
    }
}

// Map Redux actions to component props
const mapDispatchToProps = {
    changeSelectedProject: (project) => store.dispatch(actions.receiveProject(project)),
    updateSlides: (slides) => store.dispatch(actions.receiveSlides(slides)),
    selectSlide: (slide) => store.dispatch(actions.receiveSlide(slide)),
}

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(SlideLinker)

const domNode = document.getElementById("root")
const root = createRoot(domNode)

// Rendering here
root.render(
    <React.StrictMode>
        <Suspense fallback={<div></div>}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </React.StrictMode>
)
