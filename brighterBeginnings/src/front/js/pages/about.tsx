import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Accordion from "../component/Programs/Accordian";
import Space from "../component/About/Space";
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
        />
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
          <h1 className="about-staff-caption text-white text-bold ">
            Meet our staff
          </h1>
          <Link to="/staff">
            <h6 className="about-staff-caption-btn btn border border-3 rounded-pill text-white float-start ms-5">
              <strong>Go!</strong>
            </h6>
          </Link>
        </span>
      </div>
      <div className=" about-space-container d-flex w-100 justify-content-center">
      <div className="carousel-title-container">
      <h1 className="carousel-title text-shadow">The Space</h1>
    </div>
        <Space />
      </div>
    </div>
  );
};

export default About;
