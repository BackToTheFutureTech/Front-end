import React from "react";
import "./VolunteerOpportunity.css";
import { Link } from "react-router-dom"
function VolunteerOpportunity({ thumbnail,taskImg, charity, taskType, location, id }) {
    const regex = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
    return (
        < div className="mx-auto mb-3" >
            <div className="card volunteer-requests__item">
                <img
                    className="card-img-top"
                    src={regex.test(thumbnail)?thumbnail:taskImg}
                    alt=""
                />
                <div className="card-body text-center ">
                    <ul className="list-unstyled mb-4">
                        <li className="volunteer-requests__charity">{charity}</li>
                        <li className="volunteer-requests__task">{taskType}</li>
                        <li className="volunteer-requests__location">{location}</li>
                    </ul>
                    <Link
                        to={`/becomeAVolunteer/${id}`}
                        className="btn btn-lg button-MAD-theme">
                        See Details
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default VolunteerOpportunity;
