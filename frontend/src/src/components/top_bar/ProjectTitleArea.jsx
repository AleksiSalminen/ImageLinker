import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';


/**
 * Function that returns the view for the project title area
 * @param {Object} props received parameters
 */
function ProjectTitleArea(props) {
    const { t } = useTranslation();

    if(props.projectName) {
        return (
            <div>
                <Typography variant="h4" align="center">
                    {props.projectName}&nbsp;
                    <Button variant="contained" size="small">{t("ProjectTitle.ChangeButton")}</Button>
                </Typography>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}

export default ProjectTitleArea;
