import React from 'react';
import "./Login.css"
import Logo from "../../Assets/logo.png";
import auth from "../Auth/Auth"
import {useHistory} from "react-router-dom"

const Login = () => {
    let history = useHistory();
    return (
        <div>
            <section className="home-intro">
                <div className="container p-3">
                    <div className="text-center">
                        <form className="form-signin">
                            <img
                                src={Logo}
                                height="150"
                                className="mb-4 ml-4"
                                alt=""
                            />
                            <label htmlFor="username" className="sr-only"> </label>
                            <input
                                type="text"
                                name="username"
                                className="form-control form-element rounded-pill"
                                placeholder="Username"
                            />
                            <label htmlFor="password" className="sr-only"> </label>
                            <input
                                type="password"
                                name="password"
                                className="form-control form-element rounded-pill"
                                placeholder="Password"
                            />
                            <button onClick={ (e)=>{
                                e.preventDefault();
                                auth.Login(()=>{
                                history.push("/adminportal")
                            })}}>Login</button>
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
