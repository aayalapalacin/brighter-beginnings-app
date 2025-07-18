import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Accordion from "../component/Programs/Accordian";
import PlayLearnAreas from "../component/About/PlayLearnAreas";
import ErrorNotification from "../component/ErrorNotification";
import { HashLink  } from 'react-router-hash-link';

import "../../styles/about.css";
import "../../styles/accordian.css";
import usePageContent from "../../../hooks/usePageContent";

interface AboutPageContent {
  title?: string; // Made optional as it wasn't in config.yml example, but good practice to have.
                  // If you added it back to config.yml, make it required.
  main_image: string; // As per your simplified generate-about-data.js, it's a plain string path
  play_learn_data: {
    carouselImg: string; // Plain string path
    carouselTitle: string;
    carouselDescription: {"point":string}[]; // Array of strings for bullet points
  }[];
}


const About = () => {
  const contextValue = useContext(Context);

    const { content: aboutContent, error } = usePageContent<AboutPageContent>('about');


   if (!contextValue || !contextValue.store || !contextValue.store.availablePrograms || contextValue.store.availablePrograms.length === 0 || error || !aboutContent) {
    return <ErrorNotification />;
  }
  
  const {
    title,
    main_image,
    play_learn_data = [] // Default empty array for carousel data
  } = aboutContent;


  const { store } = contextValue;

  return (
    <div data-testid="about" className="about-container w-100 mx-auto mb-5">
      <div className=" container">

      <h1>{title}</h1>
      </div>
      <div className="about-page-img-container mt-5 d-flex justify-content-center">
        <img
          src={main_image}
          className=" about-page-img"
          alt="children_reading"
          
        />
      </div>
      <div className=" about-play-container mt-5  w-100">
        <div className="carousel-title-container w-50 mx-auto">
          <h1 className="carousel-title text-shadow text-start">Play and Learn Areas</h1>
        </div>
        <div className="play-carousel-container d-flex justify-content-center">
          <PlayLearnAreas carouselData={play_learn_data} />
        </div>
        <hr className="m-auto w-75"/>

      </div>
      <div className="about-accordion-container">
        <Accordion accordianData={store.philosophyData[0]} imgFirst={false} />
      </div>
      <hr className="w-75 mx-auto" />

     <div className="about-staff-img-container w-100 m-auto text-center pt-5 position-relative">
          <img
            src="/home_images/staff2.png"
            className="about-staff-img m-auto"
            alt="staff"
          />

          <div className="staff-img-banner px-4 py-2 d-flex justify-content-center align-items-center text-white">
            <div className="fs-5 fw-bold me-4">Meet our staff</div>
           <HashLink
              to="/staff#staff-top" 
              className="btn  btn-outline-light rounded-pill fw-bold" 
            >
              Go!
            </HashLink>
          </div>
    </div>

      
     </div>
  );
};

export default About;
