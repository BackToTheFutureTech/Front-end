import React, { useState } from 'react'
import "./OpportunityDetails.css"
import { useParams, Link } from "react-router-dom";
import VolunteerRegistration from "../VolunteerRegistration/VolunteerRegistration"

function OpportunityDetails({ allTaskImg, serverResponse, signupVolunteer }) {
    // state
    const [isApply, setIsApply] = useState(false);
    let { id } = useParams();
    let opportunity = serverResponse.find(item => item.id === parseInt(id))
    let taskImg = allTaskImg[opportunity.taskType]

    return (
        <div className="container opportunity-details__details mt-5 mb-5">

            <div className="row">
                {opportunity ? <>
                    <div className="col-12 col-lg-3">
                        <img src={opportunity.thumbnail ? opportunity.thumbnail : taskImg} width="100%" alt="" />
                    </div>

                    <div className="col-12 col-lg-5">
                        <Link
                            to={`/charities/${opportunity.charity}`}
                            className="btn opportunity-details__link">
                            <h3>{opportunity.charity}</h3>
                        </Link>
                        <h6>{opportunity.taskType}</h6>
                        <h6>Volunteers Needed: <span className="badge badge-danger">{opportunity.numVolunteers}</span></h6>
                        <h6>Volunteers so far: <span className="badge opportunity-details__badge">{opportunity.numRegVolunteers}</span></h6>
                        <hr width="80%" align="left" />
                        <p>Description</p>
                        <p>{opportunity.description}</p><br />
                        <p>Address</p>
                        <p>{opportunity.address1}, {opportunity.address2}, {opportunity.location}, {opportunity.postcode}</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="opportunity-details__apply-div">
                            <h4 className="text-center">Date : {new Date(opportunity.date).toDateString()}</h4>
                            <div className="container">
                                <div className="col text-center">
                                    {isApply ? <VolunteerRegistration id={opportunity.id} signupVolunteer={signupVolunteer} /> :
                                        <button
                                            type="button"
                                            className="btn btn-lg button-MAD-theme"
                                            onClick={() => setIsApply(true)}
                                        >Sign up</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div></>
                    : <h6>No Opportunities were found</h6>
                }

            </div>
        </div>
    )
}

export default OpportunityDetails
