import React from "react";
import Dribbble from "../../img/Dribbble.svg";
import Facebook from "../../img/Facebook.svg";
import Twitter from "../../img/Twitter.svg";
import YouTube from "../../img/YouTube.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row-wrapper">
                <ul className="footer__item">
                    <li className="footer__list footer__social">
                        <NavLink to="/" className="social__links"><img src={Facebook} alt="facbook link" className="social__icon" /></NavLink>
                        <NavLink to="/" className="social__links"><img src={Twitter} alt="facbook link"  className="social__icon"/></NavLink>
                        <NavLink to="/" className="social__links"><img src={YouTube} alt="facbook link"  className="social__icon"/></NavLink>
                        <NavLink to="/" className="social__links"><img src={Dribbble} alt="facbook link" className="social__icon" /></NavLink>
                    </li>
                    <li className="footer__list">
                        <h4 className="quick__links-header">Quick Links</h4>
                        <div className="quick__links">
                            <p><NavLink to="/" className="quick__link">Home</NavLink></p>
                            <p><NavLink to="/" className="quick__link">Courses</NavLink></p>
                            <p><NavLink to="/" className="quick__link">About Us</NavLink></p>
                            <p><NavLink to="/" className="quick__link">Contact Us</NavLink></p>
                            <p><NavLink to="/" className="quick__link">Become A Tutor</NavLink></p>
                        </div>
                    </li>
                    <li className="footer__list">
                    <h4 className="quick__links-header">Contact Us</h4>
                        <div className="quick__links">
                        <p className="contact__us">(+55) 254 254 254</p>
                        <p className="contact__us">info@tutorhub.com</p>
                        <p className="contact__us">Lagos, Nigeria</p>
                        </div>
                    </li>
                    <li className="footer__list tcfaq">
                        <NavLink to="/" className="terms tc">Terms and Conditions</NavLink>
                        <NavLink to="/" className="term faq">Faq</NavLink>
                    </li>
                </ul>
            </div>
            <div className="footer__bottom">
                <div className="footer__rights">All Right are Reserved | TEAM ACE</div>
                <div className="footer__policy">
                    <p>Privacy Policy</p>
                    <p >Site <strong>Credit</strong></p>
                </div>

                
            </div>
        </footer>
    )
}

export default Footer;
