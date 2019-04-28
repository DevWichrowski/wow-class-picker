
import { createSelector } from 'reselect';

const selectRaces = state => state.races;

export const getRacesSelector = createSelector(
    selectRaces,
    state => state.races
);

export const getAdvancedModeSelector = createSelector(
    selectRaces,
    state => state.advancedMode
);