import React from "react";
import { Link } from "react-router-dom"
import "./CharityCard.css";

function CharityCard({ imageUrl, charityName }) {

    return (
        < div className="mx-auto mb-3" >
            <div className="card charity-card__item">
                <img
                    className="card-img-top"
                    src={imageUrl}
                    alt=""
                />
                <div className="card-body text-center ">
                    <ul className="list-unstyled mb-4">
                        <li>{charityName}</li>
                    </ul>
                    <Link
                        to={`/charities/${charityName}`}
                        className="btn btn-lg button-MAD-theme">
                        See Details
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default CharityCard;