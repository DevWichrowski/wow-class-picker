import { combineReducers } from 'redux';
import { classesReducer } from "./classesReducer";

export const rootReducer = combineReducers({
	classes: classesReducer,
});