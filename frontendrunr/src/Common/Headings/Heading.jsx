import React, {useEffect} from 'react';
import './Heading.css';
import AOS from 'aos';

function Heading(props) {

    useEffect(() => {
        AOS.init();
        window.addEventListener('load', AOS.refresh);

    }, []);
    
    return (

        <>

            <header data-aos="zoom-in-up" className='headerss' id="headingsOfAll">
                <button><h2 className={`heading_segment ${props.className}`} id={props.id} >{props.title}</h2></button>
            </header>

        </>

    )
}

export default Heading
