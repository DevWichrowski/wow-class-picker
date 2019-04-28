import * as RacesActions from '../actions/racesActions';
import produce from 'immer';
import {racesData} from "../racesData";

const initialState = {
    advancedMode: false,
    factionAlliance: false,
    factionHorde: false,
    isTank: false,
    isRangedDps: false,
    isMeleeDps: false,
    isHealer: false,

    filteredRaces: [],

    races: racesData,
};

export const racesReducer = (state = initialState, action) =>
    produce(state, (draft) =>
        produce(state, (draft) => {
            switch (action.type) {
                case RacesActions.HANDLE_SWITCH: {
                    draft.advancedMode = !state.advancedMode;
                    break;
                }
                case RacesActions.HANDLE_ALLIANCE: {
                    draft.factionAlliance = !state.factionAlliance;
                    break;
                }
                case RacesActions.HANDLE_HORDE: {
                    draft.factionHorde = !state.factionHorde;
                    break;
                }
                case RacesActions.HANDLE_TANK: {
                    draft.isTank = !state.isTank;
                    break;
                }
                case RacesActions.HANDLE_RANGED_DPS: {
                    draft.isRangedDps = !state.isRangedDps;
                    break;
                }
                case RacesActions.HANDLE_MELEE_DPS: {
                    draft.isMeleeDps = !state.isMeleeDps;
                    break;
                }
                case RacesActions.HANDLE_HEALER : {
                    draft.isHealer = !state.isHealer;
                    break;
                }

                default:
                    return state;
            }
        })
    );
