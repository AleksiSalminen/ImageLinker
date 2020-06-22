import * as types from "../action_types/historyTypes.js";

/*
* Here the actions related to operation history
* in slide editing view are defined
*/

export function updateUndoStack(newUndoStack) {
    return { type: types.UPDATE_UNDO_STACK, newUndoStack };
}

export function updateRedoStack(newRedoStack) {
    return { type: types.UPDATE_REDO_STACK, newRedoStack };
}

export function updateLastOperation(newOperation) {
    return { type: types.UPDATE_LAST_OPERATION, newOperation };
}
