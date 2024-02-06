import * as actions from "../actions/usersActions.js"
import * as project_actions from "../actions/projectsActions.js"
import store from "../reducers/mainReducers.js"

const USERS_URL = "http://localhost/api/users"

export function fetchUserLogin(user) {
    const url = USERS_URL + "/login"
    const userJSON = '{"userName":"' + user.userName + '","password":"' + user.password + '"}'

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
                    throw Error(`Request rejected with status ${response.status}`)
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

export function fetchUserRegister(user) {
    const url = USERS_URL + "/register"
    const userJSON = '{"userName":"' + user.userName + '","password":"' + user.password + '"}'

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
                console.log("C")
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((json) => {
                console.log("D")
                store.dispatch(actions.receiveToken(json))
                return json
            })
            .catch((error) => {
                console.log("E")
                store.dispatch(actions.errorToken(error))
                return Error(error)
            })
    }
}

export function fetchUserUnregister(token) {
    const url = USERS_URL + "/me"

    return (dispatch) => {
        store.dispatch(actions.requestUnregister())
        return fetch(url, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((user) => {
                store.dispatch(actions.receiveUnregister())
                logout()
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorUnregister(error))
                return Error(error)
            })
    }
}

export function fetchOwnInfo(token) {
    const url = USERS_URL + "/me"

    return (dispatch) => {
        store.dispatch(actions.requestGetUser())
        return fetch(url, {
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((user) => {
                store.dispatch(actions.receiveGetUser(user))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorGetUser(error))
                return Error(error)
            })
    }
}

export function fetchUpdateOwnInfo(user, token) {
    const url = USERS_URL + "/me"
    const userJSON = '{"userName":"' + user.userName + '","password":"' + user.password + '"}'

    return (dispatch) => {
        store.dispatch(actions.requestGetUser())
        return fetch(url, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
            body: userJSON,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((user) => {
                store.dispatch(actions.receiveGetUser(user))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorGetUser(error))
                return Error(error)
            })
    }
}
