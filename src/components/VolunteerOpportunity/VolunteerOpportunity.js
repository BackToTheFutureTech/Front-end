import React from "react";
import "./VolunteerOpportunity.css";

function VolunteerOpportunity({ id, title, location, img }) {
    return (
        <div className="col-sm">
            <div className="card volunteer-requests__item">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body text-center ">
                    <ul className="list-unstyled mb-4">
                        <li className="volunteer-requests__task">{title}</li>
                        <li className="volunteer-requests__location">{location}</li>
                    </ul>
                    <a
                        href={`./becomeavolunteer-Details.html?${id}`}
                        className="btn btn-lg volunteer-requests__button"
                    >
                        See Details
          </a>
                </div>
            </div>
        </div>
    );
}

export default VolunteerOpportunity;
