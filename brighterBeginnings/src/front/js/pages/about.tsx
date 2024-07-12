import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Accordion from "../component/Programs/Accordian";
import PlayLearnAreas from "../component/About/PlayLearnAreas";


import "../../styles/about.css";
import "../../styles/accordian.css";

const About = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;
  return (
    <div className="about-container w-100 mx-auto">
      <div className="about-page-img-container w-100">
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

      <div className="about-staff-container pt-5">
        <div className="about-staff-img-container w-100 m-auto text-center pt-5">
          <img
            src="/home_images/staff.jpeg"
            className="about-staff-img m-auto "
            alt="staff"
          />
        </div>

        <span
          id="about-staff-caption"
          className="about-staff-caption-container">
          <div className="about-staff-caption text-white text-bold fs-4 ">
            Meet our staff
          </div>
          <Link to="/staff">
            <div className="about-staff-caption-btn btn border border-3 rounded-pill text-white float-start ms-5 fs-6">
              <strong>Go!</strong>
            </div>
          </Link>
        </span>
      </div>
      
    </div>
  );
};

export default About;
