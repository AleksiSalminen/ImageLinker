import React from 'react';
import ReactDOM from 'react-dom';
import SlideLinker from './SlideLinker.js';
import store from './state/reducers/mainReducers.js';
import { connect, Provider } from 'react-redux';


/*
* Redux store mapping to React components
*/

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    projects: state.projectList.projects
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
