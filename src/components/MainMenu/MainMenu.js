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
        this.setState({width: window.outerWidth, height: window.outerHeight});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.setState({width: window.outerWidth, height: window.outerHeight});
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
                        {this.state.width >= 970 ? <div className="flex-container">
                                <div>
                                    <NavLink exact to="/" activeClassName="activated-nav">
                                        <Button className="nav-link">Class generator</Button>
                                    </NavLink>
                                    <NavLink to="advanced-mode" activeClassName="activated-nav">
                                        <Button className="nav-link">Advanced generator</Button>
                                    </NavLink>
                                    <NavLink to="nick-generator" activeClassName="activated-nav">
                                        <Button className="nav-link">Nick generator</Button>
                                    </NavLink>

                                </div>
                                <div className="about-donate-container">
                                    <a href="https://www.paypal.com/donate/?token=A59J3N7MHpJZOo-C7in0Fd0oFWXhXaPOcRFUaeCBoow1Pgq0GTPUE2xu-NNhQbu8OPYztG"
                                       rel="nofollow">
                                        <Button className="nav-link">Donate</Button>
                                    </a>
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
                                    className="mobile-true-menu"
                                    anchorEl={this.state.anchorEl}
                                    keepMounted
                                    open={Boolean(this.state.anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <NavLink exact to="/" activeClassName="activated-nav">
                                        <MenuItem onClick={this.handleClose}>Class generator</MenuItem>
                                    </NavLink>
                                    <NavLink to="advanced-mode" activeClassName="activated-nav">
                                        <MenuItem onClick={this.handleClose} className="mobile-text-black">Advanced
                                            generator</MenuItem>
                                    </NavLink>
                                    <NavLink to="nick-generator" activeClassName="activated-nav">
                                        <MenuItem onClick={this.handleClose} className="mobile-text-black">Nick
                                            generator</MenuItem>
                                    </NavLink>
                                    <NavLink to="about" activeClassName="activated-nav">
                                        <MenuItem onClick={this.handleClose}
                                                  className="mobile-text-black">About</MenuItem>
                                    </NavLink>
                                    <a href="https://www.paypal.com/donate/?token=A59J3N7MHpJZOo-C7in0Fd0oFWXhXaPOcRFUaeCBoow1Pgq0GTPUE2xu-NNhQbu8OPYztG"
                                       rel="nofollow">
                                        <MenuItem onClick={this.handleClose}
                                                  className="mobile-text-black">Donate</MenuItem>
                                    </a>
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
