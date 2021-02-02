import React, { useState } from "react";
import "./VolunteerRegistration.css";

function VolunteerRegistration({ id, signupVolunteer }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [numVolunteers, setNumVolunteers] = useState(1)

    const handleClick = () => {
        const volunteer = {
            opportunityId: id,
            volunteerName: name,
            email: email,
            mobile: mobile,
            groupNum: parseInt(numVolunteers)
        }
        console.log(volunteer)
        signupVolunteer(volunteer)
        // reset input fields
        setName("")
        setEmail("")
        setMobile("")
        setNumVolunteers(1)
    }

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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="add-volunteer-name"
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="add-volunteer-email"
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
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                id="add-volunteer-mobile"
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
                                value={numVolunteers}
                                onChange={(e) => setNumVolunteers(e.target.value)}
                                id="add-volunteer-numVolunteers"
                                type="text"
                                name="numberVolunteers"
                                className="form-control rounded-pill"
                            />
                        </label>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <button 
                                type="button"
                                className="btn btn-lg button-MAD-theme my-3"
                                onClick={() => handleClick()}>
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