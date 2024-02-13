import React from "react"
import { connect, Provider } from "react-redux"
import SlideLinker from "../SlideLinker.jsx"
import store from "../state/reducers/mainReducers.js"
import * as projectsActions from "../state/actions/projectsActions.js"
import * as usersServices from "../state/api/usersFetch.js"
import * as projectsServices from "../state/api/projectsFetch.js"
import "../i18n.js"

console.log("State", store.getState())

/*
 * Redux store mapping to React components
 */

// Map Redux state to component props
function mapStateToProps(state) {
    return {
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

export default {
    title: "Application",
}

export const EmptyEntrypoint = () => <>Entrypoint Story</>

export const Application = (props) => (
    <Provider store={store}>
        <App {...props} />
    </Provider>
)
Application.args = {
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
