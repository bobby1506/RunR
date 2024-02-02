import React, {useEffect} from 'react'
import TaleidoData from "../Data/Taleido";
import "./blog.css";
import AOS from 'aos';
import Heading from "../Common/Headings/Heading";
function Blog() {

  useEffect(() => {
  
    document.title="Blog | RunR"

    
    AOS.init();
        window.addEventListener('load', AOS.refresh);


  }, [])

  return (
    <>
     
      


        <div className="container_taliedo">
          <Heading
            className="taleido_heading"
            id="glheading"
            title="BLOG & NEWS"
          />

          {TaleidoData.map((element) => {
            if (element.id % 2 == 0) {
              return (
                <div key={element.id}>
                  <div className="taleido_lec content">
                    <div className="about_taleido about_taleido_para1"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    // data-aos-delay="100"
                    data-aos-offset="400"
                    data-aos-easing="ease-in-sine">
                      <div className="taleido_heading">
                        <h3 className="taleido_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>
                      <p className="text-without-icon-taleido">
                        {" "}
                        {element.content}
                      </p>
                     
                    </div>

                    <div
                      className="taleido_img taleido_img_style"
                      data-aos="GuestAnimRight"
                    >
                      <img
                        src={element.imgSrc}
                        className="Taleido-img"
                        alt={element.name}
                      />
                    </div>

                    <div className="about_taleido about_taleido_para2">
                      <div className="taleido_heading">
                        <h3 className="taleido_name">
                          {element.name} <br /> {element.details}
                        </h3>
                      </div>

                      <p className="text-without-icon-taleido">
                        {" "}
                        {element.content}
                      </p>
                     
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={element.id}>
                <div className="taleido_lec">
                  <div
                    className="taleido_img"
                    data-aos="GuestAnimLeft"
                  >
                    <img
                      src={element.imgSrc}
                      className="Taleido-img"
                      alt={element.name}
                    />
                  </div>

                  <div className="about_taleido para1" 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  // data-aos-delay="100"
                  data-aos-offset="400"
                  data-aos-easing="ease-in-sine">
                    <div className="taleido_heading">
                      <h3 className="taleido_name">
                        {element.name} <br /> {element.details}
                      </h3>
                    </div>
                    <p className="text-without-icon-taleido">
                      {element.content}
                    </p>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    
    </>
  );
}

export default Blog;
