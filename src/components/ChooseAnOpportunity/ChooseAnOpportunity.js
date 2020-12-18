import React, { useState } from "react"
import VolunteerOpportunity from "../VolunteerOpportunity/VolunteerOpportunity"
import "./ChooseAnOpportunity.css"

function ChooseAnOpportunity() {
    const opportunities =
        [{ id: 1, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Bolton" }, { id: 2, charity: "NSPCC", taskType: "Wrap Presents", numVolunteers: 5, date: "10/12/2020", location: "Bolton" },
        { id: 3, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Manchester" },
        { id: 4, charity: "Derrian House", taskType: "Gardening", numVolunteers: 5, date: "10/1/2021", location: "Crewe" },
        { id: 5, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Crewe" },
        { id: 6, charity: "NSPCC", taskType: "Wrap Presents", numVolunteers: 5, date: "10/1/2021", location: "Bolton" },
        { id: 7, charity: "NSPCC", taskType: "Serve Food", numVolunteers: 5, date: "10/1/2021", location: "Bolton" }
        ];

    const [filteredOpportunities, setFilteredOpportunities] = useState(opportunities)

    const filterOpportunities = location => {
        if (location === "Any") {
            setFilteredOpportunities(opportunities)
        } else {
            const filteredOpportunities = opportunities.filter(opportunity => 
                opportunity.location === location);
            setFilteredOpportunities(filteredOpportunities)
        }
    };

    return (
        <div>
            <div className="container">

                <h2 className="choose-an-opportunity__title">
                    Where we need you
                        </h2>
                <div className="my-4">
                    <div className="dropright choose-an-opportunity__dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter by location
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <button className="dropdown-item"
                                type="button"
                                onClick={() => filterOpportunities("Any")}>
                                Any</button>
                            <button className="dropdown-item"
                                type="button"
                                onClick={() => filterOpportunities("Bolton")}>
                                Bolton</button>
                            <button className="dropdown-item"
                                type="button"
                                onClick={() => filterOpportunities("Manchester")}>
                                Manchester</button>
                            <button className="dropdown-item"
                                type="button"
                                onClick={() => filterOpportunities("Crewe")}>
                                Crewe</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="row">
                    {filteredOpportunities.map(opportunity =>
                        <VolunteerOpportunity
                            charity={opportunity.charity}
                            taskType={opportunity.taskType}
                            location={opportunity.location}
                            key={opportunity.id}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChooseAnOpportunity;