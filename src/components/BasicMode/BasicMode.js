import React, {useState} from 'react';
import './BasicMode.scss';
import ButtonRoller from '../ButtonRoller/ButtonRoller';
import ClassIcon from '../ClassIcon/ClassIcon';
import {connect} from 'react-redux';
import {getClassesSelector} from "../../store/selectors/classes.selector";
import {getAdvancedModeSelector, getFilteredRaces} from "../../store/selectors/races.selector";
import QuestionMark from '../../assets/QuestionMark_icon.gif';
import classesGif from "../../assets/gifs/classes-gif.gif";
import "../../styles/animations.scss";
import {Helmet} from "react-helmet";

const BasicMode = props => {

    const [rollIntervals, setRollIntervals] = useState(30);
    const [currentClassIcon, setCurrentClassIcon] = useState(QuestionMark);
    const [currentClassName, setCurrentClassName] = useState('Click button');
    const [classicMode, setClassicMode] = useState(false);


    const clearState = () => {
        setRollIntervals(30);
        setCurrentClassName('Rolling...');
    };

    const rollIcons = () => {
        clearState();

        const roller = setInterval(() => {
            setRollIntervals(rollIntervals => {
                setCurrentClassIcon(classesGif);
                setCurrentClassName('Rolling...');

                if (rollIntervals <= 0) {
                    const randomClass = Math.floor(Math.random() * 11 + 1);
                    clearInterval(roller);
                    setCurrentClassName(props.classes[randomClass].name);
                    setCurrentClassIcon(props.classes[randomClass].icon)
                }

                return rollIntervals - 1;
            });
        }, 100);
    };
    return (
        <div>
            <Helmet>
                <title>Random class picker | WOW RNG</title>
                <meta name="description" content="Random class picker, class generator for world of warcraft"/>
            </Helmet>
            <div className="basic-mode">
                <div className="classic-mode-container">
                    <p className="classic-text" onClick={() => setClassicMode(!classicMode)}>Classic mode</p>
                    {classicMode ?
                        <p className="enabled-classic" onClick={() => setClassicMode(!classicMode)}>Enabled</p> :
                        <p className="disabled-classic" onClick={() => setClassicMode(!classicMode)}>Disabled</p>}
                </div>
                <ClassIcon image={currentClassIcon}/>
                <div className="races-classes">
                    <h2 className="text-roller class-text">{currentClassName}</h2>
                </div>
            </div>
            <ButtonRoller roll={() => rollIcons()}/>
        </div>
    );
};


const mapStateToProps = (state) => ({
    classes: getClassesSelector(state),
    advancedMode: getAdvancedModeSelector(state),
    filteredRaces: getFilteredRaces(state),
});

export default connect(mapStateToProps)(BasicMode);
