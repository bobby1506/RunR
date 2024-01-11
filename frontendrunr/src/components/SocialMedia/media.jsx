import ImageCard from "./ImageCard";
import { useEffect } from "react";
import bgImage from "../../assets/b.jpg"
import { FaRegHeart } from "react-icons/fa";
import './media.css'
import AOS from 'aos'
export default function Media(){

    useEffect(()=>{
        AOS.init();
        window.addEventListener('load', AOS.refresh);
      },[])

    return(
        <main className="Media">
            <ImageCard imgSrc={bgImage} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    {/* //  data-aos-anchor-placement="bottom-center"> */}
                <h3 className="text">Lorem Ipsum</h3>
                <p>
                    Hello i am bobby currently persuing the computer science engineering from the faculty of technology and engineering the maharaja sayajirao university of vadodara
                </p>
                <div className="space-x-4 mt-4">
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                </div>
            </ImageCard>
            <ImageCard imgSrc={bgImage} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    {/* //  data-aos-anchor-placement="bottom-center"> */}
                <div className="main_media">
                <h3 className="text">Lorem Ipsum</h3>
                <p>
                    Hello i am bobby currently persuing the computer science engineering from the faculty of technology and engineering the maharaja sayajirao university of vadodara
                </p>
                <div className="space-x-4 mt-4">
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                </div>
                </div>
            </ImageCard>
            <ImageCard imgSrc={bgImage} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    {/* //  data-aos-anchor-placement="bottom-center"> */}
                <h3 className="text">Lorem Ipsum</h3>
                <p>
                    Hello i am bobby currently persuing the computer science engineering from the faculty of technology and engineering the maharaja sayajirao university of vadodara
                </p>
                <div className="space-x-4 mt-4">
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                </div>
            </ImageCard>
            <ImageCard imgSrc={bgImage} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    {/* //  data-aos-anchor-placement="bottom-center"> */}
                <h3 className="text">Lorem Ipsum</h3>
                <p>
                    Hello i am bobby currently persuing the computer science engineering from the faculty of technology and engineering the maharaja sayajirao university of vadodara
                </p>
                <div className="space-x-4 mt-4">
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                    <button className="btn">
                        <FaRegHeart/>
                    </button>
                </div>
            </ImageCard>
        </main>
    )
}