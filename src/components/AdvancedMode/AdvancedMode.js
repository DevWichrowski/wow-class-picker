import React, {Component} from 'react';
import ButtonMode from "../ButtonMode/ButtonMode";
import './AdvancedMode.scss';
import RolesContainer from "./RolesContainer/RolesContainer";
import Button from "../Button/Button";
import ClassIcon from "../ClassIcon/ClassIcon";
import {getClassesSelector} from "../../store/selectors/classes.selector";
import connect from "react-redux/es/connect/connect";
import FactionContainer from "./FactionContainer/FactionContainer";
import {getFilteredRaces} from "../../store/selectors/races.selector";
import Human_icon from '../../assets/races_icons/Human_icon.png';

class AdvancedMode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // intervals: 30,
            currentClassIcon: this.props.classes[0].icon,
            currentRaceIcon: Human_icon,
            currentClassName: null,
            currentRaceName: null,
        };
    }

    clearState = () => {
        this.setState({intervals: 30});
        this.setState({currentClassName: null});
        this.setState({currentRaceName: null});
    };

    rollIcons = () => {
        this.clearState();
        const randomRaces = Math.floor(Math.random() * this.props.filteredRaces.length);
        const randomClasses = Math.floor(Math.random() * this.props.filteredRaces[randomRaces].classes.length);
        // console.log('dupa', randomRaces);

        const roller = setInterval(() => {
            this.setState({currentClassIcon: this.props.classes[Math.floor(Math.random() * 11 + 1)].icon});
            this.setState({currentRaceIcon: this.props.filteredRaces[Math.floor(Math.random() * randomRaces)].race_icon});
            this.setState({intervals: this.state.intervals - 1});

            if (this.state.intervals <= 0) {
                console.log(randomClasses, 'ran');
                console.log(this.props.filteredRaces[randomRaces], 'object');

                clearInterval(roller);

                let filteredRandomClasses = this.props.filteredRaces[randomRaces].classes[randomClasses];

                if (filteredRandomClasses === undefined) {
                    this.rollIcons();
                    return;
                }
                    console.log('test', randomRaces);
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
                <h2 className="text">WoW random class picker</h2>
                <ButtonMode/>
                <div className="faction-role-container">
                    <FactionContainer/>
                    <RolesContainer/>
                </div>
                <img className="race-icon" src={this.state.currentRaceIcon} />
                <ClassIcon image={this.state.currentClassIcon}/>
                <div className="races-classes">
                    <h3 className="text">{this.state.currentRaceName}</h3>
                    <br/>
                    <h1 className="text">{this.state.currentClassName}</h1>
                </div>
                <Button roll={this.rollIcons}/>
                {/*{console.log('filteredRaces', this.props.filteredRaces)}*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    classes: getClassesSelector(state),
    filteredRaces: getFilteredRaces(state),
});

export default connect(mapStateToProps)(AdvancedMode);