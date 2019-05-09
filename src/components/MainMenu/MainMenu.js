import React from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MainMenu(props) {

    return (
        <div className="main-menu">
            <Navbar bg="dark" variant="dark" className="nav-menu">
                <Navbar.Brand href="/">WOW-RNG</Navbar.Brand>
                {window.innerWidth > 600 &&
                <>
                    <Nav className="mr-auto">
                        <NavLink to="/basic-mode" className="nav-link text-roller" activeClassName="active-page">Class generator</NavLink>
                        <NavLink to="/advanced-mode" activeClassName="active-page" className="nav-link">Advanced generator</NavLink>
                        <Nav.Link className="disabled-navlink" disabled>Classic generator</Nav.Link>
                        <Nav.Link className="disabled-navlink" disabled>Name generator</Nav.Link>
                    </Nav>

                    <Nav>
                        <NavLink to="/about" className="nav-link" activeClassName="active-page" >
                       About
                 </NavLink>
                     </Nav>
                     </>
                }
                {window.innerWidth <= 600 && 
                    <DropdownButton id="dropdown-basic-button" title="Menu" drop="left">
                    <Dropdown.Item href="/basic-mode">Class generator</Dropdown.Item>
                    <Dropdown.Item href="/advanced-mode">Advanced generator</Dropdown.Item>
                    <Dropdown.Item href="/about">About</Dropdown.Item>
                  </DropdownButton>
                }

            </Navbar>
        </div>
    );
}

export default MainMenu;
