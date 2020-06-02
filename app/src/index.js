import React from 'react';
import ReactDOM from 'react-dom';
import SlideLinker from './SlideLinker.js';
import store from './state/reducers/mainReducers.js';
import { connect, Provider } from 'react-redux';

console.log(store.getState());

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
