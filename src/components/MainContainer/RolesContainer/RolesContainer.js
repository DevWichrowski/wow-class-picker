import React, { Component } from 'react';
import './RolesContainer.scss';
import Tank_icon from '../../../assets/roles_icons/Tank_icon.jpg';
import Ranged_icon from '../../../assets/roles_icons/Ranged_icon.jpg';
import Melee_icon from '../../../assets/roles_icons/Melee_icon.jpg';
import Healer_icon from '../../../assets/roles_icons/Healer_icon.jpg';

export class RolesContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="roles-container">
            <h4 className="text">Choose yor role</h4>
				<div className="roles">
					<div className="roles">
						<div className="role-row">
							<img className="role-image" src={Tank_icon} />
						</div>
                        <div className="role-row">
							<img className="role-image" src={Ranged_icon} />
						</div>
                        <div className="role-row">
							<img className="role-image" src={Melee_icon} />
						</div>
                        <div className="role-row">
							<img className="role-image" src={Healer_icon} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RolesContainer;
