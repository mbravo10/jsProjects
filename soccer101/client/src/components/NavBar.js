import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";

export function NavBar({ isAuthenticated }) {
  if (isAuthenticated) {
    return (
      <Navbar expand="lg" style={{ background: "#1f2833" }}>
        <Navbar.Brand href="/home" style={{ color: "#66fcf1" }}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/teams" style={{ color: "#66fcf1" }}>
              Teams
            </Nav.Link>
            <Nav.Link href="/standings" style={{ color: "#66fcf1" }}>
              Standings
            </Nav.Link>
            <Nav.Link href="/discussion" style={{ color: "#66fcf1" }}>
              Forum
            </Nav.Link>
            <Nav.Link href="/profile" style={{ color: "#66fcf1" }}>
              Profile
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/logout" style={{ color: "#66fcf1" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar expand="lg" style={{ background: "#1f2833" }}>
        <Navbar.Brand href="/home" style={{ color: "#66fcf1" }}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/teams" style={{ color: "#66fcf1" }}>
              Teams
            </Nav.Link>
            <Nav.Link href="/standings" style={{ color: "#66fcf1" }}>
              Standings
            </Nav.Link>
            <Nav.Link href="/discussion" style={{ color: "#66fcf1" }}>
              Forum
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" style={{ color: "#66fcf1" }}>
              Login
            </Nav.Link>
            <Nav.Link href="/signUp" style={{ color: "#66fcf1" }}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(NavBar);
