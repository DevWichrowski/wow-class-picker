
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

export const getIsTankSelector = createSelector(
    selectRaces,
    state => state.isTank
);

export const getIsRangedDps = createSelector(
    selectRaces,
    state => state.isRangedDps
);

export const getIsMeleeDps = createSelector(
    selectRaces,
    state => state.isMeleeDps
);

export const getIsHealer = createSelector(
    selectRaces,
    state => state.isHealer
);