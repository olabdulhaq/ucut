import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './registration.css'

const Login = () => {
    return (
        <div className="reg-container">
            <h3 className="reg-header">Login</h3>
            <form className="reg-form">
                <input type="email" className="reg-input" placeholder="Email" />
                <input type="password" className="reg-input" placeholder="Password" />
                <Link to="/>" className="reg-btn">Login</Link>
            </form>
            <h4 className="reg-or">Or</h4>
            <div className="reg-option">
                <Link to="/" className="reg-social"><i className="awfont fa fa-google"></i></Link>
                <Link to="/" className="reg-social"><i className="awfont fa fa-facebook"></i></Link>
            </div>
            <p className="reg-text">New to uCutz? <NavLink to="/signup" className="reg-register">Register</NavLink></p>
        </div>
    )
}

export default Login
