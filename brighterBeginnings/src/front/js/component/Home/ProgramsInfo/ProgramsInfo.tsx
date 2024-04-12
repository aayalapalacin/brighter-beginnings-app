import React, { useState } from "react";
import SubmitForm from "./SubmitForm";
import { Link } from "react-router-dom";

const ProgramsInfo = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {!isClicked ? (
        <div className="p-md-5 p-0 container m-md-6 m-5 mx-auto">
          <div className="w-100 m-auto">
            <div className="title-container w-100 text-center">
              <h1 className="color-tree programs-title-all">
                We provide programs for children from 4 months - 5 yrs
              </h1>
            </div>
            <div className="programs-info-content-container  m-auto pt-1 row justify-content-center">
              <div className="col d-flex justify-content-end ">
                <img
                  className=" image-shadow backpack-image me-md-5"
                  src="/home_images/backpack.webp"
                  alt="Backpack"
                />
              </div>
              <div className="col mx-auto mt-5 text-start">
                <Link to="/programs">
                  <button
                    type="button"
                    className=" btn programs-button col-lg-4 my-auto me-md-2 me-0 btn bg-sky rounded-pill text-white"
                  >
                    All Programs
                  </button>
                </Link>

                <button
                  type="button"
                  className=" btn programs-button text-nowrap my-auto ms-md-2  ms-0 btn bg-grass rounded-pill text-white"
                  onClick={handleClick}
                >
                  Help Me Choose
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-md-5 p-2 container  find-program-container ">
          <div className="w-100 mt-md-0 mt-5">
            <div className="title-container mt-md-0 mt-3 w-100 mx-auto text-center">
              <h1 className="color-sky programs-title text-md-start text-center ps-2 ms-md-5 ms-0">
                Let’s Find the Program for Your Child!
              </h1>
            </div>
            <div className="w-100  m-auto pt-3 row ">
              <div className="col-3 ">
                <img
                  className="  m-auto d-md-block d-none text-end image-shadow backpack-image"
                  id="backpack-image-help-choose"
                  src="/home_images/backpack.webp"
                  alt="Backpack"
                />
              </div>
              <div className="col-lg-6 mt-md-5 mt-0 text-center">
                <SubmitForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramsInfo;
