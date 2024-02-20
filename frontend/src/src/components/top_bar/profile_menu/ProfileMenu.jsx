import React from "react"
import { useTranslation } from "react-i18next"

import LoginButton from "./LoginButton.jsx"
import RegisterButton from "./RegisterButton.jsx"
import ProfileSettingsButton from "./ProfileSettingsButton.jsx"

/**
 * Function that returns the profile menu component
 * @param {Object} props received parameters
 */
function ProfileMenu(props) {
    const { t } = useTranslation()

    if (props.token) {
        return (
            <ProfileSettingsButton
                logout={props.logout}
                unregister={props.unregister}
                token={props.token}
                fetchOwnInfo={props.fetchOwnInfo}
                ownInfo={props.ownInfo}
                updateOwnInfo={props.updateOwnInfo}
            />
        )
    } else {
        return (
            <>
                <LoginButton fetchUserLogin={props.fetchUserLogin} />

                <RegisterButton fetchUserRegister={props.fetchUserRegister} />
            </>
        )
    }
}

export default ProfileMenu
