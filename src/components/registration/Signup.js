import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="regup-container">
            <h3 className="reg-header">Login</h3>
            <form className="reg-form">
                <input type="text" className="reg-input" placeholder="First Name" />
                <input type="text" className="reg-input" placeholder="Last Name" />
                <input type="email" className="reg-input" placeholder="Email" />
                <input type="password" className="reg-input" placeholder="Password" />
                <Link to="/>" className="reg-btn">Login</Link>
            </form>
            <h4 className="reg-or">Or</h4>
            <div className="reg-option">
                <Link to="/" className="reg-social">G</Link>
                <Link to="/" className="reg-social">F</Link>
            </div>
            <p className="reg-text">Already register? <NavLink to="/login" className="reg-register">Login</NavLink></p>
        </div>
    )
}

export default Signup
