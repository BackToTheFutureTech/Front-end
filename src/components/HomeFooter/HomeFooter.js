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
                                <text text-anchor="middle" x="60" y="55" className="heavy">
                                    1200
                                </text>
                                <text text-anchor="middle" x="60" y="70" className="small">
                                    volunteers
                                </text>
                            </svg>
                        </div>
                        <div className="col-sm stats__circle">
                            <svg height="120" width="120">
                                <circle cx="60" cy="60" r="50" fill="#C9C2C2" />
                                <text text-anchor="middle" x="60" y="55" className="heavy">25</text>
                                <text text-anchor="middle" x="60" y="70" className="small">
                                    charities
                                </text>
                            </svg>
                        </div>
                        <div className="col-sm stats__circle">
                            <svg height="120" width="120">
                                <circle cx="60" cy="60" r="50" fill="#C9C2C2" />
                                <text text-anchor="middle" x="60" y="55" className="heavy">
                                    3000
                                </text>
                                <text text-anchor="middle" x="60" y="70" className="small">
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
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eveniet sint quas quaerat vero possimus,qui, nesciunt amet
                                mollitia odit expedita omnis voluptas vitae exercitationem eius
                                odio error consectetur repudiandae nisi?
                            </p>
                            <p className="testimonial__name">A name, charity</p>
                        </div>
                        <div className="col-sm testimonial">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eveniet sint quas quaerat vero possimus,qui, nesciunt amet
                                mollitia odit expedita omnis voluptas vitae
                            </p>
                            <p className="testimonial__name">A name, charity</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeFooter;