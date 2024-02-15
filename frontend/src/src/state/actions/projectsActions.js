import * as types from "../action_types/projectsTypes"

/*
 * Here the actions for projects and projects' slides are defined
 */

/*
 * Project actions
 */

/* GET_PROJECTS */

export function requestProjects() {
    return { type: types.REQUEST_GET_PROJECTS }
}

export function errorProjects(error) {
    return { type: types.ERROR_GET_PROJECTS, error }
}

export function receiveProjects(projectsJson) {
    return {
        type: types.RECEIVE_GET_PROJECTS,
        projects: projectsJson,
        receivedAt: Date.now(),
    }
}

/* ADD_PROJECT */

export function requestAddProject() {
    return { type: types.REQUEST_ADD_PROJECT }
}

export function errorAddProject(error) {
    return { type: types.ERROR_ADD_PROJECT, error }
}

export function receiveAddProject(addedProject) {
    return {
        type: types.RECEIVE_ADD_PROJECT,
        added: addedProject,
        receivedAt: Date.now(),
    }
}

/* GET_PROJECT */

export function requestProject() {
    return { type: types.REQUEST_GET_PROJECT }
}

export function errorProject(error) {
    return { type: types.ERROR_GET_PROJECT, error }
}

export function receiveProject(selectedProject) {
    return {
        type: types.RECEIVE_GET_PROJECT,
        selected: selectedProject,
        receivedAt: Date.now(),
    }
}

/* UPDATE_PROJECT */

export function requestUpdateProject() {
    return { type: types.REQUEST_UPDATE_PROJECT }
}

export function errorUpdateProject(error) {
    return { type: types.ERROR_UPDATE_PROJECT, error }
}

export function receiveUpdateProject(updated, original) {
    return {
        type: types.RECEIVE_UPDATE_PROJECT,
        updated: updated,
        original: original,
        receivedAt: Date.now(),
    }
}

/* DELETE_PROJECT */

export function requestDeleteProject() {
    return { type: types.REQUEST_DELETE_PROJECT }
}

export function errorDeleteProject(error) {
    return { type: types.ERROR_DELETE_PROJECT, error }
}

export function receiveDeleteProject(deletedProject) {
    return {
        type: types.RECEIVE_DELETE_PROJECT,
        deleted: deletedProject,
        receivedAt: Date.now(),
    }
}

/*
 * Slide actions
 */

/* GET_SLIDES */

export function requestSlides() {
    return { type: types.REQUEST_GET_SLIDES }
}

export function errorSlides(error) {
    return { type: types.ERROR_GET_SLIDES, error }
}

export function receiveSlides(slides) {
    return {
        type: types.RECEIVE_GET_SLIDES,
        slides: slides,
        receivedAt: Date.now(),
    }
}

/* ADD_SLIDE */

export function requestAddSlide() {
    return { type: types.REQUEST_ADD_SLIDE }
}

export function errorAddSlide(error) {
    return { type: types.ERROR_ADD_SLIDE, error }
}

export function receiveAddSlide(addedSlide) {
    return {
        type: types.RECEIVE_ADD_SLIDE,
        added: addedSlide,
        receivedAt: Date.now(),
    }
}

/* GET_SLIDE */

export function requestSlide() {
    return { type: types.REQUEST_GET_SLIDE }
}

export function errorSlide(error) {
    return { type: types.ERROR_GET_SLIDE, error }
}

export function receiveSlide(slide) {
    return {
        type: types.RECEIVE_GET_SLIDE,
        selected: slide,
        receivedAt: Date.now(),
    }
}

/* UPDATE_SLIDE */

export function requestUpdateSlide() {
    return { type: types.REQUEST_UPDATE_SLIDE }
}

export function errorUpdateSlide(error) {
    return { type: types.ERROR_UPDATE_SLIDE, error }
}

export function receiveUpdateSlide(updated, original) {
    return {
        type: types.RECEIVE_UPDATE_SLIDE,
        updated: updated,
        original: original,
        receivedAt: Date.now(),
    }
}

/* DELETE_SLIDE */

export function requestDeleteSlide() {
    return { type: types.REQUEST_DELETE_SLIDE }
}

export function errorDeleteSlide(error) {
    return { type: types.ERROR_DELETE_SLIDE, error }
}

export function receiveDeleteSlide(deletedSlide) {
    return {
        type: types.RECEIVE_DELETE_SLIDE,
        deleted: deletedSlide,
        receivedAt: Date.now(),
    }
}
