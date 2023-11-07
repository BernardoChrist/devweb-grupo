import React from "react";
import "./style.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsSpotify, BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <h3>© Serrafy</h3>

      <address className="logos">
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
