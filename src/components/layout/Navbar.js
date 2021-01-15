import React, { useState } from "react";
// import barb8 from '../../img/barb8.jpg'
// import notification from '../../img/notification.svg'
import { Link } from 'react-router-dom'

import './layout.css'
import SlideShow from './Slideshow'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav);
    };
    return (
        <>
        <header className="header">
            <Link to="/" className="nav-logo">uCUTZ</Link>

            <nav className="nav">
                <ul 
                    className={`nav-item ${
                    showNav ? "sidenav" : ""
                    }`}
                >
                    <li className={`nav-list ${showNav ? "sidenav-link" : ""}`}><NavLink to="/" className="nav-link">About</NavLink></li>
                    <li className={`nav-list ${showNav ? "sidenav-link" : ""}`}><NavLink to="/" className="nav-link">Contact</NavLink></li>
                    <li className={`nav-list ${showNav ? "sidenav-link" : ""}`}><NavLink to="/" className="nav-link">Login</NavLink></li>
                    <li className={`nav-list ${showNav ? "sidenav-link" : ""}`}><NavLink to="/" className="nav-link">Sign up</NavLink></li>
                </ul>
                <i
                    className={`fa fa-bars _toggle-nav-bars  fa-2x ${
                    showNav ? "fa fa-times _toggle-nav-bars  fa-2x" : ""
                    }`}
                    onClick={handleShowNav}
                ></i>
            </nav>  
        </header>
        <SlideShow />
        </>
    )
}

export default Navbar


// {/* <form className="search">
//                 <input type="text" className="search__input" placeholder="Looking for a barber?" />
//             </form> */}

// {/* <div className="nav__icon-box">
//                     <img src={notification} alt="" className="nav__icon" />
//                 </div>
//                 <div className="nav__icon-box">
//                     <img src={barb8} alt="" className="nav__user-photo" />
//                 </div> */}
