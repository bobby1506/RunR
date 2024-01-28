import React from 'react'
import Landing from '../components/LandingPage/landing'
import About from '../components/About/about'
import Safety from '../components/Safety/safety'
import Warranty from '../components/Warrenty/warranty'
import VideoPage from '../components/Video/video'
import Color from '../components/Color/color'
import Media from '../components/SocialMedia/media'
const home = () => {
  return (
    <div>
     <Landing/>
     <div className="black_container" style={{background:'rgb(38, 36, 36)'}}>
     <About/>
     <Safety/>
     <Warranty/>
     </div>
     
     <Color/>
     <VideoPage/>
     <Media/>
    </div>
  )
}

export default home
