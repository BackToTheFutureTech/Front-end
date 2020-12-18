import React, { useState } from "react"
import VolunteerOpportunity from "../VolunteerOpportunity/VolunteerOpportunity"
import "./ChooseAnOpportunity.css"

function ChooseAnOpportunity() {
    const [opportunities, setOpportunities] = useState(
        [{ id:1, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Bolton" }, { id:2, charity: "NSPCC", taskType: "Wrap Presents", numVolunteers: 5, date: "10/12/2020", location: "Bolton" },
        { id:3, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Manchester" },
        { id:4, charity: "Derrian House", taskType: "Gardening", numVolunteers: 5, date: "10/1/2021", location: "Crewe" },
        { id:5, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Crewe" },
        { id:6, charity: "NSPCC", taskType: "Wrap Presents", numVolunteers: 5, date: "10/1/2021", location: "Bolton" },
        { id:7, charity: "NSPCC", taskType: "Serve Food", numVolunteers: 5, date: "10/1/2021", location: "Bolton" }
        ])

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
                   { opportunities.map(opportunity => 
                        <VolunteerOpportunity 
                            taskType = {opportunity.taskType}
                            location = {opportunity.location}
                            id = {opportunity.id}
                        />
                    ) }
                </div>
            </div>
        </div>
    )
}

export default ChooseAnOpportunity;