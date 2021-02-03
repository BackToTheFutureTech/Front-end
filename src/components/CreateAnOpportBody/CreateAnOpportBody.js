import React, { useState } from 'react'
import "./CreateAnOpportBody.css"
import S3FileUpload from "react-s3";
import { withRouter} from "react-router-dom";

const CreateAnOpportBody = ({ createOpportunity,history }) => {
    const config = {
        bucketName: process.env.REACT_APP_BUCKETNAME,
        dirName: '',
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESSKEYID,
        secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY
    }
    const [name, setName] = useState("")
    const [taskType, setTaskType] = useState("Other")
    const [numVolunteers, setNumVolunteers] = useState(0)
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [description, setDescription] = useState("")
    const [postcode, setPostcode] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [thumbnail, setThumbnail] = useState("")

    const handleClick = () => {
        let opportunity = {
            name: name,
            taskType: taskType,
            numVolunteers: parseInt(numVolunteers),
            date: date,
            description: description,
            postcode: postcode,
            location: city,
            address1: address1,
            address2: address2,
            thumbnail: thumbnail
        }

        createOpportunity(opportunity)
        history.push("/adminportal")
    }

    const upload = (e) => {
        S3FileUpload.uploadFile(e.target.files[0], config)
            .then((data) => data.location)
            .then(imgUrl => setThumbnail(imgUrl))
            .catch(err => alert(err))
    }
    return (
        <div className="container">
            <h2 className="opportunity_title">Create a volunteering opportunity</h2>
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
                                    <option value="Other">Other</option>
                                    <option value="Wrap Presents">Wrap Presents</option>
                                    <option value="Sort Clothes">Sort Clothes</option>
                                    <option value="Gardening">Gardening</option>
                                    <option value="Serve Food">Serve Food</option>
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
                                <input type="file" name="thumbnail" onChange={upload} />
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
                    >Create</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(CreateAnOpportBody) 
