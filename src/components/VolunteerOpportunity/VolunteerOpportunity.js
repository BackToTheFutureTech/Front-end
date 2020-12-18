import React from "react";
import "./VolunteerOpportunity.css";
import WrapPresents from "../../Assets/WrapPresents.jpg";
import TidyGarden from "../../Assets/TidyGarden.jpg";
import ServeFood from "../../Assets/ServeFood.jpg";
import SortClothing from "../../Assets/SortClothing.jpg";

function VolunteerOpportunity() {
    return (
        <div className="mx-auto">
            <div className="card volunteer-requests__item">
                <img
                    className="card-img-top"
                    src={TidyGarden}
                    alt=""
                />
                <div className="card-body text-center ">
                    <ul className="list-unstyled mb-4">
                        <li className="volunteer-requests__task">
                            Clear out Garden</li>
                        <li className="volunteer-requests__location">
                            Bolton - Derian House
                    </li>
                    </ul>
                    <a
                        href="./becomeavolunteer-Details.html"
                        className="btn btn-lg volunteer-requests__button">
                        See Details
                </a>
                </div>
            </div>
        </div>
    )
}

export default VolunteerOpportunity;