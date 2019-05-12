import React from 'react';
import '../InfoFooter/InfoFooter.scss';
import {NavLink} from "react-router-dom";

function InfoFooter() {
    return (
        <div className="info-footer">
            <p id="current-version" className="text-roller">Version: 0.6 beta</p>
            <NavLink to="/privacy-policy">
                <p id="privcy-policy" className="text-roller">Privacy policy and informations</p>
            </NavLink>
        </div>
    );
}

export default InfoFooter;