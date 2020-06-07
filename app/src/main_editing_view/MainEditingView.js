import React from 'react';

import TopBar from './TopBar.js';
import ProjectTitleArea from './ProjectTitleArea.js';
import SlidesTable from './SlidesTable.js';


/**
 * Function that returns the view for the main editing area of projects
 * @param {Object} props received parameters
 */
function MainEditingView(props) {
    const selectedProject = props.selectedProjectInfo.selected;
    const projectName = (selectedProject ? selectedProject.name : "(Create or open a project)");


    return (
        <div>

            <TopBar changeSelectedProject={props.changeSelectedProject}/>

            <br/>
            
            <ProjectTitleArea projectName={projectName}/>

            <br/><br/>

            <SlidesTable slides={(selectedProject ? selectedProject.slides : [])} />

        </div>
    );
}

export default MainEditingView;
