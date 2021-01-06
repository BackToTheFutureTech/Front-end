import React from 'react'
import "./CharityDetails.css"

function CharityDetails({ charity }) {

    let VolunteerPhoto = (photo) => {
        console.log(photo)
        // TODO - fails to display image passed as parameter
        return (<>
            <div className="col-12 col-md-4">
                <img src="https://github.com/BackToTheFutureTech/Front-end/blob/main/src/Assets/SortClothing.jpg?raw=true" width="100%" alt="" />
            </div></>)
    }

    let VolunteerComment = (comment) => {
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
        <div className="container pt-5">
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
                        <p>Description</p>
                        <p>{charity.description}</p>
                        <p>Address</p>
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
