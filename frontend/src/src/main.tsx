import React, { Suspense } from "react"
import { createRoot } from "react-dom/client"
import { connect, Provider } from "react-redux"
import SlideLinker from "./SlideLinker.jsx"
import store from "./state/reducers/mainReducers.js"
import * as projectsActions from "./state/actions/projectsActions.js"
import * as usersServices from "./state/api/usersFetch.js"
import * as projectsServices from "./state/api/projectsFetch.js"
import "./i18n.js"

/*
 * Redux store mapping to React components
 */

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        // Projects states
        projects: state.projects.projectList.projects,
        ownProjects: state.projects.ownProjects.projects,
        selectedProjectInfo: state.projects.selectedProject.selectedProjectInfo,
        slides: state.projects.selectedProject.slideList.slides,
        selectedSlide: state.projects.selectedProject.selectedSlide.selected,

        // Users states
        token: state.users.authentication.token,
        ownInfo: state.users.ownInformation,
    }
}

// Map Redux actions to component props
const mapDispatchToProps = {
    // Projects actions
    addProject: (token, project) => projectsServices.fetchAddProject(token, project),
    updateProject: (token, project) => projectsServices.fetchUpdateProject(token, project),
    deleteProject: (token, projectID) => projectsServices.fetchDeleteProject(token, projectID),
    getOwnProjects: (token) => projectsServices.fetchGetOwnProjects(token),
    changeSelectedProject: (project) => store.dispatch(projectsActions.receiveProject(project)),
    getSlides: (token, projectID) => projectsServices.fetchGetProjectSlides(token, projectID),
    updateSlides: (slides) => store.dispatch(projectsActions.receiveSlides(slides)),
    selectSlide: (slide) => store.dispatch(projectsActions.receiveSlide(slide)),
    addSlide: (token, projectID, slide) => projectsServices.fetchAddSlide(token, projectID, slide),
    updateSlide: (token, projectID, slide) => projectsServices.fetchUpdateSlide(token, projectID, slide),
    deleteSlide: (token, projectID, slideID) => projectsServices.fetchDeleteSlide(token, projectID, slideID),

    // Users actions
    fetchUserLogin: (user) => usersServices.fetchUserLogin(user),
    fetchUserRegister: (user) => usersServices.fetchUserRegister(user),
    unregister: (token) => usersServices.fetchUserUnregister(token),
    logout: () => usersServices.logout(),
    fetchOwnInfo: (token) => usersServices.fetchOwnInfo(token),
    updateOwnInfo: (user, token) => usersServices.fetchUpdateOwnInfo(user, token),
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
