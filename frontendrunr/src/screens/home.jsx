import React from 'react'
import Landing from '../components/LandingPage/landing'
import About from '../components/About/about'
// import About from '../components/about/about'
import Safety from '../components/Safety/safety'
import Warranty from '../components/Warrenty/warranty'
import VideoPage from '../components/Video/video'
import Color from '../components/Color/color'
import Media from '../components/SocialMedia/media'
import Insta from '../components/Insta-feed/insta'
const home = () => {
  return (
    <div>
        <div className="blocks" style={{background:'rgb(38, 36, 36)'}}>
      
     <Landing/>   
     <About/>
     <Safety/>
     <Warranty/>
     <Color/>
     <VideoPage/>
     <Media/>
     <Insta/>
    </div>
     </div>
  )
}

export default home
