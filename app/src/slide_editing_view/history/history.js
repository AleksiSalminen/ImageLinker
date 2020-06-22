import React from 'react';
import Button from '@material-ui/core/Button';


let undoStack = [];
let redoStack = [];
let lastOperation = {operation: null, value: null}

export const addOperation = (operation, newValue, oldValue) => {
    undoStack.push({operation: operation, value: oldValue});
    lastOperation = {operation: operation, value: newValue}
}

const undo = () => {
    redoStack.push(lastOperation);
    lastOperation = undoStack.pop();
    lastOperation.operation(lastOperation.value);
}

const redo = () => {
    undoStack.push(lastOperation);
    lastOperation = redoStack.pop();
    lastOperation.operation(lastOperation.value);
}


/**
 * Function that returns the undo button component
 * @param {Object} props received parameters
 */
export function UndoButton(props) {

    return (
        <Button variant="outlined" style={{ margin:"0.25rem" }} onClick={undo}>
            Undo
        </Button>
    );
}

/**
 * Function that returns the redo button component
 * @param {Object} props received parameters
 */
export function RedoButton(props) {

    return (
        <Button variant="outlined" style={{ margin:"0.25rem" }} onClick={redo}>
            Redo
        </Button>
    );
}
