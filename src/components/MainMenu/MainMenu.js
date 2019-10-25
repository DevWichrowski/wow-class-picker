import React, {Component} from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import "../../styles/animations.scss";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import wowRngLogo from "../../assets/wowrng-logo.png"
import {NavLink} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";

class MainMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            anchorEl: null,
        };
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {

        return (
            <div className="main-menu slide-in-top">
                <AppBar position="static" className="main-menu-bar">
                    <Toolbar>
                        <img src={wowRngLogo} className="wow-rng-logo"/>
                        {this.state.width >= 900 ? <div className="flex-container">
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
                            </div> :
                            <div className="mobile-menu">
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                                    <Icon className="mobile-menu-icon">menu</Icon>
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={this.state.anchorEl}
                                    keepMounted
                                    open={Boolean(this.state.anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </Menu>
                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default MainMenu;
