import React, { useState } from 'react'
import "./OpportunityDetails.css"
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import VolunteerRegistration from "../VolunteerRegistration/VolunteerRegistration"
    
function OpportunityDetails({ allTaskImg, serverResponse }) {
// state
    const [isApply, setIsApply] = useState(false);
    let { id } = useParams();
    let opportunity = serverResponse.find(item => item.id === parseInt(id))
    let taskImg = allTaskImg[opportunity.taskType]

    return (
        <div className="container opportunity-details__details">

            <div className="row">
                {opportunity ? <>
                    <div className="col-12 col-lg-3">
                        <img src={taskImg} width="100%" alt="" />
                    </div>

                    <div className="col-12 col-lg-5">
                        <h6>{opportunity.taskType}</h6>
                        <h5>{opportunity.charity}</h5>
                        <h6>Volunteers Needed: <span className="badge badge-danger">{opportunity.numVolunteers}</span></h6>
                        <h6>Volunteers so far: <span className="badge opportunity-details__badge">0</span></h6>
                        <hr width="80%" align="left" />
                        <p>Description</p>
                        <p>{opportunity.description}</p><br />
                        <p>Address</p>
                        <p>{opportunity.address}</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="opportunity-details__apply-div">
                            <h4 className="text-center">Date: {opportunity.date}</h4>
                            <div className="container">
                                <div className="row my-4">
                                    <div className="col text-center">
                                        {isApply ? <VolunteerRegistration id={opportunity.id} /> :
                                            <button
                                                type="button"
                                                className="btn btn-lg button-MAD-theme"
                                                onClick={() => setIsApply(true)}
                                            >Sign up</button>
                                        }
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col text-center">
                                        <button
                                            type="button"
                                            className="btn button-MAD-theme "
                                        >Something else will happen</button>
                                    </div>
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
