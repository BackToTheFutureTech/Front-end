import React from 'react'
import "./OpportunityDetails.css"

function OpportunityDetails({ taskImg, handleReset, opportunity }) {

    return (
        <div className="container opportunity-details__details">

            <div className="row">
                <div className="col-4">
                    <img src={taskImg} width="100%" alt="" />
                </div>
                <div className="col-5">
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
                <div className="col-3">
                    <div className="opportunity-details__apply-div">
                        <p className="text-center">Date: {opportunity.date}</p>
                        <div className="container">
                            <div className="row my-4">
                                <div className="col text-center">
                                    <button
                                        type="button"
                                        className="btn btn-lg button-MAD-theme"
                                    >Sign up</button>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col text-center">
                                    <button
                                        type="button"
                                        className="btn button-MAD-theme "
                                        onClick={handleReset}
                                    >Return to List</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpportunityDetails
