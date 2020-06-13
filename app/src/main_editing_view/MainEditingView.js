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
                    changeSelectedProject={props.changeSelectedProject}
                    updateSlides={props.updateSlides}
                    darkState={props.darkState}
                    handleThemeChange={props.handleThemeChange}
                    font={props.font}
                    setFont={props.setFont}
                    fontSize={props.fontSize}
                    setFontSize={props.setFontSize}
                    projectName={selectedProject.name}
                />
    
                <br/><br/>
    
                <SlidesTable
                    slides={props.slides}
                    updateSlides={props.updateSlides}
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
                    darkState={props.darkState}
                    handleThemeChange={props.handleThemeChange}
                    font={props.font}
                    setFont={props.setFont}
                    fontSize={props.fontSize}
                    setFontSize={props.setFontSize}
                />
    
                <br/><br/><br/>

                <WelcomeView/>
                <br/><br/>
            </div>
        );
    }

}

export default MainEditingView;
