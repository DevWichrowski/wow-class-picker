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


    const clearState = () => {
        setRollIntervals(30);
        setCurrentClassName('Rolling...');
        console.log('Cleared intervals', rollIntervals, currentClassName)
    };

    const rollIcons = () => {
        clearState();

        const roller = setInterval(() => {
            // let rolledAnimationNumber = Math.floor(Math.random() * 11 + 1);

            setCurrentClassIcon(classesGif);
            setCurrentClassName('Rolling...');
            setRollIntervals(rollIntervals => rollIntervals - 1);

            if (rollIntervals <= 0) {
                const randomClass = Math.floor(Math.random() * 11 + 1);
                clearInterval(roller);
                setCurrentClassName(props.classes[randomClass].name);
                setCurrentClassIcon(props.classes[randomClass].icon)
            }
            console.log('rollIntervals', rollIntervals);
        }, 100);
    };
    return (
        <div>
            <Helmet>
                <title>Random class picker | WOW RNG</title>
                <meta name="description" content="Random class picker, class generator for world of warcraft"/>
            </Helmet>
            <div className="basic-mode slide-in-blurred-top">
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
