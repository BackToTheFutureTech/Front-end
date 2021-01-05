import React, { useState } from "react";

const Search = ({ serverResponse, setFillteredOpportunities }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const findTerm = (term) => {
        const result = serverResponse.filter(element => {
            return (
                element.location.toLowerCase().includes(term.toLowerCase()) ||
                element.title.toLowerCase().includes(term.toLowerCase())
            );
        });
        setFillteredOpportunities(result)
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        findTerm(searchTerm);
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
