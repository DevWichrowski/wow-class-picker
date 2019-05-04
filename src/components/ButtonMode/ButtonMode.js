import React, {Component} from 'react';
import '../Button/Button.scss';
import {getAdvancedModeSelector} from "../../store/selectors/races.selector";
import connect from "react-redux/es/connect/connect";
import {handleAlliance, handleHorde, handleSwitch} from "../../store/actions/racesActions";
import {NavLink} from "react-router-dom";

class ButtonMode extends Component {
    render() {
        return (
            <div className="button-mode">
                {this.props.advancedMode ?
                    (<NavLink to="/">
                        <div className="button" onClick={this.props.handleAdvancedMode}>
                            <p className="text">Go to Baisc mode</p>
                        </div>
                    </NavLink>) :
                    (<NavLink to="/advanced-mode">
                        <div className="button" onClick={this.props.handleAdvancedMode}>
                            <p className="text">Go to advanced mode</p>
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