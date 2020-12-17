import React from 'react'
import WrapPresents from './../../Assets/WrapPresents.jpg'

function OpportunityDetails() {
    return (
        <div className="container details">

            <div className="row">
                <div className="col-4">
                    <img src={WrapPresents} width="100%" alt="" />
                </div>
                <div className="col-5">
                    <h6>Wrap Presents </h6>
                    <h5>NSPCC's Childline Service</h5>
                    <h6>Volunteers Needed: <span className="badge badge-danger">20</span></h6>
                    <h6>Volunteers so far: <span className="badge badge-primary">5</span></h6>
                    <hr width="80%" align="left" />
                    <p>Description</p>
                    <p>• Morbi dapibus nibh ac quam efficitur pretium.<br />
                    • Fusce molestie mi quis faucibus pretium.<br />
                    • Integer quis ante eget justo interdum tempor.<br />
                    • Ut eget sapien vehicula, laoreet odio ut, fringilla
                    neque.
                </p><br />
                    <p>Address</p>
                    <p>60 Grange Road, ABERDEEN<br />
                    AB48 3TH
                </p>
                </div>
                <div className="col-3">
                    <div className="apply">
                        <p className="text-center">Date: 24/12/2020</p>
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <button type="button" className="btn btn-primary btn-sm">Apply</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <button type="button" className="btn btn-primary btn-sm">Apply Team</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpportunityDetails
