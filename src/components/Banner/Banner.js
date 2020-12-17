import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <section class="home-intro">
            <div class="container p-3">
                <div class="hero-image mb-3">
                    <div class="container hero-text">
                        <h1>MAD Days</h1>
                    </div>
                </div>
                <h2 class="home-intro__title">Make a Difference Days</h2>
                <p class="lead">
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
