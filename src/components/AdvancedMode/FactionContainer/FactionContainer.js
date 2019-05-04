import React, {Component} from 'react';
import Horde_icon from '../../../assets/faction_icons/Horde_icon.png';
import Alliance_icon from '../../../assets/faction_icons/Alliance_icon.png';
import './FactionContainer.scss';
import connect from "react-redux/es/connect/connect";
import {handleAlliance, handleHorde} from "../../../store/actions/racesActions";
import {
    getAdvancedModeSelector, getFactionAllianceSelector,
    getFactionHordeSelector,
    getRacesSelector
} from "../../../store/selectors/races.selector";

class FactionContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="faction-container">
                <h4 className="text">Choose your faction</h4>
                <div className="factions">
                    <div className="alliance-row" onClick={this.props.handleAlliance}>
                        <img className={`faction-image ${this.props.factionAlliance ? 'selected' : null}`}
                             src={Alliance_icon}/>
                    </div>
                    <div className="horde-row">
                        <img className={`faction-image ${this.props.factionHorde ? 'selected' : null}`} src={Horde_icon}
                             onClick={this.props.handleHorde}/>
                    </div>
                </div>
            </div>
        );
    }
}

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
