import React from 'react';
import '../InfoFooter/InfoFooter.scss';

function InfoFooter(props) {
    return (
        <div className="info-footer">
            <p id="current-version" className="text-roller">Version: 0.6 beta</p>
            <a id="privcy-policy" className="text-roller" href="#">Privacy policy and informations</a>
        </div>
    );
}

export default InfoFooter;