import React from 'react';
import ReactDOM from 'react-dom';
import SlideLinker from './SlideLinker.js';
import store from './state/reducers/mainReducers.js';
import * as actions from './state/actions/projectsActions.js';
import { connect, Provider } from 'react-redux';


/*
* Redux store mapping to React components
*/

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    projects: state.projectList.projects,
    selectedProjectInfo: state.selectedProject.selectedProjectInfo
  };
}

// Map Redux actions to component props
const mapDispatchToProps = {
  changeSelectedProject: (project) => store.dispatch(actions.receiveProject(project)),
};

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(SlideLinker);


// Rendering here
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
