import React from 'react';
import '../PrivacyPolicy/PrivacyPolicy.scss';
import {Helmet} from "react-helmet";

function PrivacyPolicy() {
    return (
        <div className="privacy-policy">
            <Helmet>
                <title>Privacy policy| WOW RNG</title>
                <meta name="description" content="Privacy policy wow rng" />
            </Helmet>
            <h1> Privacy policy and informations</h1>
            <div className="text-policy">
                <p>WOW-RNG is not a commercial project, I do not intend to earn money on it, it's just a hobby
                    project.</p>
                <p>I do not work at Blizzard and I'm not affiliated with this company</p>
                <p>All the pictures came from:</p>
                <a href="https://worldofwarcraft.com">worldofwarcraft.com</a>
                <br/>
                <a href="https://www.wowhead.com">wowhead.com</a>
                <br/>
                <a href="http://clipartmag.com">clipartmag.com</a>
                <h1 className="center-headings">What Data is Used?</h1>
                <h2 className="center-headings">Google Analytics</h2>
                <div/>
                <div className="text-policy">
                    <p>Site use google analytics to track it's usage. This allow me to see geographical location via IP
                        addresses, there is no personal information to correlate who are all visitors. This information
                        is used solely to view site usage.</p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;