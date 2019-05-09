import React, { Component } from 'react';
import './AdvancedMode.scss';
import RolesContainer from "./RolesContainer/RolesContainer";
import ButtonRoller from "../ButtonRoller/ButtonRoller";
import ClassIcon from "../ClassIcon/ClassIcon";
import { getClassesSelector } from "../../store/selectors/classes.selector";
import connect from "react-redux/es/connect/connect";
import FactionContainer from "./FactionContainer/FactionContainer";
import { getFilteredRaces } from "../../store/selectors/races.selector";
import QuestionMark_icon from '../../assets/QuestionMark_icon.gif'

class AdvancedMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            intervals: 25,
            currentClassIcon: QuestionMark_icon,
            currentRaceIcon: null,
            currentRaceName: 'Choose filters and click the button below',
            currentClassName: '',
        };
    }

    clearState = () => {
        this.setState({ intervals: 25 });
        this.setState({ currentRaceName: 'Rolling...' });
        this.setState({ currentClassName: null });
    };

    rollIcons = () => {
        this.clearState();
        const randomRaces = Math.floor(Math.random() * this.props.filteredRaces.length);
        const randomClasses = Math.floor(Math.random() * this.props.filteredRaces[randomRaces].classes.length);

        const roller = setInterval(() => {
            let filteredRandomClasses = this.props.filteredRaces[randomRaces].classes[randomClasses];

            this.setState({ currentClassIcon: this.props.classes[Math.floor(Math.random() * 11 + 1)].icon });
            this.setState({ currentRaceIcon: this.props.filteredRaces[Math.floor(Math.random() * randomRaces)].race_icon });
            this.setState({ intervals: this.state.intervals - 1 });

            if (this.state.intervals <= 0) {

                clearInterval(roller);

                if (filteredRandomClasses === undefined) {
                    this.rollIcons();
                    return;
                }

                this.setState({
                    currentClassName: this.props.filteredRaces[randomRaces].classes[randomClasses].name,
                    currentRaceName: this.props.filteredRaces[randomRaces].name,
                    currentClassIcon: this.props.filteredRaces[randomRaces].classes[randomClasses].icon,
                    currentRaceIcon: this.props.filteredRaces[randomRaces].race_icon
                });
            }
        }, 100);
    };

    render() {
        return (
            <div className="advanced-mode">
                {/* <h1 className="text-roller">World of Warcraft</h1>
                <br/>
                <h2 className="text-roller h2-font">Advanced class generator</h2> */}
                <div className="faction-role-container">
                    <FactionContainer />
                    <RolesContainer />
                </div>
                <div className="images-container">
                    <div className="images-container-main">
                        {this.state.currentRaceIcon != null ?
                            <img className="race-icon" src={this.state.currentRaceIcon} alt="World of Warcraft Race icon" /> :
                            null}
                        <ClassIcon image={this.state.currentClassIcon} />
                    </div>

                    <div className="races-classes">
                        <h1 className="text-roller">{this.state.currentRaceName}</h1>
                        <br />
                        <h1 className="text-roller"> {this.state.currentClassName}</h1>
                    </div>
                </div>
                <ButtonRoller roll={this.rollIcons} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    classes: getClassesSelector(state),
    filteredRaces: getFilteredRaces(state),
});

export default connect(mapStateToProps)(AdvancedMode);
