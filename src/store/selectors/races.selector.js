
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

export const getFactionHordeSelector = createSelector(
    selectRaces,
    state => state.factionHorde
);

export const getFactionAllianceSelector = createSelector(
    selectRaces,
    state => state.factionAlliance
);