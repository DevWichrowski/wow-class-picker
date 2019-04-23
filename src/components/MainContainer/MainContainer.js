import React, { Component } from 'react';
import './MainContainer.scss';
import Button from './Button/Button';
import ClassIcon from './ClassIcon/ClassIcon';

export class MainContainer extends Component {
	render() {
		return (
			<div className="main-container">
				<p className="text">Wow random class picker</p>
				<ClassIcon />
				<Button />
			</div>
		);
	}
}

export default MainContainer;
