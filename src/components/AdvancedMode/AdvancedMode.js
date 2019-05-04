import React, {Component} from 'react';
import ButtonMode from "../ButtonMode/ButtonMode";

class AdvancedMode extends Component {
    render() {
        return (
            <div className="advanced-mode">
                <h1>Advanced mode</h1>
                <ButtonMode/>
            </div>
        );
    }
}

export default AdvancedMode;