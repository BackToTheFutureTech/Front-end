import React from 'react'

function BreadCrumbs() {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">become a Volunteer</a></li>
                    <li class="breadcrumb-item"><a href="#">Wrap Presents</a></li>
                    <li class="breadcrumb-item active" aria-current="page">NSPCC's Childline Service</li>
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumbs;