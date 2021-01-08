import React from "react";
import "./VolunteerRegistration.css";

function VolunteerRegistration({ id }) {

    return (
        <section className="container">
            <div className="title">
                <h2 className="text-center">Register</h2>
            </div>
            <form className="form volunteer-registration-form">
                <div className="col-sm form-column">
                    <div className="row">
                        <label htmlFor="name">
                            Name
                            <input
                                type="text"
                                name="name"
                                className="form-control rounded-pill"
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="email">
                            Email Address
                                <input
                                type="text"
                                name="email"
                                className="form-control rounded-pill"
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="mobile">
                            Mobile Number
                                <input
                                type="text"
                                name="mobile"
                                className="form-control rounded-pill"
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="numberVolunteers">
                            Number of volunteers
                                <input
                                type="text"
                                name="numberVolunteers"
                                className="form-control rounded-pill"
                            />
                        </label>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-lg button-MAD-theme my-3">
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </section>

    )
}

export default VolunteerRegistration;