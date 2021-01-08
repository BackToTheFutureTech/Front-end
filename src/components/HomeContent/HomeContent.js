import React from "react"
import { Link } from "react-router-dom"
import "./HomeContent.css";

function HomeContent({ children }) {

    return (
        <div className="container p-3">
            <h2 className="home-content__title">
                Latest Volunteer Opportunities
                </h2>

            <div className="row">
                {children}
            </div>
            <Link
                to={`/becomeAVolunteer`}
                className="btn btn-lg btn-block button-MAD-theme">
                Click here for more
            </Link>

        </div>
    )

}

export default HomeContent;