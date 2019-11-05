import React from 'react';
import Horde_icon from '../../../assets/faction_icons/Horde_icon.png';
import Alliance_icon from '../../../assets/faction_icons/Alliance_icon.png';
import './FactionContainer.scss';
import connect from "react-redux/es/connect/connect";
import {handleAlliance, handleHorde} from "../../../store/actions/racesActions";
import {
    getAdvancedModeSelector,
    getFactionAllianceSelector,
    getFactionHordeSelector,
} from "../../../store/selectors/races.selector";


const FactionContainer = props => {
    return (
        <div className="faction-container">
            <div className="choose-header">
                <h4 className="text-roller">CHOOSE YOUR FACTION</h4>
            </div>
            <div className="factions">
                <div className={`alliance-row ${props.factionAlliance ? 'selected' : null}`}
                     onClick={props.handleAlliance}>
                    <img className="faction-image"
                         src={Alliance_icon} alt="World of Warcraft Alliance icon"/>
                </div>
                <div className={`horde-row ${props.factionHorde ? 'selected' : null}`} onClick={props.handleHorde}>
                    <img className="faction-image" src={Horde_icon} alt="World of Warcraft Horde icon"/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    advancedMode: getAdvancedModeSelector(state),
    factionHorde: getFactionHordeSelector(state),
    factionAlliance: getFactionAllianceSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    handleAlliance: () => dispatch(handleAlliance()),
    handleHorde: () => dispatch(handleHorde()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FactionContainer);
