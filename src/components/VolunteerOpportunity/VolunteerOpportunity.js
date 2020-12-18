import React from "react";
import "./VolunteerOpportunity.css";
import WrapPresentsImg from "../../Assets/WrapPresents.jpg";
import TidyGardenImg from "../../Assets/TidyGarden.jpg";
import ServeFoodImg from "../../Assets/ServeFood.jpg";
import SortClothingImg from "../../Assets/SortClothing.jpg";

function VolunteerOpportunity({ taskType, location, id }) {

    const taskImg = 
        {"Sort Clothes": SortClothingImg,
        "Gardening": TidyGardenImg,
        "Wrap Presents": WrapPresentsImg,   
        "Serve Food": ServeFoodImg
        }[taskType]

    return (
        < div className = "mx-auto mb-3" >
            <div className="card volunteer-requests__item">
                <img
                    className="card-img-top"
                    src={taskImg}
                    alt=""
                />
                <div className="card-body text-center ">
                    <ul className="list-unstyled mb-4">
                        <li className="volunteer-requests__task">{taskType}</li>
                        <li className="volunteer-requests__location">{location}</li>
                    </ul>
                    <a
                        href="./becomeavolunteer-Details.html"
                        className="btn btn-lg volunteer-requests__button">
                        See Details
                </a>
                </div>
            </div>
    </div >
)
}

export default VolunteerOpportunity;