import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href= "https://www.instagram.com/jaivardhan215/"><InstagramIcon /></a>
        <a href="https://www.linkedin.com/in/jaivardhan-deshwal-8612a71aa/"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 deshwaljaivardhan@gmail.com</p>
    </div>
  );
}

export default Footer;
