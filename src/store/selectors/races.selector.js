import {createSelector} from 'reselect';
import { cloneDeep } from 'lodash';

const selectRaces = state => state.races;
const getFilterAdvancedMode = state => state.races.advancedMode;
const getFilterAlliance = state => state.races.factionAlliance;
const getFilterHorde = state => state.races.factionHorde;
const getFilterTank = state => state.races.isTank;
const getFilterRangedDps = state => state.races.isRangedDps;
const getFilterMeleeDps = state => state.races.isMeleeDps;
const getFilterHealer = state => state.races.isHealer;
const getRaces = state => state.races.races;

export const getFilteredRaces = createSelector(
    [
        getFilterAdvancedMode,
        getFilterAlliance,
        getFilterHorde,
        getFilterTank,
        getFilterRangedDps,
        getFilterMeleeDps,
        getFilterHealer,
        getRaces,
    ],
    (advancedMode, alliance, horde, tank, rangedDps, meleeDps, healer, races) => {
        if (
            alliance === false &&
            horde === false &&
            tank === false &&
            rangedDps === false &&
            meleeDps === false &&
            healer === false
        ) {
            return races;
        }

        let _races = cloneDeep(races);

        if (alliance === true && horde === false) {
            _races = _races.filter(race => race.faction === 'Alliance');
        }

        if (horde === true && alliance === false) {
            _races = _races.filter(race => race.faction === 'Horde');
        }

        if (tank === true) {
            _races = _races.map(race => {
                race.classes = race.classes.filter(clas => clas.roles.includes('tank'));

                return race;
            });
        }

        if (healer === true) {
            _races = _races.map(race => {
                race.classes = race.classes.filter(clas => clas.roles.includes('healer'));

                return race;
            });
        }

        if (rangedDps === true) {
            _races = _races.map(race => {
                race.classes = race.classes.filter(clas => clas.roles.includes('ranged dps'));

                return race;
            });
        }

        if (meleeDps === true) {
            _races = _races.map(race => {
                race.classes = race.classes.filter(clas => clas.roles.includes('melee dps'));

                return race;
            });
        }

        return _races;
    }
);

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
