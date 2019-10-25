import React, { Component } from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import "../../styles/animations.scss";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import wowRngLogo from "../../assets/wowrng-logo.png"
import { NavLink } from "react-router-dom";
import Dropdown from "antd/es/dropdown";
import Menu from "antd/es/menu";

class MainMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			width: 0,
			height: 0
		};
	}

	updateDimensions = () => {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	};

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}

	render() {

		const menu = (
			<Menu>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
						1st menu item
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
						2nd menu item
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
						3rd menu item
					</a>
				</Menu.Item>
			</Menu>
		);

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
							<Dropdown overlay={menu} placement="bottomRight">
								<Button>bottomRight</Button>
							</Dropdown>
						}
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default MainMenu;
