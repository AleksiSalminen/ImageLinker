import * as actions from "../actions/projectsActions.js"
import store from "../reducers/mainReducers.js"

const PROJECTS_URL = "http://localhost/api/projects"

export function fetchAddProject(token, project) {
    const url = PROJECTS_URL + "/new"
    const newProjectJSON = {
        interface: project.uiSettings,
    }

    return (dispatch) => {
        store.dispatch(actions.requestAddProject())
        return fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
            body: JSON.stringify(newProjectJSON),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((project) => {
                const addedProject = {
                    id: project.id,
                    name: project.name,
                    startID: project.startID,
                }

                store.dispatch(actions.receiveAddProject(addedProject))
                store.dispatch(actions.receiveProject(addedProject))
                store.dispatch(actions.receiveSlides([]))

                const uiSettings = project.uiSettings

                return
            })
            .catch((error) => {
                store.dispatch(actions.errorAddProject(error))
                return Error(error)
            })
    }
}

export function fetchGetOwnProjects(token) {
    const url = PROJECTS_URL + "/my"

    return (dispatch) => {
        store.dispatch(actions.requestGetOwnProjects())
        return fetch(url, {
            method: "GET",
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
            .then((projects) => {
                store.dispatch(actions.receiveGetOwnProjects(projects))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorGetOwnProjects(error))
                return Error(error)
            })
    }
}

export function fetchGetProjectSlides(token, projectID) {
    const url = PROJECTS_URL + "/" + projectID + "/slides"

    return (dispatch) => {
        store.dispatch(actions.requestSlides())
        return fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
            params: { id: projectID },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((slides) => {
                store.dispatch(actions.receiveSlides(slides))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorSlides(error))
                return Error(error)
            })
    }
}

export function fetchUpdateProject(token, project) {
    const url = PROJECTS_URL + "/" + project.id

    return (dispatch) => {
        store.dispatch(actions.requestUpdateProject())
        return fetch(url, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
            params: { id: project.id },
            body: JSON.stringify(project),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((updated) => {
                store.dispatch(actions.receiveUpdateProject(updated, null))
                store.dispatch(actions.receiveProject(updated))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorUpdateProject(error))
                return Error(error)
            })
    }
}

export function fetchDeleteProject(token, projectID) {
    const url = PROJECTS_URL + "/" + projectID

    return (dispatch) => {
        store.dispatch(actions.requestDeleteProject())
        return fetch(url, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
            params: { id: projectID },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((deleted) => {
                store.dispatch(actions.receiveDeleteProject(deleted))
                store.dispatch(actions.receiveProject(null))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorDeleteProject(error))
                return Error(error)
            })
    }
}

export function fetchAddSlide(token, projectID, slide) {
    const url = PROJECTS_URL + "/" + projectID + "/slides"

    return (dispatch) => {
        store.dispatch(actions.requestAddSlide())
        return fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
            params: { id: projectID },
            body: JSON.stringify(slide),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((slide) => {
                store.dispatch(actions.receiveAddSlide(slide))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorAddSlide(error))
                return Error(error)
            })
    }
}

export function fetchUpdateSlide(token, projectID, slide) {
    const url = PROJECTS_URL + "/" + projectID + "/slides/" + slide.id

    return (dispatch) => {
        store.dispatch(actions.requestUpdateSlide())
        return fetch(url, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
            params: { projectID: projectID, slideID: slide.id },
            body: JSON.stringify(slide),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((slide) => {
                store.dispatch(actions.receiveUpdateSlide(slide))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorUpdateSlide(error))
                return Error(error)
            })
    }
}

export function fetchDeleteSlide(token, projectID, slideID) {
    const url = PROJECTS_URL + "/" + projectID + "/slides/" + slideID

    return (dispatch) => {
        store.dispatch(actions.requestDeleteSlide())
        return fetch(url, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }),
            params: { projectID: projectID, slideID: slideID },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(`Request rejected with status ${response.status}`)
                }
            })
            .then((deletedSlide) => {
                store.dispatch(actions.receiveDeleteSlide(deletedSlide))
                return
            })
            .catch((error) => {
                store.dispatch(actions.errorDeleteSlide(error))
                return Error(error)
            })
    }
}
