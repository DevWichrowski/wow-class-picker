import React from 'react';
import './SwitchMode.scss';
import Switch from "react-switch";
import { connect } from 'react-redux';
import { handleSwitch } from '../../../store/actions/racesActions';

const SwitchMode = (props) =>{
  return (
    <div className="switch-mode">
      <p className="text">Advanced mode: </p>
      <br />
      <Switch checked={props.advancedMode} onChange={() => props.handleSwitch()} onColor='#e2a233'/>
      {console.log(props)}
    </div>
  )
}

const mapStateToProps = (state) => ({
    advancedMode: state.races.advancedMode
});

const mapDispatchToProps = (dispatch) => ({
	handleSwitch: () => dispatch(handleSwitch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchMode)