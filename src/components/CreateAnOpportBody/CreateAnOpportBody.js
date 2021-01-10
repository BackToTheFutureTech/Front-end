import React from 'react'
import "./CreateAnOpportBody.css"

const CreateAnOpportBody = () => {
    return (
        <div className="container">
            <h2 className="opportunity_title">Create a volunteering opportunity</h2>
            <form className="form mt-5 mb-4 pb-5" action="#">
                <div className="container-fluid form-settings mb-5">
                    <div className="row d-flex justify-content-between">
                        <div className="col-sm form-column">
                            <label for="name">
                                Opportunity Name
                  <input className="form-control rounded-pill form-input" type="text" name="name" />
                            </label>
                            <label for="type">
                                Type
                  <select name="type" className="form-control rounded-pill form-input">
                                    <option value="wrap">Wrap Presents</option>
                                    <option value="sort">Sort Clothes</option>
                                    <option value="garden">Gardening</option>
                                    <option value="other">Other Things</option>
                                </select>
                            </label>
                            <label for="number">
                                How many people will be needed
                  <input type="text" name="number" className="form-control rounded-pill form-input" />
                            </label>
                            <label for="date">
                                When?
                  <input type="date" name="date" className="form-control rounded-pill form-input" />
                            </label>
                        </div>
                        <div className="col-sm form-column">
                            <label for="description">
                                A brief description
                  <textarea name="description" rows="10" cols="30" className="form-control rounded form-input"></textarea>
                            </label>
                            <label for="thumbnail">
                                Upload a thumbnail
                  <input type="file" name="thumbnail" className="" />
                            </label>
                        </div>
                        <div className="col-sm form-column">
                            <label for="postcode">
                                PostCode
                  <input type="text" name="postcode" className="form-control rounded-pill form-input" />
                            </label>
                            <label for="address">
                                Address
                  <input type="text" name="address" className="form-control rounded-pill form-input" />
                            </label>
                            <label for="city">
                                City
                  <input type="text" name="city" className="form-control rounded-pill form-input" />
                            </label>
                            <label for="state">
                                State
                  <input type="text" name="state" className="form-control rounded-pill form-input" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="float-right">
                    <button className="form-submit mt-2">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAnOpportBody
