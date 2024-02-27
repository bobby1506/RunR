// insta.jsx
import React, { useEffect, useState, useRef } from 'react';
import './insta.css';
import Heading from '../../Common/Headings/Heading';
import axios from 'axios';
import { BASE_URL } from '../../apiConfig';

export default function Insta() {
  const [feed, setFeed] = useState(null);
  const mainDataRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const urlResponse = await axios.post('/api/v1/getinstaurl');
        const urlResponse = await axios.post(`${BASE_URL}/api/v1/getinstaurl`);
        const url = urlResponse.data.url;
        const dataResponse = await fetch(url);

        if (!dataResponse.ok) {
          throw new Error(`Failed to fetch data. Status: ${dataResponse.status}`);
        }

        const feedData = await dataResponse.json();
        setFeed(feedData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setFeed(null);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextSlide();
    }, 2000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [feed]);

  const moveToNextSlide = () => {
    if (mainDataRef.current) {
      const firstSlide = mainDataRef.current.children[0];
      mainDataRef.current.style.transition = 'transform 1s ease-in-out';
      mainDataRef.current.style.transform = 'translateX(-28.5%)';

      setTimeout(() => {
        mainDataRef.current.style.transition = 'none';
        mainDataRef.current.style.transform = 'translateX(0)';
        mainDataRef.current.appendChild(firstSlide);
      }, 1000); // 1000ms is the duration of the transition
    }
  };

  if (!feed) {
    return (
      <div>
        <h1>Error fetching Instagram data</h1>
      </div>
    );
  }

  if (!feed.data || feed.data.length === 0) {
    return (
      <div>
        <h1>No Instagram data available</h1>
      </div>
    );
  }

  return (
    <div>
      <Heading className="taleido_heading" id="glheading" title="INSTA LIVE FEED" />
      <div ref={mainDataRef} className="main_data">
        {feed.data.map((item) => (
          <div className="main_insta" key={item.id}>
            <div className="feed_img" onClick={() => window.open(item.permalink, '_blank')}>
              {item.media_type === 'IMAGE' ? (
                <div>
                  <img src={item.media_url} alt={item.caption} />
                </div>
              ) : item.media_type === 'VIDEO' ? (
                <video controls>
                  <source src={item.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
