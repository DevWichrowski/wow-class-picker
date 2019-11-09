import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import "./NickGenerator.scss"
import ButtonRoller from "../ButtonRoller/ButtonRoller";
import ClassIcon from "../ClassIcon/ClassIcon";
import QuestionMark from '../../assets/QuestionMark_icon.gif';
import nicknameCollection from "../../utils/nickname-collections";

const NickGenerator = props => {
    const [rollIntervals, setRollIntervals] = useState(10);
    const [status, setStatus] = useState('Click button');
    const [startRoll, setStartRoll] = useState(false);
    const [generatedNick, setGeneratedNick] = useState(null);

    const clearState = () => {
        setRollIntervals(10);
        setStatus('Click button');
        setGeneratedNick('...');
    };

    const rollNick = () => {
        clearState();

        const roller = setInterval(() => {
            setRollIntervals(rollIntervals => {

                setStatus('Generating...');
                setStartRoll(true);

                if (rollIntervals <= 0) {
                    const randomNick = Math.floor(Math.random() * nicknameCollection.length + 1);
                    clearInterval(roller);
                    setStatus('Click button');
                    setGeneratedNick(nicknameCollection[randomNick]);
                    console.log('nicksArr[randomNick]', nicknameCollection[randomNick])
                }

                return rollIntervals - 1;
            });
        }, 100);
    };

    return (
        <div>
            <Helmet>
                <title>Nick Generator | WOW RNG</title>
                <meta name="description" content="Nick generator for your character"/>
            </Helmet>
            <div className="nick-generator">
                <h4 className="nick-text">Nick generator</h4>
                <div className="nick-container">
                    {startRoll ? <h2 className="nick-text-generated">{generatedNick}</h2> :
                        <ClassIcon image={QuestionMark}/>}
                </div>

                <div className="messages-container">
                    <h2 className="text-roller class-text">{status}</h2>
                </div>
            </div>
            <ButtonRoller roll={() => rollNick()} textButton="GENERATE NICK"/>
        </div>
    );
};

export default NickGenerator;