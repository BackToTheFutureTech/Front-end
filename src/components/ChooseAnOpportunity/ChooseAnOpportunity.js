import React from "react"
import VolunteerOpportunity from "../VolunteerOpportunity/VolunteerOpportunity"
import "./ChooseAnOpportunity.css"

function ChooseAnOpportunity() {
    return (
        <div>
            <div className="container">
                <h2 className="choose-an-opportunity__title">
                    Where we need you
                </h2>

                <form>
                    <div className="form-group row my-4">
                        <label
                            className="col-sm-3 col-form-label"
                            htmlfor="searchText">Filter by location</label>
                        <div className="col-sm-9">
                            <input
                                className="form-control"
                                type="text"
                                id="searchText"
                                placeholder="Select Location"
                            />
                        </div>
                    </div>
                </form>

                <div className="row">
                    <VolunteerOpportunity />
                    <VolunteerOpportunity />
                    <VolunteerOpportunity />
                    <VolunteerOpportunity />
                    <VolunteerOpportunity />
                    <VolunteerOpportunity />
                </div>
            </div>
        </div>
    )
}

export default ChooseAnOpportunity;