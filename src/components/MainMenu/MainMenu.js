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
                                    <Button className="nav-link-disabled" disabled>Name generator</Button>
                                </div>
                                <div className="about-donate-container">
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick"/>
                                        <input type="hidden" name="hosted_button_id" value="QXAZSELTGRAT2"/>
                                        <Button name="submit" type="submit"
                                                title="PayPal - The safer, easier way to pay online!"
                                                alt="Donate with PayPal button" rel="nofollow"
                                                className="nav-link">Donate</Button>
                                    </form>
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
                                    <MenuItem onClick={this.handleClose} disabled>Name generator</MenuItem>
                                    <NavLink to="about" activeClassName="activated-nav">
                                        <MenuItem onClick={this.handleClose}
                                                  className="mobile-text-black">About</MenuItem>
                                    </NavLink>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="mobile-text-black">
                                        <input type="hidden" name="cmd" value="_s-xclick"/>
                                        <input type="hidden" name="hosted_button_id" value="QXAZSELTGRAT2"/>
                                        <Button name="submit" type="submit"
                                                title="PayPal - The safer, easier way to pay online!"
                                                alt="Donate with PayPal button" rel="nofollow"
                                                className="mobile-text-black">Donate</Button>
                                    </form>
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
