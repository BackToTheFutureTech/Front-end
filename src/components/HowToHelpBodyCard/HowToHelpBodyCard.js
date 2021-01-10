import React from 'react'
import "./HowToHelpBodyCard.css"


const HowToHelpBodyCard = ({title,icon,desc,taskImg}) => {

    return (
        < div className="mx-auto mb-3 col-sm-6" >
            <div className="card custom_card">
                <div className="card-header custom_header d-flex justify-content-between align-items-center">
                    <h4>{title}</h4>
                    <div><img src={taskImg[icon]} alt="" height="60"/></div>
                </div>
                <div className="card-body custom_card_body">
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </ div>
    )
}

export default HowToHelpBodyCard
