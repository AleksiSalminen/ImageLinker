import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';


/**
 * Function that returns the view for the welcome area
 * @param {Object} props received parameters
 */
function WelcomeView(props) {
    const { t } = useTranslation();

    return (
        <div>
            <Typography variant="h3" align="center">
                {t("Welcome.WelcomeTo")}
            </Typography>

            <br/><br/><br/>

            <Typography variant="h5" align="center">
                {t("Welcome.SelectNew")}
            </Typography>

            <br/>

            <Typography variant="h5" align="center">
                {t("Welcome.SelectOpen")}
            </Typography>

            <br/>

            <Typography variant="h5" align="center">
                {t("Welcome.SelectPlay")}
            </Typography>

            <br/>

            <Typography variant="h5" align="center">
                {t("Welcome.SelectSettings")}
            </Typography>
        </div>
    );
}

export default WelcomeView;
