import React, { Component } from 'react'
import Horde_icon from '../../../assets/faction_icons/Horde_icon.png';
import Alliance_icon from '../../../assets/faction_icons/Alliance_icon.png';
import './FactionContainer.scss';

export class FactionContainer extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div className="faction-container">
        <h2 className="text">Choose your faction</h2>
        <div className="factions">
        <div className="alliance-row">
        <img className="factions-image" src={Alliance_icon} />
        </div>
        <div className="horde-row">
        <img className="factions-image" src={Horde_icon} />
        </div>
        </div>
      </div>
    )
  }
}

export default FactionContainer

