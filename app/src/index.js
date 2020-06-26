import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import SlideLinker from './SlideLinker.js';
import store from './state/reducers/mainReducers.js';
import * as actions from './state/actions/projectsActions.js';
import { connect, Provider } from 'react-redux';
import './i18n';


/*
* Redux store mapping to React components
*/

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    projects: state.projectList.projects,
    selectedProjectInfo: state.selectedProject.selectedProjectInfo,
    slides: state.selectedProject.slideList.slides,
    selectedSlide: state.selectedProject.selectedSlide.selected,
  };
}

// Map Redux actions to component props
const mapDispatchToProps = {
  changeSelectedProject: (project) => store.dispatch(actions.receiveProject(project)),
  updateSlides: (slides) => store.dispatch(actions.receiveSlides(slides)),
  selectSlide: (slide) => store.dispatch(actions.receiveSlide(slide))
};

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(SlideLinker);


// Rendering here
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div></div>)}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
