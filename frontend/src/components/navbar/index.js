import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <Navbar bg="white" variant="light">
            <Navbar.Brand as={Link} to="/">
                <img
                    src="/static/logo.png"
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="Prenes logo"
                /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Products</Nav.Link>
                    <Nav.Link as={Link} to="/services">Solutions</Nav.Link>
                    <Nav.Link as={Link} to="/services">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Quote</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navbar;