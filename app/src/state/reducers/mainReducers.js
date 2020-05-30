import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import { projectList, addedProject, selectedProject, updatedProject, deletedProject } from "./projectsReducers.js";


const rootReducer = combineReducers({
  projectList,
  addedProject,
  selectedProject,
  updatedProject,
  deletedProject
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    ReduxThunk
  )
);

export default store;
