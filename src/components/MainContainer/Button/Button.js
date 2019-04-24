import React from 'react';
import './Button.scss';

export default function Button(props) {
	return (
		<div className="button" onClick={props.roll}>
			<p className="text">Roll da class</p>
		</div>
	);
}