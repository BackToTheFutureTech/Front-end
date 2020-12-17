import React from 'react'
import ServeFood from './../../Assets/ServeFood.jpg'
import Garden from './../../Assets/TidyGarden.jpg'
import Presents from './../../Assets/WrapPresents.jpg'

function RelatedOpportunities() {
    return (
        <div class="container details">
            <h4>Related Opportunities</h4>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <div class="card" style={{ width: 18 + "rem" }}>
                                        <img src={ServeFood} class="card-img-top max-height:100px" alt="..." />
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Serve Food</h5>
                                            <p class="card-text">Saint Mary's</p>
                                            <p class="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" class="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="card" style={{ width: 18 + "rem" }}>
                                        <img src={Garden} class="card-img-top" alt="..." />
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Clean Out Garden</h5>
                                            <p class="card-text">Bolton - Derian House</p>
                                            <p class="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" class="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="card" style={{ width: 18 + "rem" }}>
                                        <img src={Presents} class="card-img-top" alt="..." />
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Wrap Presents</h5>
                                            <p class="card-text">NSPCC's Childline Service</p>
                                            <p class="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" class="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <div class="card" style={{ width: 18 + "rem" }}>
                                        <img src={ServeFood} class="card-img-top max-height:100px" alt="..." />
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Serve Food</h5>
                                            <p class="card-text">Saint Mary's</p>
                                            <p class="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" class="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="card" style={{ width: 18 + "rem" }}>
                                        <img src={Garden} class="card-img-top" alt="..." />
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Clean Out Garden</h5>
                                            <p class="card-text">Bolton - Derian House</p>
                                            <p class="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" class="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="card" style={{ width: 18 + "rem" }}>
                                        <img src={Presents} class="card-img-top" alt="..." />
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Wrap Presents</h5>
                                            <p class="card-text">NSPCC's Childline Service</p>
                                            <p class="card-text">Volunteers Needed:</p>
                                            <a href="./becomeavolunteer-Details.html" class="btn btn-primary">See Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default RelatedOpportunities
