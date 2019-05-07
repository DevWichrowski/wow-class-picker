import React from 'react';
import '../AboutMe/AboutMe.scss';
import AboutProject from "./AboutProject/AboutProject";

function AboutMe(props) {
    return (
        <div className="about-me">
            <AboutProject/>
        </div>
    );
}

export default AboutMe;