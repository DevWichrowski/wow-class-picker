import React, { Component } from 'react'
import './ClassIcon.scss';

export class ClassIcon extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <div className="class-icon">
        <img src={this.props.image} id="image"/>
      </div>
    )
  }
}

export default ClassIcon
