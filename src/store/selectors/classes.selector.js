import {createSelector} from 'reselect';

const selectClasses = state => state.classes;

export const getClassesSelector = createSelector(
    selectClasses,
    state => state.classes
);

export const getClassicClassesSelector = createSelector(
    selectClasses,
    state => state.classicClasses
);