import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import Accordion2 from "../component/Programs/Accordian2";
const About = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;
  return (
    <div className="mx-auto">
      {/* {store.} */}
      <div className="about-page-accordion-container p-5">
        <Accordion2 accordianData={store.philosophyData[0]} />
      </div>
      <hr className="w-75 mx-auto" />

      <div className="meet-staff-content">
        <div className="meet-staff-img-container w-75 mx-auto">
          <img
            src="/staff_images/smilling_staff.png"
            className="meet-staff-img w-100 mx-auto"
            style={{ transform: "scale(1)" }}
            alt="staff"
          />
        </div>
        <span id="meet-staff-caption" className="">
          <h1 className="text-white text-bold ">Meet our staff</h1>
          <h6 className="btn border border-2 rounded-pill text-white float-end me-5">
            Go!
          </h6>
        </span>
      </div>
    </div>
  );
};

export default About;
