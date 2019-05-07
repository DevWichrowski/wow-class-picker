import React from 'react';
import './ButtonRoller.scss';

export default function ButtonRoller(props) {
	return (
		<div className="button-mode-wow" onClick={props.roll}>
			<p className="text-roller">Roll class</p>
		</div>
	);
}
