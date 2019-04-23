import React, { Component } from 'react';
import './MainContainer.scss';
import Button from './Button/Button';
import ClassIcon from './ClassIcon/ClassIcon';

export class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			curentImageIndex: 0,
			timer: 5,
			selectedImage:
				'http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg'
		};
	}

	images = [
		'http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg',
		'https://ichef.bbci.co.uk/news/660/cpsprodpb/EF3C/production/_100844216_mediaitem100843403.jpg'
	];

	rollIcon = () => {
		let newTimer = this.state.timer;

		setInterval(() => {
			this.setState((prevState) => {
				if (prevState.selectedImage === this.images[0]) {
					return {
						selectedImage: this.images[1]
					};
				} else {
					return {
						selectedImage: this.images[0]
					};
				}
			});
		}, 100);
	};

	render() {
		return (
			<div className="main-container">
				<p className="text">Wow random class picker</p>
				<ClassIcon image={this.state.selectedImage} />
				<Button roll={this.rollIcon} />
			</div>
		);
	}
}

export default MainContainer;
