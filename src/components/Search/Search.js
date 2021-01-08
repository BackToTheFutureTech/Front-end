import React, { useState } from "react";

const Search = ({ serverResponse, setFillteredOpportunities }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const findTerm = (term) => {
        const result = serverResponse.filter(element => {
            return (
                element.location.toLowerCase().includes(term.toLowerCase()) ||
                element.description.toLowerCase().includes(term.toLowerCase()) ||
                element.address.toLowerCase().includes(term.toLowerCase()) ||
                element.taskType.toLowerCase().includes(term.toLowerCase()) ||
                element.charity.toLowerCase().includes(term.toLowerCase())  
            );
        });
        setFillteredOpportunities(result)
    };

    const handleChange = (event) => {
        findTerm(searchTerm);
        setSearchTerm(event.target.value);
     
    };
    
    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2 rounded-pill"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                value={searchTerm}
            />
        </form>
    );
};

export default Search;
