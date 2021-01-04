import React from 'react';
import "./Login.css"
import Logo from "../../Assets/logo.png";

const Login = () => {
    return (
        <div>
            <section className="home-intro">
                <div className="container p-3">
                    <div className="text-center">
                        <form className="form-signin" action=" adminportal.html">
                            <img
                                src={Logo}
                                height="150"
                                className="mb-4 ml-4"
                                alt=""
                            />
                            <label for="username" className="sr-only"> </label>
                            <input
                                type="text"
                                name="username"
                                className="form-control form-element rounded-pill"
                                placeholder="Username"
                            />
                            <label for="password" className="sr-only"> </label>
                            <input
                                type="password"
                                name="password"
                                className="form-control form-element rounded-pill"
                                placeholder="Password"
                            />
                            <button type="submit">Login</button>
                            <small className="text-muted d-block mt-3"
                            ><a href="#">Forgot your password?</a>
                            </small>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login