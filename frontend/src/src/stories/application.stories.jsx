import React from "react"
import Slidelinker from "../Slidelinker"

export default {
    title: "Application",
    decorators: [
        (Story) => (
            <Story />
        )
    ]
}

export const EmptyEntrypoint = () => <>Entrypoint Story</>

export const Application = (props) => <Slidelinker {...props} />

