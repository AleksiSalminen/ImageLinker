import * as actions from "../actions/usersActions.js"
import store from "../reducers/mainReducers.js"

const USERS_URL = "http://localhost/api/users"

export function fetchUserRegister(user) {
    const url = USERS_URL + "/register"
    const userJSON =
        '{"userName":"' +
        user.userName +
        '","password":"' +
        user.password +
        '"}'

    return (dispatch) => {
        store.dispatch(actions.requestToken())
        return fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: userJSON,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(
                        `Request rejected with status ${response.status}`
                    )
                }
            })
            .then((json) => {
                store.dispatch(actions.receiveToken(json))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorToken(error))
                return Error(error)
            })
    }
}

export function fetchUserLogin(user) {
    const url = USERS_URL + "/login"
    const userJSON =
        '{"userName":"' +
        user.userName +
        '","password":"' +
        user.password +
        '"}'

    return (dispatch) => {
        store.dispatch(actions.requestToken())
        return fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: userJSON,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(
                        `Request rejected with status ${response.status}`
                    )
                }
            })
            .then((json) => {
                store.dispatch(actions.receiveToken(json))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorToken(error))
                return Error(error)
            })
    }
}

export function logout() {
    const nullUser = {
        token: null,
    }

    store.dispatch(actions.receiveToken(nullUser))
    store.dispatch(project_actions.receiveProject(null))
    store.dispatch(project_actions.receiveSlides(null))
}
