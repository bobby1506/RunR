import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { FaPlus, FaHome , FaDownload} from 'react-icons/fa';
import { MdRoundaboutRight } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { MdDriveEta } from "react-icons/md";
import pdf from "../../assets/ebrochure.pdf"
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import './FloatingIcon.css'; // Import CSS file for custom styling

const FloatingIcon = () => {
    const navigate = useNavigate();

    const handleTestDriveClick = () => {
        // Navigate to /test-drive route
        navigate('/testdrive');
    };

    const handleDealershipClick = () => {
        // Navigate to /dealership route
        navigate('/dealer');
    };

    const handleAboutClick = () => {
        // Navigate to /about route
        navigate('/about');
    };

    const handleBrochureDownload = () => {
        // Assuming 'brochure.pdf' is the name of your brochure file
    const brochureUrl = pdf;
    
    // Create an anchor element
    const link = document.createElement('a');
  
    // Set the href attribute to the URL of the brochure file
    link.href = brochureUrl;
  
    // Set the download attribute to specify the default file name
    link.download = 'ebrochure.pdf';
  
    // Append the anchor element to the body
    document.body.appendChild(link);
  
    // Trigger a click event on the anchor element
    link.click();
  
    // Remove the anchor element from the body
    document.body.removeChild(link);
    };

    return (
        <Fab
            mainButtonStyles={{ backgroundColor: '#E6562A' }} 
            icon={<FaPlus />} 
            event="click"
            alwaysShowTitle={true}
        >
            
            <Action
                text="Test Drive"
                onClick={handleTestDriveClick}
            >
                <MdDriveEta />
            </Action>
            <Action
                text="Dealership"
                onClick={handleDealershipClick}
            >
               <FaWpforms />
            </Action>
            <Action
                text="About"
                onClick={handleAboutClick}
            >
                <MdRoundaboutRight />
            </Action>
            <Action
                text="E-brochure"
                onClick={handleBrochureDownload}
            >
                <FaDownload />
            </Action>
        </Fab>
    );
};

export default FloatingIcon;
