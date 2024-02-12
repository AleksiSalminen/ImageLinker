import React from "react"
import TopBar from "../../components/top_bar/TopBar"
import LoginButton from "../../components/top_bar/profile_menu/LoginButton"
import RegisterButton from "../../components/top_bar/profile_menu/RegisterButton"
import ProfileMenu from "../../components/top_bar/profile_menu/ProfileMenu"
import SettingsMenu from "../../components/top_bar/settings_menu/SettingsMenu"

export default {
    title: "Components/Top Bar",
    decorators: [(Story) => <Story />],
    argTypes: {
        activeViewSettings: {
            setActiveView: { action: "() => {}" },
            MAIN_EDITING_VIEW: { control: "text" },
            SLIDE_EDITING_VIEW: { control: "text" },
            PRESENTATION_VIEW: { control: "text" },
        },
        selectedProjectInfo: {
            selected: { control: "object" },
            isFetching: { control: "boolean" },
            receivedAt: { control: "date" },
            error: { control: "text" },
        },
        changeSelectedProject: { action: "() => {}" },
        updateSlides: { action: "() => {}" },
        interfaceSettings: {
            theme: { control: "object" },
            font: { control: "object" },
            language: { control: "object" },
            colors: { control: "object" },
        },
        slides: { control: "array" },
        selectSlide: { action: "() => {}" },
    },
}

export const Logged_out = (props) => <TopBar {...props} />
Logged_out.args = {
    selectedProjectInfo: {
        selected: {},
        isFetching: false,
        receivedAt: new Date(),
        error: undefined,
    },
    changeSelectedProject: () => {},
    updateSlides: () => {},
    interfaceSettings: [
        {
            theme: {
                palette: {
                    mode: "light",
                    primary: {
                        main: "red",
                    },
                    secondary: {
                        main: "green",
                    },
                },
                typography: {
                    fontFamily: "Arial",
                    fontSize: 15,
                },
            },
            font: { fontSize: 15 },
            fontSize: 15,
            language: {},
            colors: {},
        },
    ],
}

export const Logged_in = (props) => <TopBar {...props} />
Logged_in.args = {
    token: "ui3g3w8tywoth4wt84owyiw.w4yuwi8tyi8ty",
    selectedProjectInfo: {
        selected: {},
        isFetching: false,
        receivedAt: new Date(),
        error: undefined,
    },
    changeSelectedProject: () => {},
    updateSlides: () => {},
    interfaceSettings: [
        {
            theme: {
                palette: {
                    mode: "light",
                    primary: {
                        main: "red",
                    },
                    secondary: {
                        main: "green",
                    },
                },
                typography: {
                    fontFamily: "Arial",
                    fontSize: 15,
                },
            },
            font: { fontSize: 15 },
            fontSize: 15,
            language: {},
            colors: {},
        },
    ],
}

export const Login_button = (props) => <LoginButton {...props} />
Login_button.args = {
    fetchUserLogin: (user) => {
        console.log(`username: ${user.userName}, password: ${user.password}`)
    },
}

export const Register_button = (props) => <RegisterButton {...props} />
Register_button.args = {
    fetchUserRegister: (user) => {
        console.log(`username: ${user.userName}, email: ${user.email}, password: ${user.password}`)
    },
}

export const Profile_menu = (props) => <ProfileMenu {...props} />
Profile_menu.args = {
    token: "ui3g3w8tywoth4wt84owyiw.w4yuwi8tyi8ty",
    ownInfo: {
        userName: "TestUser",
        password: "test",
    },
    fetchOwnInfo: () => {
        return new Promise((resolve, reject) => resolve())
    },
    updateOwnInfo: (user) => {
        console.log(`Update info - username: ${user.userName}, password: ${user.password}`)
        return new Promise((resolve, reject) => resolve())
    },
    unregister: () => console.log("Unregister"),
    logout: () => console.log("Logout"),
}

export const Settings_menu = (props) => <SettingsMenu {...props} />
Settings_menu.args = {
    interfaceSettings: [
        {
            theme: {
                palette: {
                    mode: "light",
                    primary: {
                        main: "red",
                    },
                    secondary: {
                        main: "green",
                    },
                },
                typography: {
                    fontFamily: "Arial",
                    fontSize: 15,
                },
            },
            font: { fontSize: 15 },
            fontSize: 15,
            language: {},
            colors: {},
        },
    ],
}
