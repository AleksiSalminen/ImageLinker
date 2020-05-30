import * as types from "../action_types/projectsTypes.js";

/*
* This is where the reducers related to projects and projects' slides'
* are defined
*/

export const projectList = (state = initialProjectsState, action) => {
    switch (action.type) {
        case types.REQUEST_GET_PROJECTS:
            return {
                projects: {},
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_GET_PROJECTS:
            return {
                projects: {},
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_GET_PROJECTS:
            return {
                projects: action.projects,
                isFetching: false,
                receivedAt: action.receivedAt,
                error: null
            };
        default:
            return state;
    }
}

const initialProjectsState = {
    projects: {},
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

export const addedProject = (state = initialAddedProjectState, action) => {
    switch (action.type) {
        case types.REQUEST_ADD_PROJECT:
            return {
                added: null,
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_ADD_PROJECT:
            return {
                added: null,
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_ADD_PROJECT:
            return {
                added: action.added,
                isFetching: false,
                receivedAt: action.receivedAt,
                error: null
            };
        default:
            return state;
    }
}

const initialAddedProjectState = {
    added: null,
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

export const selectedProjectInfo = (state = initialSelectedProjectState, action) => {
    switch (action.type) {
        case types.REQUEST_GET_PROJECT:
            return {
                selected: null,
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_GET_PROJECT:
            return {
                selected: null,
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_GET_PROJECT:
            return {
                selected: action.selected,
                isFetching: false,
                receivedAt: action.receivedAt,
                error: null
            };
        default:
            return state;
    }
}

const initialSelectedProjectState = {
    selected: null,
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

export const updatedProject = (state = initialUpdatedProjectState, action) => {
    switch (action.type) {
        case types.REQUEST_UPDATE_PROJECT:
            return {
                updated: null,
                original: null,
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_UPDATE_PROJECT:
            return {
                updated: null,
                original: null,
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_UPDATE_PROJECT:
            return {
                updated: action.updated,
                original: action.original,
                isFetching: false,
                receivedAt: action.receivedAt,
                error: null
            };
        default:
            return state;
    }
}

const initialUpdatedProjectState = {
    updated: null,
    original: null,
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

export const deletedProject = (state = initialDeletedProjectState, action) => {
    switch (action.type) {
        case types.REQUEST_DELETE_PROJECT:
            return {
                deleted: null,
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_DELETE_PROJECT:
            return {
                deleted: null,
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_DELETE_PROJECT:
            return {
                deleted: action.deleted,
                isFetching: false,
                receivedAt: action.receivedAt,
                error: null
            };
        default:
            return state;
    }
}

const initialDeletedProjectState = {
    deleted: null,
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */