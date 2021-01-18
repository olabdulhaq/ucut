import React, { useState } from "react";
// import barb8 from '../../img/barb8.jpg'
// import notification from '../../img/notification.svg'
import { Link } from 'react-router-dom'

import './layout.css'

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
                    <li className={`nav-list ${showNav ? "sidenav-link" : ""}`}><Link to="/" className="nav-link">About</Link></li>
                    <li className={`nav-list ${showNav ? "sidenav-link" : ""}`}><Link to="/" className="nav-link">Contact</Link></li>
                    <li className={`nav-list ${showNav ? "sidenav-link" : ""}`}><Link to="/login" className="nav-link">Login</Link></li>
                    <li className={`nav-list ${showNav ? "sidenav-link" : ""}`}><Link to="/signup" className="nav-link">Sign up</Link></li>
                </ul>
                <i
                    className={`fa fa-bars _toggle-nav-bars  fa-2x ${
                    showNav ? "fa fa-times _toggle-nav-bars  fa-2x" : ""
                    }`}
                    onClick={handleShowNav}
                ></i>
            </nav>  
        </header>
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
