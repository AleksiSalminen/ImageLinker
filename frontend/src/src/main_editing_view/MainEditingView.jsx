import React from 'react';

import TopBar from './top_bar/TopBar';
import WelcomeView from './welcome_view/WelcomeView';
import SlidesTable from './slides_table/SlidesTable';


/**
 * Function that returns the view for the main editing area of projects
 * @param {Object} props received parameters
 */
function MainEditingView(props) {
    const selectedProject = props.selectedProjectInfo?.selected;
    
    /** If the user has already opened a project, then return the editing view.
    Otherwise, return the welcome view */
    if(selectedProject) {
        return (
            <div>
                <TopBar
                    activeViewSettings={props.activeViewSettings}

                    selectedProject={selectedProject}
                    changeSelectedProject={props.changeSelectedProject}
                    updateSlides={props.updateSlides}
                    projectName={selectedProject.name}

                    interfaceSettings={props.interfaceSettings}
                />
    
                <br/><br/>
    
                <SlidesTable
                    activeViewSettings={props.activeViewSettings}

                    slides={props.slides}
                    updateSlides={props.updateSlides}
                    selectSlide={props.selectSlide}
                />
                <br/><br/>
            </div>
        );
    }
    else {
        return(
            <div>
                <TopBar
                    changeSelectedProject={props.changeSelectedProject}
                    updateSlides={props.updateSlides}
                    interfaceSettings={props.interfaceSettings}
                />
    
                <br/><br/><br/>

                <WelcomeView/>
                <br/><br/>
            </div>
        );
    }

}

export default MainEditingView;
