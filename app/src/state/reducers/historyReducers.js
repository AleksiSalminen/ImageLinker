import { combineReducers } from "redux";

import * as types from "../action_types/historyTypes.js";


/* -------------------------- */

const pastOperations = (state = initialUndoState, action) => {
    switch (action.type) {
        case types.UPDATE_UNDO_STACK:
            return {
                undoStack: action.newUndoStack
            };
        default:
            return state;
    }
}

const initialUndoState = {
    undoStack: []
}

/* -------------------------- */

const futureOperations = (state = initialRedoState, action) => {
    switch (action.type) {
        case types.UPDATE_REDO_STACK:
            return {
                redoStack: action.newRedoStack
            };
        default:
            return state;
    }
}

const initialRedoState = {
    redoStack: []
}

/* -------------------------- */

const lastOperation = (state = initialLastOperation, action) => {
    switch (action.type) {
        case types.UPDATE_LAST_OPERATION:
            return {
                lastOperation: action.newOperation
            };
        default:
            return state;
    }
}

const initialLastOperation = {
    lastOperation: { operation: null, value: null }
}

/* -------------------------- */

export const operationsHistory = combineReducers({
    pastOperations,
    futureOperations,
    lastOperation
});
