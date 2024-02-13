import { createStore, combineReducers, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import { authentication, unregistered, updatedUser, ownInformation } from "./usersReducers"
import { theme } from "./themeReducers.js"

const users = combineReducers({
    authentication,
    unregistered,
    updatedUser,
    ownInformation,
})
const rootReducer = combineReducers({
    users: users,
    projects: {},
    theme: theme,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store
