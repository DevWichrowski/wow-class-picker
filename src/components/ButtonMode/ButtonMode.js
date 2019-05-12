import React, {Component} from 'react';
import {getAdvancedModeSelector} from "../../store/selectors/races.selector";
import connect from "react-redux/es/connect/connect";
import {handleAlliance, handleHorde, handleSwitch} from "../../store/actions/racesActions";
import {NavLink} from "react-router-dom";

class ButtonMode extends Component {
    render() {
        return (
            <div>
                {this.props.advancedMode ?
                    (<NavLink to="/">
                        <div className="button-mode-wow" onClick={this.props.handleAdvancedMode}>
                            <p className="text-roller">Go to Basic Mode</p>
                        </div>
                    </NavLink>) :
                    (<NavLink to="/advanced-mode">
                        <div className="button-mode-wow" onClick={this.props.handleAdvancedMode}>
                            <p className="text-roller">Go to Advanced Mode</p>
                        </div>
                    </NavLink>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    advancedMode: getAdvancedModeSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    handleAlliance: () => dispatch(handleAlliance()),
    handleHorde: () => dispatch(handleHorde()),
    handleAdvancedMode: () => dispatch(handleSwitch())
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMode);