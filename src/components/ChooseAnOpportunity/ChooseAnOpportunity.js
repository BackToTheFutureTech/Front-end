import React, { useState } from "react"
import VolunteerOpportunity from "../VolunteerOpportunity/VolunteerOpportunity"
import OpportunityDetails from "../OpportunityDetails/OpportunityDetails"
import "./ChooseAnOpportunity.css";

// images
import WrapPresentsImg from "../../Assets/WrapPresents.jpg"
import TidyGardenImg from "../../Assets/TidyGarden.jpg"
import ServeFoodImg from "../../Assets/ServeFood.jpg"
import SortClothingImg from "../../Assets/SortClothing.jpg";

function ChooseAnOpportunity() {
    // data
    const opportunities = [
        { id: 1, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Bolton", description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", address: "60 Grange Road, BOLTON, AB48 3TH" 
        },
        {
            id: 2, charity: "NSPCC", taskType: "Wrap Presents", numVolunteers: 5, date: "10/12/2020", location: "Bolton",
            description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus", address: "60 Grange Road, BOLTON, AB48 3TH"
        },
        {
            id: 3, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Manchester",
            description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempore.", address: "60 Grange Road, MANCHESTER, AB48 3TH"
        },
        {
            id: 4, charity: "Derrian House", taskType: "Gardening", numVolunteers: 5, date: "10/1/2021", location: "Crewe",
            description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", address: "60 Grange Road, CREWE, AB48 3TH"
        },
        {
            id: 5, charity: "NSPCC", taskType: "Sort Clothes", numVolunteers: 5, date: "10/1/2021", location: "Crewe",
            description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus pretium. Integer quis ante  fringillaneque.", address: "60 Grange Road, CREWE, AB48 3TH"
        },
        {
            id: 6, charity: "NSPCC", taskType: "Wrap Presents", numVolunteers: 5, date: "10/1/2021", location: "Bolton",
            description: "Morbi dapibus nibh ac quam efficitur pretium. Fusce molestie mi quis faucibus peque.", address: "60 Grange Road, BOLTON, AB48 3TH"
        },
        {
            id: 7, charity: "NSPCC", taskType: "Serve Food", numVolunteers: 5, date: "10/1/2021", location: "Bolton",
            description: "Integer quis ante eget justo interdum tempor. Ut eget sapien vehicula, laoreet odio ut, fringillaneque.", address: "60 Grange Road, BOLTON, AB48 3TH"
        }
    ];
    const taskImg = {"Sort Clothes": SortClothingImg, "Gardening": TidyGardenImg, "Wrap Presents": WrapPresentsImg,  "Serve Food": ServeFoodImg
    }
    
    // state
    const [filteredOpportunities, setFilteredOpportunities] = useState(opportunities);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);

    const handleSelect = id => {
        setIsSelected(true);
        setSelectedItem(id);
    }
    const handleReset = e => { setIsSelected(false); }

    let selectedIx = opportunities.findIndex(i => i.id === selectedItem);

    // create list of unique locations for dropdown selection
    let locations = opportunities.map(elt => elt.location)
    locations = ['Any'].concat(locations.filter((loc, ix) => locations.indexOf(loc) === ix).sort());

    const filterOpportunities = location => {
        if (location === "Any") {
            setFilteredOpportunities(opportunities)
        } else {
            const filteredList = opportunities.filter(opportunity =>
                opportunity.location === location);
            setFilteredOpportunities(filteredList)
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
                        <button className="btn dropdown-toggle"
                            type="button"
                            id="dropdownMenu"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Filter by location
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                            {locations.map(site =>
                                <button className="dropdown-item"
                                    type="button"
                                    key={site}
                                    onClick={() => filterOpportunities(site)}>
                                    {site}
                                </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {filteredOpportunities.map(opportunity =>
                        <VolunteerOpportunity
                            taskImg={taskImg[opportunity.taskType]}
                            charity={opportunity.charity}
                            taskType={opportunity.taskType}
                            location={opportunity.location}
                            key={opportunity.id}
                            id={opportunity.id}
                            handleSelect={handleSelect}
                        />
                    )}
                </div>
            </div>
        </div>
    )

    let opportunityDetail = (<OpportunityDetails
        taskImg={taskImg[opportunities[selectedIx].taskType]}
        handleReset={handleReset}
        opportunity={opportunities[selectedIx]}
    />
    )

    return (
        <div>
            {isSelected ? opportunityDetail : opportunityList}
        </div>
    )

}

export default ChooseAnOpportunity;