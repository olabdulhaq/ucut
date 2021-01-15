import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__item">
                 <li className="footer__list">
                     <h4 className="quick__links-header">Quick Links</h4>
                     <div className="quick__links">
                         <p><NavLink to="/" className="quick__link">Home</NavLink></p>
                         <p><NavLink to="/" className="quick__link">About Us</NavLink></p>
                         <p><NavLink to="/" className="quick__link">Contact Us</NavLink></p>
                         <p><NavLink to="/" className="quick__link">Become A Barber</NavLink></p>
                     </div>
                 </li>
                 <li className="footer__list">
                 <h4 className="quick__links-header">Contact Us</h4>
                     <div className="quick__links">
                     <p className="contact__us">(+234) 703 9377 135</p>
                     <p className="contact__us">info@ucutz.com</p>
                     <p className="contact__us">Nigeria</p>
                     </div>
                 </li>
             </ul>
        </footer>
    )
}

export default Footer;