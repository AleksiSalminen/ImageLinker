import { combineReducers } from "redux";

import * as types from "../action_types/projectsTypes.js";

/*
* This is where the reducers related to projects and projects' slides'
* are defined
*/

/*
Overview of the reducers here:

projectList: {},
addedProject: {},
selectedProject: {
    selectedProjectInfo: {},
    slideList: {},
    addedSlide: {},
    selectedSlide: {},
    updatedSlide: {},
    deletedSlide: {}
},
updatedProject: {},
deletedProject: {}
*/

/* -------------------------- */

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

const selectedProjectInfo = (state = initialSelectedProjectState, action) => {
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

const slideList = (state = initialSlidesState, action) => {
    switch (action.type) {
        case types.REQUEST_GET_SLIDES:
            return {
                slides: {},
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_GET_SLIDES:
            return {
                slides: {},
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_GET_SLIDES:
            return {
                slides: action.slides,
                isFetching: false,
                receivedAt: action.receivedAt,
                error: null
            };
        default:
            return state;
    }
}

const initialSlidesState = {
    slides: {},
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

const addedSlide = (state = initialAddedSlideState, action) => {
    switch (action.type) {
        case types.REQUEST_ADD_SLIDE:
            return {
                added: null,
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_ADD_SLIDE:
            return {
                added: null,
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_ADD_SLIDE:
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

const initialAddedSlideState = {
    added: null,
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

const selectedSlide = (state = initialSelectedSlideState, action) => {
    switch (action.type) {
        case types.REQUEST_GET_SLIDE:
            return {
                selected: null,
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_GET_SLIDE:
            return {
                selected: null,
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_GET_SLIDE:
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

const initialSelectedSlideState = {
    selected: null,
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

const updatedSlide = (state = initialUpdatedSlideState, action) => {
    switch (action.type) {
        case types.REQUEST_UPDATE_SLIDE:
            return {
                updated: null,
                original: null,
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_UPDATE_SLIDE:
            return {
                updated: null,
                original: null,
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_UPDATE_SLIDE:
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

const initialUpdatedSlideState = {
    updated: null,
    original: null,
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

const deletedSlide = (state = initialDeletedSlideState, action) => {
    switch (action.type) {
        case types.REQUEST_DELETE_SLIDE:
            return {
                deleted: null,
                isFetching: true,
                receivedAt: null,
                error: null
            };
        case types.ERROR_DELETE_SLIDE:
            return {
                deleted: null,
                isFetching: false,
                receivedAt: null,
                error: action.error
            };
        case types.RECEIVE_DELETE_SLIDE:
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

const initialDeletedSlideState = {
    deleted: null,
	isFetching: false,
    receivedAt: null,
    error: null
}

/* -------------------------- */

export const selectedProject = combineReducers({
    selectedProjectInfo,
    slideList,
    addedSlide,
    selectedSlide,
    updatedSlide,
    deletedSlide
});

