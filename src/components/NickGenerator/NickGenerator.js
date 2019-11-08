import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import "./NickGenerator.scss"
import ButtonRoller from "../ButtonRoller/ButtonRoller";
import ClassIcon from "../ClassIcon/ClassIcon";
import QuestionMark from '../../assets/QuestionMark_icon.gif';

const NickGenerator = props => {

    const nicksArr = [
        'Ridbeorth',
        'Bandojo',
        'Retmac',
        'Retthy',
        'Ridhal',
        'Arga',
        'Ceocanar',
        'Phieneth',
        'Leear',
        'Frithrob',
        'Hamsere',
        'Nielron',
        'Cafrith',
        'Terthryth',
        'Anferth',
        'Wilu',
        'Athony',
        'Jeffbard',
        'Ardhal',
        'Brisig'];

    const [rollIntervals, setRollIntervals] = useState(30);
    const [status, setStatus] = useState('Click button');
    const [startRoll, setStartRoll] = useState(false);
    const [rolledNick, setRolledNick] = useState('')

    const clearState = () => {
        setRollIntervals(30);
        setStatus('Click button');
    };

    const rollNick = () => {
        clearState();

        const roller = setInterval(() => {
            setRollIntervals(rollIntervals => {

                setStatus('Rolling...');
                // setRolledNick('...');
                setStartRoll(true);

                if (rollIntervals <= 0) {
                    const randomNick = Math.floor(Math.random() * nicksArr.length + 1);
                    clearInterval(roller);
                    setStatus('Click button');
                    setRolledNick(nicksArr[randomNick]);
                    console.log('nicksArr[randomNick]', nicksArr[randomNick])
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
                    {startRoll ? <h2 className="nick-text">{rolledNick}</h2> : <ClassIcon image={QuestionMark}/>}
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