import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <section className="home-intro">
            <div className="container p-3">
                <div className="hero-image mb-3">
                    <div className="container hero-text">
                        <h1>MAD Days</h1>
                    </div>
                </div>
                <h2 className="home-intro__title">Make a Difference Days</h2>
                <p className="lead">
                    Every year AO'ers can swap two desk days for volunteer work.
                    Sometimes it's great to just roll up your sleeves, get stuck in and
                    do something amazing - as long as your colleagues won't miss you too
                    much! Select from the listed volunteer requests to book your day.
          </p>
            </div>
        </section>
    )
}
export default Banner;
