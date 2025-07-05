import React, { useState, useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import Accordian from "../component/Programs/Accordian";
import "../../styles/programs.css";
import { useLocation } from 'react-router-dom';
import ErrorNotification from "../component/ErrorNotification";

export interface AccordionDataType {
  accordion_title: string;
  childName?: string;
  kidsAge?: number;
  age?: string;
  start?: any | number;
  end?: any | number;
  img?: string;
  bg_color: string;
  dropdownData: {
    title: string;
    description: string | any;
    color: string;
  }[];
}

const Programs = () => {
  const [accordianData, setAccordianData] = useState<AccordionDataType | null>(
    null
  );
  const [hide,setHide]=useState<boolean>(false);
  const [isProgramClicked, setIsProgramClicked] = useState<boolean>(false);
  const [enlarged, setEnlarged] = useState<boolean>(false);

      const location = useLocation(); 
  
  const contextValue = useContext(Context);
  useEffect(()=>{
     if(contextValue && contextValue.store.childProgram.firstName.length > 1){
 
       setHide(true)
     }
     else{
       setHide(false)
     }
 
 },[contextValue?.store?.childProgram.firstName, contextValue])
 
useEffect(() => {
        // Check if there's a hash in the URL and try to scroll to it
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1)); // Get element by ID (remove the #)
            if (element) {
                // Optional: Add a slight delay to ensure content is fully rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 0); // 0ms timeout means it runs after current render cycle
            }
        }
    }, [location]);

    
  if (!contextValue || !contextValue.store || !contextValue.store.availablePrograms || contextValue.store.availablePrograms.length === 0) {
    return <ErrorNotification />;
  }
  const { store, actions } = contextValue;
  
  


  const handleClick = (kid: AccordionDataType) => {
    setHide(true)
    setAccordianData(kid);
    setIsProgramClicked(true);
  };

  const handleBtnAnimation = () => {
    setEnlarged(true);
  };


  let renderedAccordian: JSX.Element | null = null;

  if (isProgramClicked) {
  
    renderedAccordian = (
      <Accordian accordianData={accordianData} imgFirst={true} />
    );
  } else if (store.childProgram.firstName === "") {

    renderedAccordian = null;
  } else if (store.childProgram) {
    renderedAccordian = (
      <Accordian accordianData={store.inputKidProgram} imgFirst={true} />
    );
  }

    
  
  return (
    <div data-testid="programs" id="childProgram" className="program-types-container">
      <div
        className={`program-info-container row w-50 mx-auto justify-content-center pb-5`}>
        {store.availablePrograms && !hide  ? store.availablePrograms.map((kid, index) => {
          const splitAccordionTitle =
            kid.accordion_title.split("Program Details");
            const altValueArray = kid.img ? kid.img.split("/") : "";
            const altValue = altValueArray[altValueArray.length-1].replace(".png","");
            return (
            <div
              className={`program-info-cards btn bg-gradient-${kid.bg_color} col-sm-5`}
              key={index}
              onClick={() => handleClick(kid)}
              style={{ display: isProgramClicked ? "none" : "inline-block" }}>
              <h3 className="program-info-card-title">
                <strong>{splitAccordionTitle[0]} </strong>
              </h3>
              <p className="program-info-card-age">{kid.age}</p>
              <img
                src={kid.img}
                className="program-info-card-img pb-4"
                alt={altValue}
              />
            </div>
          );
        }):""}
      </div>

      <div
        className={` programs-info-program-clicked_container  square ${
          isProgramClicked || store.childProgram ? "square-full   " : ""
        }  `}
        style={{ marginBottom: "6rem" }}>
        <div className="programs-info-program-clicked-content text-center">
          <div className="programs-info-program-clicked-accordion-container">
            {renderedAccordian} 
          </div>
          {(isProgramClicked || store.childProgram.firstName.length >= 3) && (
            <div
              className={`programs-info-program-clicked-btn-container CLICKED: ${isProgramClicked} 
            `}>
              <button
                type="button"
                className={`btn bg-sky text-white  fs-3 program-info-all-programs-btn ${enlarged ? 'enlarged' : ''}`}
                onClick={() => {
                  setIsProgramClicked(false);
                  handleBtnAnimation();
                  actions.clearChildProgram();
                }}>
                All programs
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;
