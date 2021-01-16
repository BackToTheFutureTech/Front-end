import React from 'react'
import Logo from './../../Assets/logo.png'
import { NavLink, useHistory } from "react-router-dom";
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ children }) => {
    const { isAuthenticated } = useAuth0();

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"
                ><img src={Logo} height="75" alt="logo Image"
                    /></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/howToHelp">How Can I Help</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/becomeAVolunteer">Volunteer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/charities">Charities</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/contacts">Contacts</NavLink>
                        </li>
                        { isAuthenticated && (<li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/adminportal">Admin</NavLink>
                        </li>) }
                    </ul>
                    {children}
                    { isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </div>
            </nav>
        </header>
    )
};
export default Header;