import React from 'react';
import '../SupportContainer/SupportContainer.scss';

const SupportContainer = () => {
    return (
        <div className="support-container">
            <h3 className="text-roller">Support</h3>
            <hr/>
            {/*<p className="text-roller font-about">And what with supporting me?</p>*/}
            {/*<br />*/}
            {/*<p className="text-roller font-about">I will work on project alone, so it will definitely take some time.</p>*/}
            {/*<p className="text-roller font-about">You can help me giving additional ideas and advices about how to*/}
            {/*    improve project and also reporting bugs on my mail below:</p>*/}
            {/*<br/>*/}
            {/*<div className="support-button">*/}
            {/*    <a href="mail:to wicherwowuszek@gmail.com">wicherwowuszek@gmail.com</a>*/}
            {/*</div>*/}
            {/*<br/>*/}
            <p className="text-roller font-about">If you want to support me with with this and other project:</p>
            <br/>
            <br/>
            {/*<div className="support-button">*/}
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="QXAZSELTGRAT2"/>
                <input type="image" src="https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif" border="0"
                       name="submit" title="PayPal - The safer, easier way to pay online!"
                       alt="Donate with PayPal button" rel="nofollow"/>
                <img alt="" border="0" src="https://www.paypal.com/en_PL/i/scr/pixel.gif" width="1" height="1"/>
            </form>
            {/*</div>*/}
        </div>
    );
}

export default SupportContainer;
