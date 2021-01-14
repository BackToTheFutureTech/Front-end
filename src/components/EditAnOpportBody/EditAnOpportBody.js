import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import "./EditAnOpportBody.css"

const EditAnOpportBody = ({ editOpportunity, allOpportunities }) => {
    const { id } = useParams()
    const opportunity = allOpportunities.find(item => item.id === parseInt(id))

    const [name, setName] = useState(opportunity.name)
    const [charity, setCharity] = useState(opportunity.charity)
    const [taskType, setTaskType] = useState(opportunity.taskType)
    const [numVolunteers, setNumVolunteers] = useState(opportunity.numVolunteers)
    const [date, setDate] = useState(opportunity.date)
    const [description, setDescription] = useState(opportunity.description)
    const [postcode, setPostcode] = useState(opportunity.postcode)
    const [address1, setAddress1] = useState(opportunity.address1)
    const [address2, setAddress2] = useState(opportunity.address2)
    const [city, setCity] = useState(opportunity.location)

    const handleClick = () => {
        let editedOpportunity = {
            id: opportunity.id,
            name: name,
            charity: charity,
            taskType: taskType,
            numVolunteers: numVolunteers,
            date: date,
            description: description,
            postcode: postcode,
            location: city, 
            address1: address1,
            address2: address2
        }
        editOpportunity(editedOpportunity)
    }

    return (
        <div className="container">
            <h2 className="opportunity_title">Edit a volunteering opportunity</h2>
            <form className="form mt-5 mb-4 pb-5" action="#">
                <div className="container-fluid form-settings mb-5">
                    <div className="row d-flex justify-content-between">
                        <div className="col-sm form-column">
                            <label htmlFor="name">
                                Opportunity Name
                                <input className="form-control rounded-pill form-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="add-opportunity-name"
                                    type="text"
                                    name="name" />
                            </label>
                            <label htmlFor="type">
                                Type
                            <select name="type"
                                    className="form-control rounded-pill form-input"
                                    value={taskType}
                                    onChange={(e) => setTaskType(e.target.value)}
                                    id="add-opportunity-num">
                                    <option value=""></option>
                                    <option value="Wrap Presents">Wrap Presents</option>
                                    <option value="Sort Clothes">Sort Clothes</option>
                                    <option value="Gardening">Gardening</option>
                                    <option value="Serve Food">Serve Food</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                            <label htmlFor="number">
                                How many people will be needed
                                <input className="form-control rounded-pill form-input"
                                    value={numVolunteers}
                                    onChange={(e) => setNumVolunteers(e.target.value)}
                                    id="add-opportunity-num"
                                    type="text"
                                    name="number" />
                            </label>
                            <label htmlFor="date">
                                When?
                                <input value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    id="add-opportunity-date" type="date"
                                    name="date"
                                    className="form-control rounded-pill form-input" />
                            </label>
                        </div>
                        <div className="col-sm form-column">
                            <label htmlFor="description">
                                A brief description
                                <textarea value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    id="add-opportunity-description"
                                    name="description" rows="10" cols="30"
                                    className="form-control rounded form-input"></textarea>
                            </label>
                            <label htmlFor="thumbnail">
                                Upload a thumbnail
                                <input type="file" name="thumbnail" className="" />
                            </label>
                        </div>
                        <div className="col-sm form-column">
                            <label htmlFor="postcode">
                                PostCode
                                <input value={postcode}
                                    onChange={(e) => setPostcode(e.target.value)}
                                    id="add-opportunity-postcode"
                                    type="text"
                                    name="postcode"
                                    className="form-control rounded-pill form-input" />
                            </label>
                            <label htmlFor="address1">
                                Address 1
                                <input value={address1}
                                    onChange={(e) => setAddress1(e.target.value)}
                                    id="add-opportunity-address1"
                                    type="text"
                                    name="address1"
                                    className="form-control rounded-pill form-input" />
                            </label>
                            <label htmlFor="address2">
                                Address 2
                                <input value={address2}
                                    onChange={(e) => setAddress2(e.target.value)}
                                    id="add-opportunity-address2"
                                    type="text"
                                    name="address2"
                                    className="form-control rounded-pill form-input" />
                            </label>
                            <label htmlFor="city">
                                City
                                <input value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    id="add-opportunity-city"
                                    type="text"
                                    name="city"
                                    className="form-control rounded-pill form-input" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="float-right">
                    <button
                        type="button"
                        className="form-submit mt-2"
                        onClick={() => handleClick()}
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditAnOpportBody
