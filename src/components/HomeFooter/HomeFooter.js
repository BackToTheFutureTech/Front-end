import React from 'react'
import './HomeFooter.css'

function HomeFooter() {
    return (
        <div>
            <section className="stats">
                <div className="container p-4 mb-3 section--grey">
                    <h3 className="section__header">Some numbers</h3>
                    <div className="row">
                        <div className="col-sm stats__circle">
                            <svg height="120" width="120">
                                <circle cx="60" cy="60" r="50" fill="#C9C2C2" />
                                <text textAnchor="middle" x="60" y="55" className="heavy">
                                    1200
                                </text>
                                <text textAnchor="middle" x="60" y="70" className="small">
                                    volunteers
                                </text>
                            </svg>
                        </div>
                        <div className="col-sm stats__circle">
                            <svg height="120" width="120">
                                <circle cx="60" cy="60" r="50" fill="#C9C2C2" />
                                <text textAnchor="middle" x="60" y="55" className="heavy">25</text>
                                <text textAnchor="middle" x="60" y="70" className="small">
                                    charities
                                </text>
                            </svg>
                        </div>
                        <div className="col-sm stats__circle">
                            <svg height="120" width="120">
                                <circle cx="60" cy="60" r="50" fill="#C9C2C2" />
                                <text textAnchor="middle" x="60" y="55" className="heavy">
                                    3000
                                </text>
                                <text textAnchor="middle" x="60" y="70" className="small">
                                    helped
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="container p-4 mb-3 section--grey">
                    <h3 className="section__header mb-3">What volunteers say</h3>
                    <div className="row">
                        <div className="col-sm testimonial">
                            <p>
                                Volunteering with Cheshire Buddies is something that I know I will never regret, every time I volunteer I learn something new about myself and what I can do.
                            </p>
                            <p className="testimonial__name">Jane, CCBS</p>
                        </div>
                        <div className="col-sm testimonial">
                            <p>
                                What a fabulous experience. It feels fantastic to have been able to make a difference with such a worthwhile charity.
                            </p>
                            <p className="testimonial__name">Jo, St Mary's</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeFooter;
