import React from 'react'
import ServeFood from './../../Assets/ServeFood.jpg'
import Garden from './../../Assets/TidyGarden.jpg'
import Presents from './../../Assets/WrapPresents.jpg'

function RelatedOpportunities() {
    return (
        <div className="container details">
            <h4>Related Opportunities</h4>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="card" style={{ width: 18 + "rem" }}>
                                        <img src={ServeFood} className="card-img-top max-height:100px" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Serve Food</h5>
                                            <p className="card-text">Saint Mary's</p>
                                            <p className="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" className="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card" style={{ width: 18 + "rem" }}>
                                        <img src={Garden} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Clean Out Garden</h5>
                                            <p className="card-text">Bolton - Derian House</p>
                                            <p className="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" className="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card" style={{ width: 18 + "rem" }}>
                                        <img src={Presents} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Wrap Presents</h5>
                                            <p className="card-text">NSPCC's Childline Service</p>
                                            <p className="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" className="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="card" style={{ width: 18 + "rem" }}>
                                        <img src={ServeFood} className="card-img-top max-height:100px" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Serve Food</h5>
                                            <p className="card-text">Saint Mary's</p>
                                            <p className="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" className="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card" style={{ width: 18 + "rem" }}>
                                        <img src={Garden} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Clean Out Garden</h5>
                                            <p className="card-text">Bolton - Derian House</p>
                                            <p className="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" className="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card" style={{ width: 18 + "rem" }}>
                                        <img src={Presents} className="card-img-top" alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Wrap Presents</h5>
                                            <p className="card-text">NSPCC's Childline Service</p>
                                            <p className="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" className="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default RelatedOpportunities
