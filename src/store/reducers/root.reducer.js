import filterReducer from "./filter.reducer";
import taskReducer from "./task.reducer";
import { combineReducers } from "redux";

const todoApp = combineReducers({ filter: filterReducer, tasks: taskReducer });

export default todoApp;
