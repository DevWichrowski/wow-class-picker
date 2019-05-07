import React from 'react';
import '../MainMenu/MainMenu.scss';
import '../AdvancedMode/AdvancedMode.scss';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainMenu(props) {
    return (
        <div className="main-menu">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="text-roller" href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MainMenu;