import React from 'react';
import '../AboutMe/AboutMe.scss';
import AboutProject from "./AboutProject/AboutProject";
import AboutAuthor from "./AboutAuthor/AboutAuthor";
import SupportContainer from "./SupportContainer/SupportContainer";

function AboutMe(props) {
    return (
        <div className="about-me">
            <AboutAuthor/>
            <AboutProject/>
            <SupportContainer/>
        </div>
    );
}

export default AboutMe;