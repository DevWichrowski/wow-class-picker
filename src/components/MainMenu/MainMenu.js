import React from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import wowRngLogo from "../../assets/wowrng-logo.png"

function MainMenu() {

    return (
        <div className="main-menu">
            <AppBar position="static" className="main-menu-bar">
                <Toolbar>
                    <img src={wowRngLogo} className="wow-rng-logo" />
                    <Button className="nav-link">Class generator</Button>
                    <Button className="nav-link">Advanced generator</Button>
                    <Button className="nav-link">Classic generator</Button>
                    <Button className="nav-link">Name generator</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MainMenu;
