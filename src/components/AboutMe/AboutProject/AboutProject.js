import React from 'react';

function AboutProject(props) {
    return (
        <div className="about-container">
            <h3 className="text-roller">Project and Future Updates</h3>
            <hr/>
            <p className="text-roller font-about">The project arises because his original died several years ago, I
                remember that a lot of people was using it, accualy I think that many people also looked for class
                generator. <br/>It's a improved class generator becouse you can filter by roles etc.. Currently I
                working on another improvments like adding better quality images, better UI, specs :) <br />
                <br />
                List of future update:<br />
                1. World of Warcraft Classic - basic generator<br />
                2. World of Warcraft Classic - advanced generator with filters <br />
                3. Name generator - based on classes, races and gender. <br />
                4. DUO maching - find a friend to play with<br />
            </p>
        </div>
    );
}

export default AboutProject;