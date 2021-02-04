import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./CharityDetails.css"

function CharityDetails({ charities }) {

    const { charityName } = useParams();
    const charity = charities.find(item => item.charityName === charityName);
    const apiUrl = process.env.REACT_APP_APIURL;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/charities/${charity.charityId}/comments`)
            .then(response => setComments(response.data))
            .catch(err => console.log(err))
    }, [])

    const VolunteerPhoto = (props) => {
        return (<>
            <div className="col-12 col-md-4">
                <img src={props.photo} width="100%" alt="" />
            </div></>)
    }

    const VolunteerComment = (comment) => {
        return (<div className="charity-details__volunteer-comment">
            <div className="row">
                <p>{comment.comment}</p>
            </div>
            <div className="row">
                {comment.imageUrls.map((photo, ix) =>
                    <VolunteerPhoto photo={photo} key={ix} />
                )}
            </div>
        </div>)
    };

    return (
        <div className="container pt-3">
            <div className="row">
                <h2 className="charity-details__title">{charity.charityName}</h2>
            </div>
            <div className="charity-details">
                <div className="row">
                    <div className="col-12 col-md-5 mb-3">
                        <img src={charity.imageUrl} width="100%" alt="" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h4>Active Projects: <span className="badge badge-danger">{charity.numActiveProjects}</span></h4>
                        <h4>Completed Projects: <span className="badge charity-details__badge">{charity.numCompletedProjects}</span></h4>
                        <hr />
                        <h5>Description</h5>
                        <p>{charity.charityDescription}</p>
                    </div>
                </div>
            </div>
            {comments ?
                (<>
                    <div className="row">
                        <h2 className="charity-details__title">Volunteer Comments and Photos</h2>
                    </div>
                    <div className="charity-details">
                        {comments.map((comment, index) => {
                            return (<VolunteerComment {...comment} key={index} />)
                        })}
                    </div>
                </>) : null
            }
        </div >
    )
}

export default CharityDetails
