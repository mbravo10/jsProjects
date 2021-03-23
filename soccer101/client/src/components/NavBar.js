import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="/home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/teams">Teams</Nav.Link>
        <Nav.Link href="/standings">Standings</Nav.Link>
        <Nav.Link href="/discussion">Forum</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signUp">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
}
