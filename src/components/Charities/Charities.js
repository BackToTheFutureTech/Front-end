import React, { useState } from "react"
import CharityCard from "../CharityCard/CharityCard"
import CharityDetails from "../CharityDetails/CharityDetails"
import "./Charities.css";
import {charities} from '../../Assets/moreData';

function Charities() {    
    // state
    const [isSelected, setIsSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState(1);

    const handleSelect = id => {
        setIsSelected(true);
        setSelectedItem(id);
    }

    let selectedIx = charities.findIndex(charity => charity.id === selectedItem);


    let charityList = (
        <div>
            <div className="container pt-5">
                <h2 className="charities__title">
                    Charities we work with
                </h2>
            </div>

            <div className="container pt-3">
                <div className="row">
                    {charities.map((charity, index) =>
                        <CharityCard {...charity}
                            key={index}
                            handleSelect={handleSelect}
                        />
                    )}
                </div>
            </div>
        </div>
    )

    let charityDetail = (<CharityDetails
        charity={charities[selectedIx]}
    />)

    return (
        <div>
            {isSelected ? charityDetail : charityList}
        </div>
    )

}

export default Charities;