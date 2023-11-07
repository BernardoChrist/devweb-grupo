import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Serrafy.png";
import "./style.css";
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const { isDarkMode, handleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className={isDarkMode ? "bg-dark" : "bg-light"}>
      <Container>
        <Link to="/">
          <img width="100px" src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={isDarkMode ? "text-light" : "text-dark"} to="/">
              Home
            </Link>
            <Link
              className={isDarkMode ? "text-light" : "text-dark"}
              to="/contato"
            >
              Contato
            </Link>
            <Link
              className={isDarkMode ? "text-light" : "text-dark"}
              to="/serrafy"
            >
              Músicas
            </Link>

            <Link
              className={isDarkMode ? "text-light" : "text-dark"}
              to="/sobre"
            >
              Sobre
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link
          className={`botao-login ${isDarkMode ? "text-light" : "text-dark"}`}
          to="/login"
        >
          Login
        </Link>
        <button className="darkmode" onClick={handleTheme}>
          dark
        </button>
      </Container>
    </Navbar>
  );
}

export default Header;
