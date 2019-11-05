import React from 'react';
import './ClassIcon.scss';
import "../../styles/animations.scss";

const ClassIcon = props => {
    return (
        <div className="class-icon">
            <img src={props.image} id="image" alt="World of Warcraft class icon"/>
        </div>
    );
};

export default ClassIcon;
