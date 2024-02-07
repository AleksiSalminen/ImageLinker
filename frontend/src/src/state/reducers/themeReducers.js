import * as types from "../action_types/themeTypes.js"

/*
 * This is where the reducers related to themes are defined
 */

/* -------------------------- */

export function theme(state = initialThemeState, action) {
    switch (action.type) {
        case types.CHANGE_FONT_TYPE:
            return {
                ...state,
                typography: {
                    fontFamily: "Arial",
                    fontSize: 20,
                },
            }
        case types.CHANGE_FONT_SIZE:
            return {
                ...state,
                typography: {
                    fontFamily: "Gabriola",
                    fontSize: 15,
                },
            }
        case types.CHANGE_PRIMARY_COLOR:
            return {
                ...state,
                palette: {
                    mode: palletType,
                    primary: {
                        main: "#977F55",
                    },
                    secondary: {
                        main: "#D1AF74",
                    },
                },
            }
        case types.CHANGE_SECONDARY_COLOR:
            return {
                ...state,
                palette: {
                    mode: palletType,
                    primary: {
                        main: "#977F55",
                    },
                    secondary: {
                        main: "#D1AF74",
                    },
                },
            }
        default:
            return state
    }
}

const initialThemeState = {
    palette: {
        mode: palletType,
        primary: {
            main: "#977F55",
        },
        secondary: {
            main: "#D1AF74",
        },
    },
    typography: {
        fontFamily: "Gabriola",
        fontSize: 20,
    },
}
