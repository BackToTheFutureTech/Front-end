import React from "react";
import "./CharityCard.css";

function CharityCard({ img, name, id, handleSelect}) {

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
                    </ul>
                    <button
                        type="button"
                        onClick={() => handleSelect(id)}
                        className="btn btn-lg button-MAD-theme">
                        See Details
                    </button>
                </div>
            </div>
    </div >
)
}

export default CharityCard;