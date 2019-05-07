import React, {Component} from 'react';
import './BasicMode.scss';
import ButtonRoller from '../ButtonRoller/ButtonRoller';
import ClassIcon from '../ClassIcon/ClassIcon';
import {connect} from 'react-redux';
import {getClassesSelector} from "../../store/selectors/classes.selector";
import {getAdvancedModeSelector, getFilteredRaces} from "../../store/selectors/races.selector";
import ButtonMode from "../ButtonMode/ButtonMode";

class BasicMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            intervals: 30,
            currentClassIcon: this.props.classes[0].icon,
            currentClassName: null
        };
    }

    clearState = () => {
        this.setState({intervals: 30});
        this.setState({currentClassName: null});
    };

    rollIcons = () => {
        this.clearState();

        const roller = setInterval(() => {
            this.setState({currentClassIcon: this.props.classes[Math.floor(Math.random() * 11 + 1)].icon});
            this.setState({intervals: this.state.intervals - 1});

            if (this.state.intervals <= 0) {
                const randomClass = Math.floor(Math.random() * 11 + 1);
                clearInterval(roller);
                this.setState({
                    currentClassName: this.props.classes[randomClass].name,
                    currentClassIcon: this.props.classes[randomClass].icon
                });
            }
        }, 100);
    };

    render() {
        return (
            <div className="basic-mode">
                <h2 className="text-roller">WoW random class picker</h2>
                <ButtonMode/>
                <ClassIcon image={this.state.currentClassIcon}/>
                <h2 className="text-roller">{this.state.currentClassName}</h2>
                <ButtonRoller roll={() => this.rollIcons()}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    classes: getClassesSelector(state),
    advancedMode: getAdvancedModeSelector(state),
    filteredRaces: getFilteredRaces(state),
});

export default connect(mapStateToProps)(BasicMode);
