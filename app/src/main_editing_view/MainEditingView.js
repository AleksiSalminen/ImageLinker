import React from 'react';

import TopBar from './top_bar/TopBar.js';
import WelcomeView from './welcome_view/WelcomeView.js';
import SlidesTable from './slides_table/SlidesTable.js';


/**
 * Function that returns the view for the main editing area of projects
 * @param {Object} props received parameters
 */
function MainEditingView(props) {
    const selectedProject = props.selectedProjectInfo.selected;
    
    if(selectedProject) {

        return (
            <div>
                <TopBar
                    setActiveView={props.setActiveView}
                    MAIN_EDITING_VIEW={props.MAIN_EDITING_VIEW}
                    SLIDE_EDITING_VIEW={props.SLIDE_EDITING_VIEW}
                    PRESENTATION_VIEW={props.PRESENTATION_VIEW}
                    selectedProject={selectedProject}
                    changeSelectedProject={props.changeSelectedProject}
                    updateSlides={props.updateSlides}
                    projectName={selectedProject.name}
                    interfaceSettings={props.interfaceSettings}
                />
    
                <br/><br/>
    
                <SlidesTable
                    setActiveView={props.setActiveView}
                    MAIN_EDITING_VIEW={props.MAIN_EDITING_VIEW}
                    SLIDE_EDITING_VIEW={props.SLIDE_EDITING_VIEW}
                    PRESENTATION_VIEW={props.PRESENTATION_VIEW}

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
