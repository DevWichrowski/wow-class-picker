import React from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainMenu(props) {
    return (
        <div className="main-menu">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">WOW-RNG</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="text-roller" href="/">Class generator</Nav.Link>
                    <Nav.Link href="/advanced-mode">Advanced generator</Nav.Link>
                    <Nav.Link className="disabled-navlink" disabled>Classic generator</Nav.Link>
                    <Nav.Link className="disabled-navlink" disabled>Name generator</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href="/about">
                        About
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MainMenu;