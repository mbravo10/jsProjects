import React, { useState } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default function NavBar(props){
    return (
        <Navbar bg="primary" expand="lg" variant="dark" size="sm">
            <Navbar.Brand href="/home">Weather Daily</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/stocks">Stocks</Nav.Link>
        </Nav>
        
        <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
};