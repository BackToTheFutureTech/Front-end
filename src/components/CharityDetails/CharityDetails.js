import React from 'react'
import "./CharityDetails.css"

function CharityDetails({ charity }) {

    return (
        <div className="container pt-5">
            <div className="row">
                <h2 className="charity-details__title">{charity.name}</h2>
            </div>

            <div className="charity-details">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <img src={charity.img} width="100%" alt="" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h1>{charity.name}</h1>
                        <h6>Active Projects: <span className="badge badge-danger">{charity.numActiveProjects}</span></h6>
                        <h6>Completed Projects: <span className="badge charity-details__badge">{charity.numCompletedProjects}</span></h6>
                        <hr />
                        <p>Description</p>
                        <p>{charity.description}</p>
                        <p>Address</p>
                        <p>{charity.address}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CharityDetails
