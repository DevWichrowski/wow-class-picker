import React from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MainMenu(props) {
    return (
        <div className="main-menu">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">WOW-RNG</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink className="text-roller" to="/basic-mode" activeClassName="active-page" onlyActiveOnIndex className="nav-link">Class generator</NavLink>
                    <NavLink to="/advanced-mode" activeClassName="active-page" onlyActiveOnIndex className="nav-link">Advanced generator</NavLink>
                    <Nav.Link className="disabled-navlink" disabled>Classic generator</Nav.Link>
                    <Nav.Link className="disabled-navlink" disabled>Name generator</Nav.Link>
                </Nav>

                <Nav>
                    <NavLink to="/about" activeClassName="active-page" onlyActiveOnIndex>
                        About
                    </NavLink>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MainMenu;
