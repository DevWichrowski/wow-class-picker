import React, {Component} from 'react';
import ButtonMode from "../ButtonMode/ButtonMode";
import './AdvancedMode.scss';
import RolesContainer from "./RolesContainer/RolesContainer";
import Button from "../Button/Button";
import ClassIcon from "../ClassIcon/ClassIcon";
import {getClassesSelector} from "../../store/selectors/classes.selector";
import connect from "react-redux/es/connect/connect";
import FactionContainer from "./FactionContainer/FactionContainer";
import {getFilteredRaces} from "../../store/selectors/races.selector";

class AdvancedMode extends Component {
    constructor(props){
        super(props);

        this.state = {
            intervals: 30,
            currentClassIcon: this.props.classes[0].icon,
            currentClassName: null
        };
    }

    render() {
        return (
            <div className="advanced-mode">
                <h2 className="text">WoW random class picker</h2>
                <ButtonMode/>
                <div className="faction-role-container">
                    <FactionContainer/>
                    <RolesContainer/>
                </div>
                <ClassIcon image={this.state.currentClassIcon}/>
                <Button/>
                {console.log(this.props.filteredRaces)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    classes: getClassesSelector(state),
    filteredRaces: getFilteredRaces(state),
});

export default connect(mapStateToProps)(AdvancedMode);