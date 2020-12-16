import React from 'react'
import "./header.css"
export const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"
                ><img src="images/logo.png" height="75"
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
                            <a className="nav-link active" href="./home.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="howcanihelp.html">How Can I Help</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./becomeavolunteer.html"
                            >Become a Volunteer</a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./charities.html">Charities</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contacts</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2 rounded-pill"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                    <a className="btn navbar__login-button" href="login.html">Login</a>
                </div>
            </nav>
        </header>
    )
}
