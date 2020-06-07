import React from 'react';

import TopBar from './TopBar.js';
import WelcomeView from './WelcomeView.js';
import ProjectTitleArea from './ProjectTitleArea.js';
import SlidesTable from './SlidesTable.js';


/**
 * Function that returns the view for the main editing area of projects
 * @param {Object} props received parameters
 */
function MainEditingView(props) {
    const selectedProject = props.selectedProjectInfo.selected;

    if(selectedProject) {

        return (
            <div>
    
                <TopBar changeSelectedProject={props.changeSelectedProject}/>
    
                <br/>
                
                <ProjectTitleArea projectName={selectedProject.name}/>
    
                <br/><br/>
    
                <SlidesTable slides={selectedProject.slides} />
    
            </div>
        );
    }
    else {

        return(
            <div>
                <TopBar changeSelectedProject={props.changeSelectedProject}/>
    
                <br/><br/>

                <WelcomeView/>
            </div>
        );
    }

}

export default MainEditingView;
