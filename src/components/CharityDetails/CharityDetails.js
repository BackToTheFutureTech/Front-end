import React from 'react'
import { useParams } from "react-router-dom";
import "./CharityDetails.css"

function CharityDetails({ charities }) {

    let { charityName } = useParams();
    let charity = charities.find(item => item.name === charityName);

    const VolunteerPhoto = (props) => {
        return (<>
            <div className="col-12 col-md-4">
                <img src={props.photo} width="100%" alt="" />
            </div></>)
    }

    const VolunteerComment = (comment) => {
        return (<div className="charity-details__volunteer-comment">
            <div className="row">
                <h3>{comment.name}</h3>
                <p>{comment.comment}</p>
            </div>
            <div className="row">
                {comment.imgs.map((photo, ix) =>
                    <VolunteerPhoto photo={photo} key={ix} />
                )}
            </div>
        </div>)
    };

    return (
        <div className="container pt-3">
            <div className="row">
                <h2 className="charity-details__title">{charity.name}</h2>
            </div>
            <div className="charity-details">
                <div className="row">
                    <div className="col-12 col-md-5 mb-3">
                        <img src={charity.img} width="100%" alt="" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h4>Active Projects: <span className="badge badge-danger">{charity.numActiveProjects}</span></h4>
                        <h4>Completed Projects: <span className="badge charity-details__badge">{charity.numCompletedProjects}</span></h4>
                        <hr />
                        <h5>Description</h5>
                        <p>{charity.description}</p>
                        <h5>Address</h5>
                        <p>{charity.address}</p>
                    </div>
                </div>
            </div>
            {charity.volunteerComments ?
                (<>
                    <div className="row">
                        <h2 className="charity-details__title">Volunteer Comments and Photos</h2>
                    </div>
                    <div className="charity-details">
                        {charity.volunteerComments.map((comment) => {
                            return (<VolunteerComment {...comment} key={comment.id} />)
                        })}
                    </div>
                </>) : null
            }
        </div >
    )
}

export default CharityDetails
