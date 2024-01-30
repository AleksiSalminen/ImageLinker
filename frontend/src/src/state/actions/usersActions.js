import * as types from "../action_types/usersTypes.js"

/* Token */

export function requestToken() {
    return { type: types.REQUEST_TOKEN }
}

export function errorToken(error) {
    return { type: types.ERROR_TOKEN, error }
}

export function receiveToken(json) {
    return {
        type: types.RECEIVE_TOKEN,
        token: json.token,
        role: json.role,
        receivedAt: Date.now(),
    }
}

/* Register */

export function requestRegistration(user) {
    return { type: types.REQUEST_REGISTER, user }
}

export function errorRegistration(error) {
    return { type: types.ERROR_REGISTER, error }
}

/* Login */

export function requestLogin(user) {
    return { type: types.REQUEST_LOGIN, user }
}

export function errorLogin(error) {
    return { type: types.ERROR_LOGIN, error }
}

/* Unregister */

export function requestUnregister() {
    return { type: types.REQUEST_UNREGISTER }
}

export function errorUnregister(error) {
    return { type: types.ERROR_UNREGISTER, error }
}

export function receiveUnregister() {
    return {
        type: types.RECEIVE_UNREGISTER,
        receivedAt: Date.now(),
    }
}

/* Update user */

export function requestUpdateUser() {
    return { type: types.REQUEST_UPDATE_USER }
}

export function errorUpdateUser(error) {
    return { type: types.ERROR_UPDATE_USER, error }
}

export function receiveUpdateUser() {
    return {
        type: types.RECEIVE_UPDATE_USER,
        receivedAt: Date.now(),
    }
}

/* Delete user */

export function requestDeleteUser() {
    return { type: types.REQUEST_DELETE_USER }
}

export function errorDeleteUser(error) {
    return { type: types.ERROR_DELETE_USER, error }
}

export function receiveDeleteUser() {
    return {
        type: types.RECEIVE_DELETE_USER,
        receivedAt: Date.now(),
    }
}

/* Get users */

export function requestGetUsers() {
    return { type: types.REQUEST_GET_USER }
}

export function errorGetUsers(error) {
    return { type: types.ERROR_GET_USERS, error }
}

export function receiveGetUsers(users) {
    return {
        type: types.RECEIVE_GET_USERS,
        users: users,
        receivedAt: Date.now(),
    }
}

/* Get user */

export function requestGetUser() {
    return { type: types.REQUEST_GET_USER }
}

export function errorGetUser(error) {
    return { type: types.ERROR_GET_USER, error }
}

export function receiveGetUser(user) {
    return {
        type: types.RECEIVE_GET_USER,
        user: user,
        receivedAt: Date.now(),
    }
}
