import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import MainContainer from './components/MainContainer/MainContainer';

function App(props) {
	return (
		<div className="App">
			<MainContainer />
		</div>
	);
}

const mapStateToProps = (state) => ({
	classes: state.classes.name
});

export default connect(mapStateToProps)(App);
