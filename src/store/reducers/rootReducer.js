import { combineReducers } from 'redux';
import { racesReducer } from './racesReducer';
import { classesReducer } from './classesReducer';

export const rootReducer = combineReducers({
	races: racesReducer,
	classes: classesReducer
});
