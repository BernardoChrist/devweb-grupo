import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Serrafy.png";
import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Link to="/">
          <img width="100px" src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="header-home" to="/">
              Home
            </Link>
            <Link to="/contato">Contato</Link>
            <Link to="/serrafy">Músicas</Link>
          </Nav>
        </Navbar.Collapse>
        <Link className="botao-login" to="/login">
          Login
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
