import React from "react";
import "./careers.css";
import usePageContent from "../../../../../hooks/usePageContent";
import {homeContentType} from "../../../../../types/homeContent"
import ErrorNotification from "../../ErrorNotification";

interface CareersContentProps {
  mobileButtonCenter: boolean;
  innerContainerMx5: boolean;
  blockImage: boolean;
}
function CareersContent({mobileButtonCenter, innerContainerMx5, blockImage }:CareersContentProps) {
    const { content: homeContent } = usePageContent<homeContentType>('home');
    if(!homeContent){
      return <ErrorNotification />
    }

    const {careers_heading, careers_text, careers_link }= homeContent;

  return (
    <div data-testid="careers-content" className="careers-container container">
      <div className={`career-inner-container ${innerContainerMx5 ? "mobile-margin" : ""}`}>
        <div className="careers-title-container w-100  color-carrot text-bold mt-5 mb-3">
          <h1 className="careers-title-text text-shadow">
            {careers_heading}
          </h1>
        </div>
        <div className="careers-content">
          <div className="careers-icon-container">
            <img
              className={`careers-icon ${blockImage ? "block-img" : ""} w-75 text-center image-shadow`}
              src="/home_images/abc_block.webp"
              alt="blocks"
            />
          </div>
          <div className="careers-text-btn-container">
            <div className="careers-text color-tree fs-4 mb-4">
             {careers_text}
            </div>
            <a
              href={careers_link}
              target="_blank"
              className="careers-google-forms text-decoration-none"
              rel="noreferrer">
              <div className={`careers-btn-container ${mobileButtonCenter ? "mobile-center" : "w-75"} `}>
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
