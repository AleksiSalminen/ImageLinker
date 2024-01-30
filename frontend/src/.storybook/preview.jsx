import { Suspense, useEffect } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { I18nextProvider } from "react-i18next"
import i18n from "../src/i18n"

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        layout: "fullscreen"
    }
}

/*
 * Global variable called locale in StoryBook
 * Add a menu in the toolbar to change your locale
 */
export const globalTypes = {
    locale: {
        name: "Locale",
        description: "Change language",
        toolbar: {
            icon: "globe",
            items: [
                { value: "fi", title: "Suomi" },
                { value: "en", title: "English" }
            ],
            showName: true
        }
    }
}

export const decorators = [
    (Story, context) => {
        const { locale } = context.globals

        // When the locale global changes set the new locale in i18n
        useEffect(() => {
            i18n.changeLanguage(locale)
        }, [locale])

        return (
            <Suspense fallback={"Loading.."}>
                <I18nextProvider i18n={i18n}>
                    <CssBaseline />
                    <Story />
                </I18nextProvider>
            </Suspense>
        )
    }
]

export default preview
