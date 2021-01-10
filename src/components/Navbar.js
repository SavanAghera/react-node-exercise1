import React from 'react';
import style from '../App.module.css';
import { NavDropdown, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Auth API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">
                            <Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link to="/Login">
                            <Nav.Link href="#link">Log in</Nav.Link></Link>
                        <Link to="/SignUp">
                            <Nav.Link href="#link">Sign up</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
