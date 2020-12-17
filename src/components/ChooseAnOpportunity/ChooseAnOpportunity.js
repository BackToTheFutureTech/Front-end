import React from "react";
import VolunteerOpportunity from "../VolunteerOpportunity/VolunteerOpportunity";
import "./ChooseAnOpportunity.css";

function ChooseAnOpportunity() {
    return (
        <div>
            <div className="container">
                <h2 className="title choose-an-opportunity__title">
                    Where we need you
                </h2>


                <form className="form-inline my-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search by Location"
                    />
                </form>

                <div className="row">
                    <div className="col-sm">
                        <VolunteerOpportunity />
                    </div>

                    <div className="col-sm">
                        <VolunteerOpportunity />
                    </div>
                    <div className="col-sm">
                        <VolunteerOpportunity />
                    </div>

                    <div className="col-sm">
                        <VolunteerOpportunity />
                    </div>
                    <div className="col-sm">
                        <VolunteerOpportunity />
                    </div>

                    <div className="col-sm">
                        <VolunteerOpportunity />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseAnOpportunity;