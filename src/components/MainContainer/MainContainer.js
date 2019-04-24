import React, { Component } from 'react';
import './MainContainer.scss';
import Button from './Button/Button';
import ClassIcon from './ClassIcon/ClassIcon';
import { connect } from 'react-redux';

export class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// curentImageIndex: 0,
			// timer: 5,
			// selectedImage: this.props.classes[0].icon
			currentIcon: this.props.classes[0].icon,
		};
	}
	
	rollIcons = (timer) => {
		setInterval(() =>{
			this.setState({currentIcon: this.props.classes[Math.floor((Math.random() * 11) + 1)].icon})
			timer -= 1;
			console.log(timer);
		}, 150);	
	};

	render() {
		return (
			<div className="main-container">
				<p className="text">Wow random class picker</p>
				<ClassIcon image={this.state.currentIcon} />
				<Button roll={() => this.rollIcons(5)} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	classes: state.classes.classes
});

export default connect(mapStateToProps)(MainContainer);
