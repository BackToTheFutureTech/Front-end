import React from 'react'
import HowToHelpBanner from '../HowToHelpBanner/HowToHelpBanner'

const HowToHelp = ({ children }) => {
    return (
        <>
            <HowToHelpBanner />
            <div className="container pt-3">
                <div className="row">
                    {children}
                </div>
            </div>

        </>
    )
}

export default HowToHelp
