import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import { projectList, addedProject, selectedProject, updatedProject, deletedProject } from "./projectsReducers.js";
import { operationsHistory } from "./historyReducers.js";


const rootReducer = combineReducers({
  projectList,
  addedProject,
  selectedProject,
  updatedProject,
  deletedProject,
  operationsHistory
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    ReduxThunk
  )
);

export default store;
