import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import './media.css';
import axios from 'axios';
import AOS from 'aos';
import Heading from "../../Common/Headings/Heading";
import { BASE_URL } from "../../apiConfig";

export default function Media() {
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        // Fetch data from the server when the component mounts
        const fetchData = async () => {
            try {
                // const response = await axios.get('api/v1/media/getAll');
                const response = await axios.get(`${BASE_URL}/api/v1/media/getAll`);
                // console.log(response.data);
                // Assuming the actual data is in response.data.data
                setMediaData(response.data);
            } catch (error) {
                console.error('Error fetching media data:', error);
            }
        };

        fetchData();

        AOS.init();
        window.addEventListener('load', AOS.refresh);

    }, []);

    return (
        <div className="main_media">
                    <Heading
        className="taleido_heading"
        id="glheading"
        title="WE ARE IN THE NEWS!"
      />
        <main className="Media">
     
            {mediaData.map((mediaItem, index) => (
                <ImageCard
                    key={index}
                    link={mediaItem.link}
                    imgSrc={mediaItem.image}
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    <h3 className="text">{mediaItem.heading}</h3>
                    <p>{mediaItem.data}</p>
                </ImageCard>
            ))}
        </main>
        </div>
    );
}
