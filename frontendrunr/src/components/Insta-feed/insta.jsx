// Insta.js
import React, { useEffect, useState } from 'react';
import "./insta.css";
import Heading from '../../Common/Headings/Heading';
import Pagination from './Pagination.js'; // Update the path accordingly
import axios from 'axios';
export default function Insta() {
  const [feed, setFeed] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlResponse = await axios.post('/api/v1/getinstaurl');
        // const urlData = await urlResponse.json();
        const url = urlResponse.data.url;
        // console.log(url);
        const dataResponse = await fetch(url);

        if (!dataResponse.ok) {
          throw new Error(`Failed to fetch data. Status: ${dataResponse.status}`);
        }

        const feedData = await dataResponse.json();
        setFeed(feedData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setFeed(null);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = feed ? feed.data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (!feed) {
    return (
      <div>
        <h1>Error fetching Instagram data</h1>
      </div>
    );
  }

  if (!feed.data) {
    return (
      <div>
        <h1>No Instagram data available</h1>
      </div>
    );
  }

  return (
    <div>
      <Heading
        className="taleido_heading"
        id="glheading"
        title="INSTA LIVE FEED"
      />
      {currentItems.map(item => (
        <div className="grid-container" key={item.id}>
          <div className="grid grid-cols-9 md:grid-cols-2 max-w-3x1 px-4 sm:px-6 gap-3 mx-auto" onClick={() => window.open(item.permalink, '_blank')}>
          {item.media_type === 'IMAGE' ? (
              <div >
                <img className="object-cover aspect-square" src={item.media_url} alt={item.caption} />
              </div>
            )
              //  : item.media_type === 'VIDEO' ? (
              //   <div className="media-container">
              //     <video controls>
              //       <source src={item.media_url} type="video/mp4" />
              //       Your browser does not support the video tag.
              //     </video>
              //   </div>
              // ) 
              : null}
          </div>
        </div>
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={feed.data.length}
        paginate={paginate}
      />
    </div>
  );
};
