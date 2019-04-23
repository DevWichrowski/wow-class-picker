import React from 'react';
import './App.scss';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>{props.classes}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
	classes: state.classes.name
});

export default connect(mapStateToProps)(App);
