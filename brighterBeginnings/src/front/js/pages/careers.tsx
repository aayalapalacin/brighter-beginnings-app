import React from "react";
import CareersContent from "../component/Home/CareersContent/CareersContent";
import "../../styles/careers-page.css";
const Careers = () => {
  return (
    <div>
      <div className=" careers-page-component-container w-75 m-auto">
      <CareersContent mobileButtonCenter={true} innerContainerMx5={true} blockImage={false}/>
      </div>
    </div>
  );
};

export default Careers;
