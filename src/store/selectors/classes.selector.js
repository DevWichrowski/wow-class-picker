
import { createSelector } from 'reselect';

const selectRaces = state => state.classes;

export const getClassesSelector = createSelector(
    selectRaces,
    state => state.classes
);