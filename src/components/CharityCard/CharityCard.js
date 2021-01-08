import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"
import "./CharityCard.css";

function CharityCard({ img, name}) {

    return (
        < div className = "mx-auto mb-3" >
            <div className="card charity-card__item">
                <img
                    className="card-img-top"
                    src={img}
                    alt=""
                />
                <div className="card-body text-center ">
                    <ul className="list-unstyled mb-4">
                        <li>{name}</li>
                        <li><Link
                        to={`/charities/${name}`}
                        className="btn btn-lg button-MAD-theme">
                        See Details
                        </Link></li>
                    </ul>
                </div>
            </div>
    </div >
)
}

export default CharityCard;