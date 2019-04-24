import React, { Component } from 'react';
import './MainContainer.scss';
import Button from './Button/Button';
import ClassIcon from './ClassIcon/ClassIcon';
import { connect } from 'react-redux';

export class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			intervals: 50,
			currentIcon: this.props.classes[0].icon,
			currentClassName: this.props.classes[0].icon
		};
	}

	rollIcons = () => {
		const roller = setInterval(() => {
			this.setState({ currentIcon: this.props.classes[Math.floor(Math.random() * 11 + 1)].icon });
			this.setState({ intervals: this.state.intervals - 1 });

			if (this.state.intervals <= 0) {
				clearInterval(roller);
			}
		}, 80);
	};

	render() {
		return (
			<div className="main-container">
				<p className="text">Wow random class picker</p>
				<ClassIcon image={this.state.currentIcon} />
				<Button roll={() => this.rollIcons()} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	classes: state.classes.classes
});

export default connect(mapStateToProps)(MainContainer);
