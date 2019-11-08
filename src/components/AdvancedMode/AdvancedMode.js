import React, {useState} from 'react';
import './AdvancedMode.scss';
import '../../styles/styles.scss';
import RolesContainer from "./RolesContainer/RolesContainer";
import ButtonRoller from "../ButtonRoller/ButtonRoller";
import ClassIcon from "../ClassIcon/ClassIcon";
import {getClassesSelector} from "../../store/selectors/classes.selector";
import connect from "react-redux/es/connect/connect";
import FactionContainer from "./FactionContainer/FactionContainer";
import {getFilteredRaces} from "../../store/selectors/races.selector";
import QuestionMark_icon from '../../assets/QuestionMark_icon.gif'
import classesGif from "../../assets/gifs/classes-gif.gif";
import racesGif from "../../assets/gifs/races-gif.gif";
import {Helmet} from "react-helmet";


const AdvancedMode = props => {


    const [rollIntervals, setRollIntervals] = useState(25);
    const [currentClassIcon, setCurrentClassIcon] = useState(QuestionMark_icon);
    const [currentRaceIcon, setCurrentRaceIcon] = useState(null);
    const [currentRaceName, setCurrentRaceName] = useState('Click button below');
    const [currentClassName, setCurrentClassName] = useState('');

    const clearState = () => {
        setRollIntervals(25);
        setCurrentRaceName('Rolling...');
        setCurrentClassName(null)
    };

    const rollIcons = () => {
        clearState();
        const randomRaces = Math.floor(Math.random() * props.filteredRaces.length);
        const randomClasses = Math.floor(Math.random() * props.filteredRaces[randomRaces].classes.length);

        const roller = setInterval(() => {
            setRollIntervals(rollIntervals => {
                setCurrentClassIcon(classesGif);
                setCurrentRaceIcon(racesGif);
                setRollIntervals(rollIntervals - 1);

                if (rollIntervals <= 0) {

                    clearInterval(roller);

                    let filteredRandomClasses = props.filteredRaces[randomRaces].classes[randomClasses];

                    if (filteredRandomClasses === undefined) {
                        rollIcons();
                        return;
                    }

                    setCurrentClassName(props.filteredRaces[randomRaces].classes[randomClasses].name);
                    setCurrentRaceName(props.filteredRaces[randomRaces].name);
                    setCurrentClassIcon(props.filteredRaces[randomRaces].classes[randomClasses].icon);
                    setCurrentRaceIcon(props.filteredRaces[randomRaces].race_icon);
                }

                return rollIntervals - 1;
            })
        }, 100);
    };

    return (
        <div className="advanced-mode">
            <Helmet>
                <title>Advanced class picker | WOW RNG</title>
                <meta name="description" content="Advanced class picker, choose your faction and role."/>
            </Helmet>
            <div className="faction-role-container">
                <FactionContainer/>
                <RolesContainer/>
            </div>
            <div className="images-container">
                <div className="images-container-main">
                    {currentRaceIcon != null ?
                        <img className="race-icon" src={currentRaceIcon}
                             alt="World of Warcraft Race icon"/> :
                        null}
                    <ClassIcon image={currentClassIcon}/>
                </div>
                <div className="races-classes">
                    <h1 className="text-roller">{currentRaceName}</h1>
                    <br/>
                    <h1 className="text-roller"> {currentClassName}</h1>
                </div>
            </div>
            <ButtonRoller roll={rollIcons}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    classes: getClassesSelector(state),
    filteredRaces: getFilteredRaces(state),
});

export default connect(mapStateToProps)(AdvancedMode);
