import React, { Component } from 'react';
import './MainContainer.scss';
import Button from '../Button/Button';

export class MainContainer extends Component {
	render() {
		return (
			<div className="main-container">
				<p className="text">Wow random class picker</p>
				<Button />
			</div>
		);
	}
}

export default MainContainer;
