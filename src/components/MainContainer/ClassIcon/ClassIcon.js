import React, { Component } from 'react'
import './ClassIcon.scss';

export class ClassIcon extends Component {
  render() {
    return (
      <div className="class-icon">
        <img src={require('../../../assets/classes_icons/DH_icon.png')} id="image"/>
      </div>
    )
  }
}

export default ClassIcon
