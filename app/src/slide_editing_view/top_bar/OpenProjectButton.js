import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';


/**
 * Function that returns the button for opening a project
 * @param {Object} props received parameters
 */
function OpenProjectButton(props) {
    const { t } = useTranslation();

    const changeProject = (file) => {
        if(file) {
            let reader = new FileReader();
            reader.onload = function() {
                let project = JSON.parse(this.result);
                const slides = project.slides;
                delete project["slides"];
                props.changeSelectedProject(project);
                props.updateSlides(slides);
            };
            reader.readAsText(file);
        }
    }

    return (
        <Button variant="contained" component="label" color="primary" style={{margin:"0.25rem"}}>
            {t("TopBar.OpenButton")}
            <input type="file" style={{ display: "none" }} onChange={(event) => {changeProject(event.target.files[0])}}/>
        </Button>
    );
}

export default OpenProjectButton;
