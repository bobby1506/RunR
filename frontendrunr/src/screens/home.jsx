import React from 'react'
import Landingpage from '../components/landing-page/landingpage'
import About from '../components/about/about'
import Partner from '../components/partner/partner'

const home = () => {
  return (
    <div>
      <Landingpage/>
      <About/>
      <Partner/>
    </div>
  )
}

export default home
