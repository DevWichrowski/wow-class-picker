import React from 'react';
import '../AboutMe/AboutMe.scss';
import AboutProject from "./AboutProject/AboutProject";
import AboutAuthor from "./AboutAuthor/AboutAuthor";

function AboutMe(props) {
    return (
        <div className="about-me">
            <AboutAuthor/>
            <AboutProject/>
        </div>
    );
}

export default AboutMe;