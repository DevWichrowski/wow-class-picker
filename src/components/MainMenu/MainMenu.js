import React from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import "../../styles/animations.scss";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import wowRngLogo from "../../assets/wowrng-logo.png"
import {NavLink} from "react-router-dom";

function MainMenu(props) {

    return (
        <div className="main-menu slide-in-top">
            <AppBar position="static" className="main-menu-bar">
                <Toolbar>
                    <img src={wowRngLogo} className="wow-rng-logo"/>
                    <div className="flex-container">
                        <div>
                            <NavLink exact to="/" activeClassName="activated-nav">
                                <Button className="nav-link">Class generator</Button>
                            </NavLink>
                            <NavLink to="advanced-mode" activeClassName="activated-nav">
                                <Button className="nav-link">Advanced generator</Button>
                            </NavLink>
                            <Button className="nav-link-disabled" disabled>Classic generator</Button>
                            <Button className="nav-link-disabled" disabled>Name generator</Button>
                        </div>

                        <div>
                            <NavLink to="/about" activeClassName="activated-nav">
                                <Button className="nav-link">About</Button>
                            </NavLink>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MainMenu;
