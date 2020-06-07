import React from 'react';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the button for opening a project
 * @param {Object} props received parameters
 */
function OpenProjectButton(props) {

    const changeProject = (file) => {
        if(file) {
            let reader = new FileReader();
            reader.onload = function() {
                const project = JSON.parse(this.result);
                props.changeSelectedProject(project);
            };
            reader.readAsText(file);
        }
    }

    return (
        <Button variant="contained" component="label" color="primary">
            Open
            <input type="file" style={{ display: "none" }} onChange={(event) => {changeProject(event.target.files[0])}}/>
        </Button>
    );
}

export default OpenProjectButton;
