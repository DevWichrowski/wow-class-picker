import React from 'react';
import '../AboutMe/AboutMe.scss';
import {Helmet} from "react-helmet";
import AboutAuthor from "./AboutAuthor/AboutAuthor";
import AboutProject from "./AboutProject/AboutProject";
import SupportContainer from "./SupportContainer/SupportContainer";

function AboutMe() {
    return (
        <div className="about-me">
            <Helmet>
                <title>About WOW RNG | WOW RNG</title>
                <meta name="description" content="Page about project wow rng"/>
            </Helmet>
            <AboutAuthor/>
            <AboutProject/>
            <SupportContainer/>
        </div>
    );
}

export default AboutMe;