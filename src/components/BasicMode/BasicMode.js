import React, {Component} from 'react';
import './BasicMode.scss';
import ButtonRoller from '../ButtonRoller/ButtonRoller';
import ClassIcon from '../ClassIcon/ClassIcon';
import {connect} from 'react-redux';
import {getClassesSelector} from "../../store/selectors/classes.selector";
import {getAdvancedModeSelector, getFilteredRaces} from "../../store/selectors/races.selector";
import QuestionMark from '../../assets/QuestionMark_icon.gif';
import classesGif from "../../assets/gifs/classes-gif.gif";
import "../../styles/animations.scss";

class BasicMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            intervals: 30,
            // currentClassIcon: this.props.classes[0].icon,
            currentClassIcon: QuestionMark,
            currentClassName: 'Click button'
        };
    }

    clearState = () => {
        this.setState({intervals: 30, currentClassName: 'Rolling...'});
    };

    rollIcons = () => {
        this.clearState();

        const roller = setInterval(() => {
            let rolledAnimationNumber = Math.floor(Math.random() * 11 + 1);

            this.setState({currentClassIcon: classesGif});
            this.setState({currentClassName: 'Rolling...'});
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
            <div>
                <div className="basic-mode slide-in-blurred-top">
                    <ClassIcon image={this.state.currentClassIcon}/>
                    <div className="races-classes">
                        <h2 className="text-roller class-text">{this.state.currentClassName}</h2>
                    </div>
                </div>
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
