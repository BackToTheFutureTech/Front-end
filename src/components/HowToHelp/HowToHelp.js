import React from 'react'
import HowToHelpBanner from '../HowToHelpBanner/HowToHelpBanner'

const HowToHelp = ({ children }) => {
    return (
        <div className="d-flex flex-column">
            <div className="container p-3">
                <HowToHelpBanner />
            </div>
            <div className="container p-3 pb-5">
                <div className="row">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default HowToHelp
