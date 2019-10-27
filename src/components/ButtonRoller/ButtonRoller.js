import React from 'react';
import './ButtonRoller.scss';
import "../../styles/animations.scss";

export default function ButtonRoller(props) {
    return (
        <div className="button-mode-wow slide-in-blurred-top" onClick={props.roll}>
            <p className="text-roller roll-but">ROLL CLASS</p>
        </div>
    );
}
