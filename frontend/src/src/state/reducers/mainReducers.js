import { createStore, combineReducers, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import { authentication, unregistered, updatedUser, ownInformation } from "./usersReducers.js"
import { projectList, addedProject, selectedProject, updatedProject, deletedProject } from "./projectsReducers.js"
import { theme } from "./themeReducers.js"

const rootReducer = combineReducers({
    authentication,
    unregistered,
    updatedUser,
    ownInformation,
    projectList,
    addedProject,
    selectedProject,
    updatedProject,
    deletedProject,
    theme,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store
