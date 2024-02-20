import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useHotkeys } from "react-hotkeys-hook"
import Button from "@mui/material/Button"

/**
 * Function that returns the undo button component
 * @param {Object} props received parameters
 */
export function UndoButton(props) {
    const { t } = useTranslation()

    useHotkeys("ctrl+z", (event) => {
        event.preventDefault()
        undo()
    })

    let undoStack = props.history.undoStack
    let redoStack = props.history.redoStack
    let lastOperation = props.history.lastOperation

    const [disabled, setDisabled] = useState(undoStack.length === 0)

    if (disabled && undoStack.length > 0) {
        setDisabled(false)
    } else if (!disabled && undoStack.length === 0) {
        setDisabled(true)
    }

    /** Function that performs the undo operation */
    const undo = () => {
        if (undoStack.length > 0) {
            props.history.setRedoStack(redoStack.concat(lastOperation))
            props.history.setLastOperation(undoStack.pop())
            lastOperation.operation(lastOperation.value)
        }
    }

    return (
        <Button variant="outlined" disabled={disabled} style={{ margin: "0.25rem" }} onClick={undo}>
            {t("TopBar.UndoButton")}
        </Button>
    )
}

/**
 * Function that returns the redo button component
 * @param {Object} props received parameters
 */
export function RedoButton(props) {
    const { t } = useTranslation()

    useHotkeys("ctrl+y", (event) => {
        event.preventDefault()
        redo()
    })

    let undoStack = props.history.undoStack
    let redoStack = props.history.redoStack
    let lastOperation = props.history.lastOperation

    const [disabled, setDisabled] = useState(redoStack.length === 0)

    if (disabled && redoStack.length > 0) {
        setDisabled(false)
    } else if (!disabled && redoStack.length === 0) {
        setDisabled(true)
    }

    /** Function that performs the redo operation */
    const redo = () => {
        if (redoStack.length > 0) {
            props.history.setUndoStack(undoStack.concat(lastOperation))
            props.history.setLastOperation(redoStack.pop())
            lastOperation.operation(lastOperation.value)
        }
    }

    return (
        <Button variant="outlined" disabled={disabled} style={{ margin: "0.25rem" }} onClick={redo}>
            {t("TopBar.RedoButton")}
        </Button>
    )
}
