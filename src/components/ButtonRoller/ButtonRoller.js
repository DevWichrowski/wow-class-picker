import React from 'react';
import './ButtonRoller.scss';
import "../../styles/animations.scss";

const ButtonRoller = props => {
    return (
        <div className="button-mode-wow slide-in-blurred-top" onClick={props.roll}>
            <p className="text-roller roll-but">{props.textButton}</p>
        </div>
    );
}

export default ButtonRoller;