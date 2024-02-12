import React from "react"
import TopBar from "../../components/top_bar/TopBar"
import LoginButton from "../../components/top_bar/profile_menu/LoginButton"
import RegisterButton from "../../components/top_bar/profile_menu/RegisterButton"
import ProfileMenu from "../../components/top_bar/profile_menu/ProfileMenu"
import SettingsMenu from "../../components/top_bar/settings_menu/SettingsMenu"

export default {
    title: "Components/Top Bar",
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
    fetchUserLogin: (user) => {
        console.log(`username: ${user.userName}, password: ${user.password}`)
    },
    fetchUserRegister: (user) => {
        console.log(`username: ${user.userName}, email: ${user.email}, password: ${user.password}`)
    },
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
                handleThemeChange: () => console.log("Change theme"),
            },
            font: {
                font: "Arial",
                setFont: (font) => console.log(`Change font: ${font}`),
                fontSize: 15,
                setFontSize: (fontSize) => console.log(`Change font size: ${fontSize}`),
            },
            language: {
                english: "en",
                finnish: "fi",
                language: "en",
                setLanguage: () => {},
            },
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
    addProject: () => {
        console.log("Add project")
        return new Promise((resolve, reject) => resolve())
    },
    changeSelectedProject: () => {},
    updateSlides: () => {},
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
                handleThemeChange: () => console.log("Change theme"),
            },
            font: {
                font: "Arial",
                setFont: (font) => console.log(`Change font: ${font}`),
                fontSize: 15,
                setFontSize: (fontSize) => console.log(`Change font size: ${fontSize}`),
            },
            language: {
                english: "en",
                finnish: "fi",
                language: "en",
                setLanguage: () => {},
            },
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
                handleThemeChange: () => console.log("Change theme"),
            },
            font: {
                font: "Arial",
                setFont: (font) => console.log(`Change font: ${font}`),
                fontSize: 15,
                setFontSize: (fontSize) => console.log(`Change font size: ${fontSize}`),
            },
            language: {
                english: "en",
                finnish: "fi",
                language: "en",
                setLanguage: () => {},
            },
            colors: {},
        },
    ],
}
