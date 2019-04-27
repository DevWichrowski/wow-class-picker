import { combineReducers } from 'redux';
import { racesReducer } from './racesReducer';

export const rootReducer = combineReducers({
	races: racesReducer
});
