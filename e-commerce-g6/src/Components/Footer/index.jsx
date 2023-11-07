import { React, useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../context/ThemeContext";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsSpotify, BsTiktok } from "react-icons/bs";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer className={isDarkMode ? "bg-dark" : "bg-light"}>
      <h3 className={isDarkMode ? "text-light" : "text-dark"}>© Serrafy</h3>

      <address
        className={`logos gap-2 ${isDarkMode ? "text-light" : "text-dark"}`}
      >
        <AiFillInstagram />
        <AiFillFacebook />
        <AiFillYoutube />
        <BsSpotify />
        <BsTiktok />
        <AiOutlineTwitter />
        <AiFillLinkedin />
      </address>
    </footer>
  );
};

export default Footer;
