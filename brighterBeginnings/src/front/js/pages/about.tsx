import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Accordion from "../component/Programs/Accordian";

const About = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;
  return (
    <div className="about-container mx-auto">
      <div className="about-accordion-container p-5">
        <Accordion accordianData={store.philosophyData[0]} imgFirst={false} />
      </div>
      <hr className="w-75 mx-auto" />

      <div className="about-staff-container">
        <div className="about-staff-img-container w-75 mx-auto">
          <img
            src="/staff_images/smilling_staff.png"
            className="about-staff-img w-100 mx-auto"
            style={{ transform: "scale(1)" }}
            alt="staff"
          />
        </div>
        <span id="meet-staff-caption" className="about-staff-caption-container">
          <h1 className="about-staff-caption text-white text-bold ">
            Meet our staff
          </h1>
          <h6 className="about-staff-caption-btn btn border border-2 rounded-pill text-white float-end me-5">
            Go!
          </h6>
        </span>
      </div>
    </div>
  );
};

export default About;
