import React from "react"
import "./ChooseAnOpportunity.css";

function ChooseAnOpportunity({ children, setFillteredOpportunities,serverResponse }) {

    let locations = serverResponse.map(elt => elt.location)
    locations = ['Any'].concat(locations.filter((loc, ix) => locations.indexOf(loc) === ix).sort());

    const filterOpportunities = location => {
        if (location === "Any") {
            setFillteredOpportunities(serverResponse)
        } else {
            const filteredList = serverResponse.filter(opportunity =>
                opportunity.location === location);
            setFillteredOpportunities(filteredList)
        }
    };

    return (<>
        <div className="container pt-4">
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
            <div className="row">{children}</div></div>
    </>
    )

}

export default ChooseAnOpportunity;