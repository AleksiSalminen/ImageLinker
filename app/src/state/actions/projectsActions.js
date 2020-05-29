import * as types from "../action_types/projectsTypes.js";

/*
* Here the actions for projects and projects' slides are defined
*/


/*
* Project actions
*/

/* GET_PROJECTS */

export function requestProjects() {
    return { type: types.REQUEST_GET_PROJECTS };
}

export function errorProjects(error) {
    return { type: types.ERROR_GET_PROJECTS, error };
}

export function receiveProjects(projectsJson) {
    return {
        type: types.RECEIVE_GET_PROJECTS,
        projects: projectsJson,
        receivedAt: Date.now()
    };
}

/* ADD_PROJECT */

export function requestAddProject() {
    return { type: types.REQUEST_ADD_PROJECT };
}

export function errorAddProject(error) {
    return { type: types.ERROR_ADD_PROJECT, error };
}

export function receiveAddProject(addedProject) {
    return {
        type: types.RECEIVE_ADD_PROJECT,
        added: addedProject,
        receivedAt: Date.now()
    };
}

/* GET_PROJECT */

export function requestGetProject() {
    return { type: types.REQUEST_GET_PROJECT };
}

export function errorGetProject(error) {
    return { type: types.ERROR_GET_PROJECT, error };
}

export function receiveGetProject(selectedProject) {
    return {
        type: types.RECEIVE_GET_PROJECT,
        selected: selectedProject,
        receivedAt: Date.now()
    };
}

/* UPDATE_PROJECT */

export function requestUpdateProject() {
    return { type: types.REQUEST_UPDATE_PROJECT };
}

export function errorUpdateProject(error) {
    return { type: types.ERROR_UPDATE_PROJECT, error };
}

export function receiveUpdateProject(updated, original) {
    return {
        type: types.RECEIVE_UPDATE_PROJECT,
        updated: updated,
        original: original,
        receivedAt: Date.now()
    };
}

/* DELETE_PROJECT */

export function requestDeleteProject() {
    return { type: types.REQUEST_DELETE_PROJECT };
}

export function errorDeleteProject(error) {
    return { type: types.ERROR_DELETE_PROJECT, error };
}

export function receiveDeleteProject(deletedProject) {
    return {
        type: types.RECEIVE_DELETE_PROJECT,
        deleted: deletedProject,
        receivedAt: Date.now()
    };
}


/*
* Slide actions
*/

