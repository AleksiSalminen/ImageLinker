import React from 'react';
import MainEditingView from './main_editing_view/MainEditingView.js';


/**
 * Function that returns the main Slide Linker view
 * @param {Object} props received parameters
 */
function SlideLinker(props) {
  console.log(props.selectedProjectInfo);
  
  return (
    <div>
      <MainEditingView
        selectedProjectInfo = {props.selectedProjectInfo}
        changeSelectedProject = {props.changeSelectedProject}
      />
    </div>
  );
}

export default SlideLinker;
