import { React, useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer className={isDarkMode ? "bg-dark" : "bg-light"}>
      <address className={`insta ${isDarkMode ? "text-light" : "text-dark"}`}>
        Intagram: @serrafy{" "}
      </address>
      <address className={`face ${isDarkMode ? "text-light" : "text-dark"}`}>
        Facebook: Serrafy
      </address>
    </footer>
  );
};

export default Footer;
