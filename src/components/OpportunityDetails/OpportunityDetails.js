import React from 'react'
import WrapPresentsImg from './../../Assets/WrapPresents.jpg'
import TidyGardenImg from "../../Assets/TidyGarden.jpg";
import ServeFoodImg from "../../Assets/ServeFood.jpg";
import SortClothingImg from "../../Assets/SortClothing.jpg";

function OpportunityDetails({ handleReset, opportunity }) {
    const taskImg = 
        {"Sort Clothes": SortClothingImg,
        "Gardening": TidyGardenImg,
        "Wrap Presents": WrapPresentsImg,   
        "Serve Food": ServeFoodImg
        }[opportunity.taskType]

    return (
        <div className="container details">

            <div className="row">
                <div className="col-4">
                    <img src={taskImg} width="100%" alt="" />
                </div>
                <div className="col-5">
                    <h6>{opportunity.taskType}</h6>
                    <h5>{opportunity.charity}</h5>
                    <h6>Volunteers Needed: <span className="badge badge-danger">{opportunity.numVolunteers}</span></h6>
                    <h6>Volunteers so far: <span className="badge badge-primary">0</span></h6>
                    <hr width="80%" align="left" />
                    <p>Description</p>
                    <p>{opportunity.description}</p><br />
                    <p>Address</p>
                    <p>{opportunity.address}</p>
                </div>
                <div className="col-3">
                    <div className="apply">
                        <p className="text-center">Date: {opportunity.date}</p>
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <button 
                                        type="button" 
                                        className="btn btn-lg btn-primary"
                                        >Sign up</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <button 
                                        type="button" 
                                        className="btn btn-lg btn-primary "
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
