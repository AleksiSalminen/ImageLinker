import * as types from "../action_types/themeTypes.js"

/*
 * Here the actions for themes are defined
 */

export function changeFontType() {
    return { type: types.CHANGE_FONT_TYPE }
}

export function changeFontSize() {
    return { type: types.CHANGE_FONT_SIZE }
}

export function changePrimaryColor() {
    return { type: types.CHANGE_PRIMARY_COLOR }
}

export function changeSecondaryColor() {
    return { type: types.CHANGE_SECONDARY_COLOR }
}
