import React from 'react'
import "./partner.css"
import Partners from "./partner.png"
const Partner = () => {
  return (
    <div>
      <section className='offer section'>
        <div className="offer__container container grid">
            
            <div className="offer__data">
                <h2 className="section__title offer__title">
                    Do you want to become <br></br> Our Partner?
                </h2>

                <p className="offer__description">
                    Be the first one to do that,Be the first one to do that,Be the first one to do that,Be the first one to do that,
                </p>

                <a href="#" className='button'>
                   Become Partner
                </a>
            </div>
            <img src={Partners} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Partner
