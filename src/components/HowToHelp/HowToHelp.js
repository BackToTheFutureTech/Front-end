import React from 'react'
import HowToHelpBanner from '../HowToHelpBanner/HowToHelpBanner'

const HowToHelp = ({ children }) => {
    return (
        <>
            <HowToHelpBanner />
            <div className="container pt-3">
                <h2 className="intro__title pb-4">How can I help?</h2>
                <div className="row">
                    {children}
                </div>
            </div>

        </>
    )
}

export default HowToHelp
