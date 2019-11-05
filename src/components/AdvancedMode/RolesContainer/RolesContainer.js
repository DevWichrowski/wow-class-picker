import React from 'react';
import './RolesContainer.scss';
import Tank_icon from '../../../assets/roles_icons/Tank_icon.jpg';
import Ranged_icon from '../../../assets/roles_icons/Ranged_icon.jpg';
import Melee_icon from '../../../assets/roles_icons/Melee_icon.jpg';
import Healer_icon from '../../../assets/roles_icons/Healer_icon.jpg';
import connect from "react-redux/es/connect/connect";
import {getIsHealer, getIsMeleeDps, getIsRangedDps, getIsTankSelector} from "../../../store/selectors/races.selector";
import {handleHealer, handleMeleeDps, handleRangedDps, handleTank} from "../../../store/actions/racesActions";


const RolesContainer = props => {
    return (
        <div className="roles-container">
            <div className="choose-header">
                <h4 className="text-roller">CHOOSE YOUR ROLE</h4>
            </div>
            <div className="roles-main">
                <div style={{position: 'relative'}} className={`role-row ${this.props.isTank ? 'selected' : ''}`}
                     onClick={this.props.handleTank}>
                    <img className="role-image" src={Tank_icon}
                         alt="World of Warcraft tank icon"/>
                    <div className="hover">
                    </div>
                </div>
                <div style={{position: 'relative'}} className={`role-row ${props.isRangedDps ? 'selected' : ''}`}
                     onClick={props.handleRangedDps}>
                    <img className="role-image"
                         src={Ranged_icon} alt="World of Warcraft ranged dps icon"/>
                    <div className="hover">
                    </div>
                </div>
                <div style={{position: 'relative'}} className={`role-row ${props.isMeleeDps ? 'selected' : ''}`}
                     onClick={props.handleMeleeDps}>
                    <img className={`role-image`}
                         src={Melee_icon} alt="World of Warcraft melee dps icon"/>
                    <div className="hover">
                    </div>
                </div>
                <div style={{position: 'relative'}} className={`role-row ${props.isHealer ? 'selected' : ''}`}
                     onClick={props.handleHealer}>
                    <img className={`role-image`} src={Healer_icon}
                         alt="World of Warcraft healer icon"/>
                    <div className="hover">
                    </div>
                </div>

            </div>
        </div>
    );
};

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
