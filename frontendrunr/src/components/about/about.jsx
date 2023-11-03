import React from 'react'
import GreenBack from "./greenback.png"
import "./about.css"
const About = () => {
    return (
        <div>
            <section className='about section' id='about'>
                <div className="about__container container grid">
                    <div className="about__group">
                        <img src={GreenBack} alt="" className='about__img' />

                        <div className="about__card">
                            <h3 className="about__card-title">2.500+</h3>
                            <p className="about__card-description">
                                Supercharges placed along popular routes
                            </p>
                        </div>
                    </div>

                    <div className="about__data">
                        <h2 className="section__title about__title">
                            Machines with <br></br>Future Technology
                        </h2>
                        <p className="about__description">
                            see the future high performance electric vehicle, 
                            Supercharges placed along popular routes,
                         see the future high performance electric vehicle
                        </p>

                        <a href="#" className='button'>Know More</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
