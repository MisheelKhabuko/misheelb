import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://instagram.com/misheel0809" target="_blank"><InstagramIcon /></a>
                <a href="https://twitter.com/Misheel0809" target="_blank"> <TwitterIcon /></a>
                <a href="https://www.facebook.com/misheel.slim" target="_blank"><FacebookIcon /></a>
            </div>
            <p> &copy; 2022 misheelkhabuko.github.io/misheelb</p>
        </div>
    );
}

export default Footer;