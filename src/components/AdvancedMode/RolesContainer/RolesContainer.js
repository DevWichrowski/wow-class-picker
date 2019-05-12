import React, {Component} from 'react';
import './RolesContainer.scss';
import Tank_icon from '../../../assets/roles_icons/Tank_icon.jpg';
import Ranged_icon from '../../../assets/roles_icons/Ranged_icon.jpg';
import Melee_icon from '../../../assets/roles_icons/Melee_icon.jpg';
import Healer_icon from '../../../assets/roles_icons/Healer_icon.jpg';
import connect from "react-redux/es/connect/connect";
import {getIsHealer, getIsMeleeDps, getIsRangedDps, getIsTankSelector} from "../../../store/selectors/races.selector";
import {
    handleHealer,
    handleMeleeDps,
    handleRangedDps,
    handleTank
} from "../../../store/actions/racesActions";

class RolesContainer extends Component {

    render() {
        return (
            <div className="roles-container">
                <div className="choose-header">
                    <h4 className="text-roller">CHOOSE YOUR ROLE</h4>
                </div>
                <div className="roles-main">
                    <div className="roles">
                        <div className="role-row" onClick={this.props.handleTank}>
                            <img className={`role-image ${this.props.isTank ? 'selected' : null}`} src={Tank_icon}
                                 alt="World of Warcraft tank icon"/>
                        </div>
                        <div className="role-row" onClick={this.props.handleRangedDps}>
                            <img className={`role-image ${this.props.isRangedDps ? 'selected' : null}`}
                                 src={Ranged_icon} alt="World of Warcraft ranged dps icon"/>
                        </div>
                        <div className="role-row" onClick={this.props.handleMeleeDps}>
                            <img className={`role-image ${this.props.isMeleeDps ? 'selected' : null}`}
                                 src={Melee_icon} alt="World of Warcraft melee dps icon"/>
                        </div>
                        <div className="role-row" onClick={this.props.handleHealer}>
                            <img className={`role-image ${this.props.isHealer ? 'selected' : null}`} src={Healer_icon}
                                 alt="World of Warcraft healer icon"/>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isTank: getIsTankSelector(state),
    isRangedDps: getIsRangedDps(state),
    isMeleeDps: getIsMeleeDps(state),
    isHealer: getIsHealer(state),
});

const mapDispatchToProps = (dispatch) => ({
    handleTank: () => dispatch(handleTank()),
    handleRangedDps: () => dispatch(handleRangedDps()),
    handleMeleeDps: () => dispatch(handleMeleeDps()),
    handleHealer: () => dispatch(handleHealer())
});

export default connect(mapStateToProps, mapDispatchToProps)(RolesContainer)
