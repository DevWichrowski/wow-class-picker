import React from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MainMenu() {

    return (
        <div className="main-menu">
            <Navbar bg="dark" variant="dark" className="nav-menu">
                <Navbar.Brand href="/">WOW-RNG</Navbar.Brand>
                {window.innerWidth > 600 &&
                <>
                    <Nav className="mr-auto">
                        <NavLink to="/" className="nav-link text-roller" activeClassName="active-page">Class
                            generator</NavLink>
                        <NavLink to="/advanced-mode" activeClassName="active-page" className="nav-link">Advanced
                            generator</NavLink>
                        <Nav.Link className="disabled-navlink" disabled>Classic generator</Nav.Link>
                        <Nav.Link className="disabled-navlink" disabled>Name generator</Nav.Link>
                    </Nav>

                    <Nav>
                        <NavLink to="/about" className="nav-link" activeClassName="active-page">
                            About
                        </NavLink>
                    </Nav>
                </>
                }
                {window.innerWidth <= 600 &&
                <DropdownButton id="dropdown-basic-button" title="Menu" className="dropdown-but" alignRight>

                    <Dropdown.Item><NavLink
                        to="/"
                        className="nav-link text-roller"
                        activeClassName="active-page">
                        Class generator
                    </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item><NavLink to="/advanced-mode" activeClassName="active-page" className="nav-link">Advanced
                        generator</NavLink></Dropdown.Item>
                    <Dropdown.Item><Nav.Link className="disabled-navlink" disabled>About</Nav.Link>
                    </Dropdown.Item>
                </DropdownButton>
                }

            </Navbar>
        </div>
    );
}

export default MainMenu;
