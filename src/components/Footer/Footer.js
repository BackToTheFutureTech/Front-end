import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-top p-3">
                <div className="container ml-3 p-3">
                    Connect with us
            <div className="my-3">
                        <i href="/toDo.html" className="fa fa-facebook"></i>
                        <i href="/toDo.html" className="fa fa-twitter"></i>
                        <i href="/toDo.html" className="fa fa-instagram"></i>
                        <i href="/toDo.html" className="fa fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className="footer-bottom p-3">
                <div className="container ml-3">
                    <div className="row">
                        <div className="p-3">
                            <img
                                className="footer__logo"
                                src="../../logo.png"
                                alt=""
                                height="50px"
                            />
                        </div>
                        <div className="p-2">
                            <ul className="list-unstyled">
                                <li>
                                    <a className="footer__privacy-policy" href="/toDo.html">Privacy policy</a>
                                </li>
                                <li className="footer__copyright">
                                    <small
                                    >Copyright 2020 Tech Returns. All rights reserved.</small
                                    >
                                </li>
                                <li className="footer__copyright">
                                    <small>Created by Back to the Future</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
