import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Serrafy.png";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo do Serrafy" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
