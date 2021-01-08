import React from "react"
import "./Charities.css";

function Charities({ children}) {

    return (
        <>
            <div className="container pt-3">
                <h2 className="charities__title">
                    Charities we work with
                </h2>
            </div>

            <div className="container pt-3">
                <div className="row">
                    {children}
                </div>
            </div>
        </>
    )

}

export default Charities;