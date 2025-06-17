import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Accordion from "../component/Programs/Accordian";
import PlayLearnAreas from "../component/About/PlayLearnAreas";


import "../../styles/about.css";
import "../../styles/accordian.css";

const About = () => {
  const contextValue = useContext(Context);

  if (!contextValue || !contextValue.store || !contextValue.store.availablePrograms || contextValue.store.availablePrograms.length === 0) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;
  return (
    <div data-testid="about" className="about-container w-100 mx-auto mb-5">
      <div className="about-page-img-container w-100 ">
        <img
          src="/about_images/children-reading-books.webp"
          className="w-100 about-page-img"
          alt="children_reading"
        />
      </div>
      <div className=" about-play-container mt-5  w-100">
        <div className="carousel-title-container w-50 mx-auto">
          <h1 className="carousel-title text-shadow text-start">Play and Learn Areas</h1>
        </div>
        <div className="play-carousel-container d-flex justify-content-center">
          <PlayLearnAreas />
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
            <Link to="/staff" className="btn btn-outline-light rounded-pill fw-bold">
              Go!
            </Link>
          </div>
    </div>

      
    </div>
  );
};

export default About;
