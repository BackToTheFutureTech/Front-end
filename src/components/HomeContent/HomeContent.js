import React from "react"
import "./HomeContent.css";

function HomeContent({ children}) {

    return (
        <div>
            <div className="container pt-3">
                <h2 className="home-content__title">
                    Volunteer Opportunities
                </h2>
            </div>

            <div className="container pt-3">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )

}

export default HomeContent;