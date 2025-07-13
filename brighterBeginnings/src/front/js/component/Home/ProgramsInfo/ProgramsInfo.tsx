import React, { useState, useContext } from "react";
import SubmitForm from "../SubmitForm/SubmitForm";
import { Context } from "../../../store/appContext";
import ErrorNotification from "../../ErrorNotification";

import { Link } from "react-router-dom";
import "./programs-info.css";
interface programsInfoProps{
  title:string;
}
const ProgramsInfo = ({title}: programsInfoProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isShown, setShown] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShown(true);

  };
    const contextValue = useContext(Context);
  if (!contextValue || !contextValue.store || !contextValue.store.availablePrograms || contextValue.store.availablePrograms.length === 0) {
    return <ErrorNotification />;
  }

  const { actions } = contextValue;



  return (
    
    <div data-testid="programs-info" >
      <div
        style={{ display: isShown ? "none" : "inline-block" }}
        className={`programs-into-container paragraph p-md-5 p-0 container m-md-6 m-5 mx-auto`}
      >
        <div className="programs-info-title-container w-100 text-center">
              <h1 className="programs-info-title-all color-tree  text-shadow">
                {title}
              </h1>
            </div>
            <div className="programs-info-content-container  m-auto pt-1 row justify-content-center">
              <div className=" programs-info-img-container col d-flex justify-content-end ">
                <img
                  className=" programs-info-img image-shadow me-md-5"
                  src="/home_images/backpack.webp"
                  alt="Backpack"
                />
              </div>
              <div className=" programs-info-btn-container col mx-auto mt-5 text-start">
                <Link to="/programs">
                  <button
                    type="button"
                    data-testid="all-programs-programs-info"
                    className=" btn programs-info-button col-lg-4 my-auto me-md-2 me-0 btn bg-sky rounded-pill text-white"
                    onClick={()=> actions.clearChildProgram()}
                  >
                    All Programs
                  </button>
                </Link>

                <button
                  type="button"
                  className=" btn programs-info-button text-nowrap my-auto ms-md-2  ms-0 btn bg-grass rounded-pill text-white"
                  onClick={handleClick}
                >
                  Help Me Choose
                </button>
              </div>
            </div>
      </div>

      <div className={`find-program-container square ${isShown ? "square-full   p-md-5 p-2 container " : ""}  `}>
      <div className="w-100 mt-md-0 mt-5" style={{height: isShown ? "" : "20px"}}>
            <div className="find-program-title-container mt-md-0 mt-3 w-100 mx-auto text-center">
              <h1 
              className="find-program-programs-title color-sky  text-md-start text-center ps-2 ms-md-5 ms-0"
              style={{filter:"drop-shadow(0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3))"}}
              >
                Let’s Find the Program for Your Child!
              </h1>
            </div>
            <div className="find-program-img-submit-container w-100  m-auto pt-3 row ">
              <div className="find-program-img-container col-3 ">
                <img
                  className=" find-program-img  m-auto d-md-block d-none text-end image-shadow "
                  id="backpack-image-help-choose"
                  src="/home_images/backpack.webp"
                  alt="Backpack"
                />
              </div>
              <div className=" find-program-submit-form-container col-lg-6 mt-md-5 mt-0 text-center">
                <SubmitForm />
              </div>
            </div>
          </div>
      </div>
    </div>
   

  );
};

export default ProgramsInfo;
