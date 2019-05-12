import React from 'react';
import '../SupportContainer/SupportContainer.scss';

function SupportContainer() {
    return (
        <div className="support-container">
            <h3 className="text-roller">Support</h3>
            <hr/>
            <p className="text-roller font-about">And what with supporting me?</p>
            <p className="text-roller font-about">I will work on project alone, so it will definitely take some time</p>
            <p className="text-roller font-about">You can help me giving additional ideas and advices about how to
                improve project and also reporting bugs on my mail below:</p>
            <br/>
            <div className="support-button">
                <a href="mail:to wicherwowuszek@gmail.com">Wicherwowuszek@gmail.com</a>
            </div>
            <br/>
            {/*<p className="text-roller font-about">If you want you can also give me some money for subscription and*/}
            {/*    coffee</p>*/}
            {/*<div className="support-button">*/}
            {/*    <a href="#">DONATE</a>*/}
            {/*</div>*/}
        </div>
    );
}

export default SupportContainer;