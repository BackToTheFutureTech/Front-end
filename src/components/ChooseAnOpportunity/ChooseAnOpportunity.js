import React from "react";
import VolunteerOpportunity from "../VolunteerOpportunity/VolunteerOpportunity";
import "./ChooseAnOpportunity.css";

function ChooseAnOpportunity() {
    return (
        <div>
            <div class="container">
                <h2 class="title choose-an-opportunity__title">
                    Where we need you
                </h2>

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