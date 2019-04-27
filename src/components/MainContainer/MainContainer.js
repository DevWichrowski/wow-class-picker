import React, { Component } from 'react';
import './MainContainer.scss';
import Button from './Button/Button';
import ClassIcon from './ClassIcon/ClassIcon';
import { connect } from 'react-redux';
import FactionContainer from './FactionContainer/FactionContainer';
import RolesContainer from './RolesContainer/RolesContainer';
import Horde_icon from '../../assets/faction_icons/Horde_icon.png';

export class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			intervals: 30,
			currentClassIcon: this.props.classes[0].icon,
			currentClassName: null
		};
	}

	clearState = () => {
		this.setState({ intervals: 30 });
		this.setState({ currentClassName: null });
	};

	rollIcons = () => {
		this.clearState();

		const roller = setInterval(() => {
			this.setState({ currentClassIcon: this.props.classes[Math.floor(Math.random() * 11 + 1)].icon });
			this.setState({ intervals: this.state.intervals - 1 });

			if (this.state.intervals <= 0) {
				const randomClass = Math.floor(Math.random() * 11 + 1);
				clearInterval(roller);
				this.setState({
					currentClassName: this.props.classes[randomClass].name,
					currentClassIcon: this.props.classes[randomClass].icon
				});
			}
		}, 100);
	};

	render() {
		return (
			<div className="main-container">
				<h2 className="text">WoW random class picker</h2>
				<div className="faction-role-container">
					<FactionContainer />
					<RolesContainer />
				</div>
				<img className="race-icon" src={Horde_icon} />
				<ClassIcon image={this.state.currentClassIcon} />
				<h2 className="text">{this.state.currentClassName}</h2>
				<Button roll={() => this.rollIcons()} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	classes: state.races.classes
});

export default connect(mapStateToProps)(MainContainer);
