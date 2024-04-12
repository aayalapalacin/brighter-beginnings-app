import React from "react";
import "../../../styles/careers.css";

function CareersContent() {
  return (
    <div className="careers-container container">
      <div className="career-inner-container">
        <div className="w-100 careers-title-container color-carrot text-bold mt-5 mb-3">
          <h1 className="careers-title-text">
            Join the Brighter Beginnings family!
          </h1>
        </div>
        <div className="careers-content">
          <div className="careers-icon">
            <img
              className="block-img w-75 text-center image-shadow"
              src="/home_images/abc_block.webp"
              alt="blocks"
            />
          </div>
          <div className="careers-text-btn-container">
            <div className="careers-text color-tree fs-4">
              Help transform lives of children’s and their family while
              receiving professional development and competitive wages.
            </div>
            <a
              href="https://www.google.com/forms/about/"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer">
              <div className="careers-btn-container bg-secondary w-75 ">
                <button
                  className="careers-btn text-white rounded-pill btn bg-carrot fs-5 float-end px-4"
                  style={{ boxShadow: "0px 4px 12px -2px black" }}>
                  Apply Now
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersContent;
