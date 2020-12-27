import React, { useState } from "react"
import VolunteerOpportunity from "../VolunteerOpportunity/VolunteerOpportunity"
import OpportunityDetails from "../OpportunityDetails/OpportunityDetails";
import "./ChooseAnOpportunity.css"

function ChooseAnOpportunity() {
    const opportunities =[
        { id: 1, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Bolton",description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", address: "60 Grange Road, BOLTON, AB48 3TH" }, 
        { id: 2, charity: "NSPCC", taskType: "Wrap Presents", numVolunteers: 5, date: "10/12/2020", location: "Bolton",
        description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus", address: "60 Grange Road, BOLTON, AB48 3TH" },
        { id: 3, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Manchester",
        description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempore.", address: "60 Grange Road, MANCHESTER, AB48 3TH" },
        { id: 4, charity: "Derrian House", taskType: "Gardening", numVolunteers: 5, date: "10/1/2021", location: "Crewe",
        description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", address: "60 Grange Road, CREWE, AB48 3TH" },
        { id: 5, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Crewe",
        description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante  fringillaneque.", address: "60 Grange Road, CREWE, AB48 3TH" },
        { id: 6, charity: "NSPCC", taskType: "Wrap Presents", numVolunteers: 5, date: "10/1/2021", location: "Bolton",
        description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus peque.", address: "60 Grange Road, BOLTON, AB48 3TH" },
        { id: 7, charity: "NSPCC", taskType: "Serve Food", numVolunteers: 5, date: "10/1/2021", location: "Bolton",
        description: "Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", address: "60 Grange Road, BOLTON, AB48 3TH" }
        ];
    const [filteredOpportunities, setFilteredOpportunities] = useState(opportunities);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);

    const handleSelect = e => { setIsSelected(true) }
    const handleReset = e => { setIsSelected(false)}
    
    // create list of unique locations
    let locations = opportunities.map(elt => elt.location)
    locations = locations.filter((n, ix) => locations.indexOf(n) === ix).sort();
    let selectedIx = opportunities.findIndex(i => i.id === selectedItem);

    const filterOpportunities = location => {
        if (location === "Any") {
            setFilteredOpportunities(opportunities)
        } else {
            const filteredOpportunities = opportunities.filter(opportunity =>
                opportunity.location === location);
            setFilteredOpportunities(filteredOpportunities)
        }
    };

    let opportunityList = (
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
                        {locations.map(site =>
                            <button className="dropdown-item"
                                type="button"
                                onClick={() => filterOpportunities(site)}>
                                {site}</button>)
                        }
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
                                id={opportunity.id}
                                handleSelect={handleSelect}
                                setSelectedItem={setSelectedItem}
                            />
                        )}
                    </div>
                </div>
            </div>
        )

    let opportunityDetail = ( <OpportunityDetails 
                                handleReset={handleReset}
                                opportunity={opportunities[selectedIx]}
                                />
    )

    return (
        <div>
            {isSelected ?  opportunityDetail :  opportunityList }
        </div>
    )

}

export default ChooseAnOpportunity;