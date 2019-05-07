import React, {Component} from 'react';
import './BasicMode.scss';
import ButtonRoller from '../ButtonRoller/ButtonRoller';
import ClassIcon from '../ClassIcon/ClassIcon';
import {connect} from 'react-redux';
import {getClassesSelector} from "../../store/selectors/classes.selector";
import {getAdvancedModeSelector, getFilteredRaces} from "../../store/selectors/races.selector";

class BasicMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            intervals: 30,
            currentClassIcon: this.props.classes[0].icon,
            currentClassName: 'Click button'
        };
    }

    clearState = () => {
        this.setState({intervals: 30});
        this.setState({currentClassName: 'Murloc :)'});
    };

    rollIcons = () => {
        this.clearState();

        const roller = setInterval(() => {
            let rolledAnimationNumber = Math.floor(Math.random() * 11 + 1);

            this.setState({currentClassIcon: this.props.classes[rolledAnimationNumber].icon});
            this.setState({currentClassName: this.props.classes[rolledAnimationNumber].name});
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
                <h1 className="text-roller">World of Warcraft</h1>
                <br/>
                <h2 className="text-roller">Random class generator</h2>
                <ClassIcon image={this.state.currentClassIcon}/>
                <h2 className="text-roller class-text">{this.state.currentClassName}</h2>
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
