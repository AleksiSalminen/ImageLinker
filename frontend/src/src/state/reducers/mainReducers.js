import { createStore, combineReducers, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import { authentication, unregistered, updatedUser, ownInformation } from "./usersReducers.js"
import {
    projectList,
    addedProject,
    selectedProjectInfo,
    updatedProject,
    deletedProject,
    slideList,
    addedSlide,
    selectedSlide,
    updatedSlide,
    deletedSlide,
} from "./projectsReducers.js"
import { theme } from "./themeReducers.js"

const users = combineReducers({ authentication, unregistered, updatedUser, ownInformation })
const projects = combineReducers({
    projectList,
    addedProject,
    selectedProjectInfo,
    updatedProject,
    deletedProject,
    slideList,
    addedSlide,
    selectedSlide,
    updatedSlide,
    deletedSlide,
})
const rootReducer = combineReducers({
    users: users,
    projects: projects,
    theme: theme,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store
