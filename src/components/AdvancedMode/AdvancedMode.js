import React, {Component} from 'react';
import ButtonMode from "../ButtonMode/ButtonMode";
import './AdvancedMode.scss';
import {FactionContainer} from "./FactionContainer/FactionContainer";
import RolesContainer from "./RolesContainer/RolesContainer";
import Button from "../Button/Button";
import ClassIcon from "../ClassIcon/ClassIcon";

class AdvancedMode extends Component {
    render() {
        return (
            <div className="advanced-mode">
                <h2 className="text">WoW random class picker</h2>
                <ButtonMode/>
                <div className="faction-role-container">
                    <FactionContainer/>
                    <RolesContainer/>
                </div>
                <ClassIcon/>
                <Button/>
            </div>
        );
    }
}

export default AdvancedMode;