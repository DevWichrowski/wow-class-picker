import * as RacesActions from '../actions/racesActions';
import produce from 'immer';
import {racesData} from "../racesData";

const initialState = {
	advancedMode: false,
	factionAlliance: false,
	factionHorde: false,
	isTank:  false,
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
				default:
					return state;
			}
		})
	);
