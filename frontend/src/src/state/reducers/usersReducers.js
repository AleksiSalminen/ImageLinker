import * as types from "../action_types/usersTypes.js"

/*
 * This is where the reducers related to users are defined
 */

/*
Overview of the reducers here:

authentication: {},
selectedUser: {},
unregistered: {},
updatedUser: {},
deletedUser: {},
ownInformation: {}
*/

/* -------------------------- */

export function authentication(state = initialTokenState, action) {
    switch (action.type) {
        case types.REQUEST_TOKEN:
            return {
                ...state,
                isFetching: true,
                token: null,
                receivedAt: null,
                error: null,
            }
        case types.RECEIVE_TOKEN:
            return {
                ...state,
                isFetching: false,
                token: action.token,
                receivedAt: action.receivedAt,
                error: null,
            }
        case types.ERROR_TOKEN:
            return {
                ...state,
                isFetching: false,
                token: null,
                receivedAt: null,
                error: action.error,
            }
        default:
            return state
    }
}

const initialTokenState = {
    isFetching: false,
    token: null,
    receivedAt: null,
    error: null,
}

/* -------------------------- */

export function unregistered(state = initialUnregisterState, action) {
    switch (action.type) {
        case types.ERROR_UNREGISTER:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        case types.REQUEST_UNREGISTER:
            return {
                ...state,
                isFetching: true,
            }
        case types.RECEIVE_UNREGISTER:
            return {
                ...state,
                isFetching: false,
                receivedAt: action.receivedAt,
                error: null,
            }
        default:
            return state
    }
}

const initialUnregisterState = {
    isFetching: false,
    receivedAt: null,
    error: null,
}

/* -------------------------- */

export function updatedUser(state = initialUpdateState, action) {
    switch (action.type) {
        case types.ERROR_UPDATE_USER:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        case types.REQUEST_UPDATE_USER:
            return {
                ...state,
                isFetching: true,
            }
        case types.RECEIVE_UPDATE_USER:
            return {
                ...state,
                isFetching: false,
                receivedAt: action.receivedAt,
                error: null,
            }
        default:
            return state
    }
}

const initialUpdateState = {
    isFetching: false,
    receivedAt: null,
    error: null,
}

/* -------------------------- */

export function ownInformation(state = initialOwnInfoState, action) {
    switch (action.type) {
        case types.ERROR_GET_USER:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        case types.REQUEST_GET_USER:
            return {
                ...state,
                isFetching: true,
            }
        case types.RECEIVE_GET_USER:
            return {
                ...state,
                isFetching: false,
                name: action.user.name,
                userName: action.user.userName,
                email: action.user.email,
                receivedAt: action.receivedAt,
                error: null,
            }
        default:
            return state
    }
}

const initialOwnInfoState = {
    isFetching: false,
    name: null,
    userName: null,
    email: null,
    receivedAt: null,
    error: null,
}
