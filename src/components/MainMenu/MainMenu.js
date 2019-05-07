import React from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainMenu(props) {
    return (
        <div className="main-menu">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">WOW-RNG</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="text-roller" href="#home">Class generator</Nav.Link>
                    <Nav.Link href="#features">Advanced generator</Nav.Link>
                    <Nav.Link className="disabled-navlink" href="#pricing" disabled>Name generator</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MainMenu;