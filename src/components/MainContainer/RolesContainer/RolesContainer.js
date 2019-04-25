import React, { Component } from 'react';
import './RolesContainer.scss';
import Horde_icon from '../../../assets/faction_icons/Horde_icon.png';

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
							<img className="role-image" src={Horde_icon} />
						</div>
                        <div className="role-row">
							<img className="role-image" src={Horde_icon} />
						</div>
                        <div className="role-row">
							<img className="role-image" src={Horde_icon} />
						</div>
                        <div className="role-row">
							<img className="role-image" src={Horde_icon} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RolesContainer;
