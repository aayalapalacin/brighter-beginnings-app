import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import Accordian2 from "./Accordian";

import "../../../styles/programs.css";

export interface AccordionDataType {
  accordion_title: string;
  childName?: string;
  kidsAge?: number;
  age: string;
  start: any | number;
  end: any | number;
  img: string;
  bg_color: string;
  dropdownData: {
    title: string;
    description: string | any;
    color: string;
  }[];
}

const ProgramType = () => {
  const [accordianData, setAccordianData] = useState<AccordionDataType | null>(null);
  const [isProgramClicked, setIsProgramClicked] = useState(false);
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store, actions } = contextValue;

  const handleClick = (kid: AccordionDataType) => {
    setAccordianData(kid);
    setIsProgramClicked(true);
  };

  let renderedAccordian: JSX.Element | null = null;

  if (isProgramClicked) {
    renderedAccordian = <Accordian2 accordianData={accordianData} />;
  } else if (store.childProgram) {
    renderedAccordian = <Accordian2 accordianData={store.inputKidProgram} />;
  }

  return (
    <div className="program-types-container">
      <div
        className={`program-info-container row w-50 mx-auto justify-content-center pb-5`}>
        {store.availablePrograms.map((kid, index) => {
          const splitAccordionTitle =
            kid.accordion_title.split("Program Details");
          console.log(
            splitAccordionTitle,
            "splitted string from accordion title"
          );

          return (
            <div
              className={`program-info-cards btn bg-gradient-${kid.bg_color} col-md-5`}
              key={index}
              onClick={() => handleClick(kid)}>
              <h3 className="program-info-card-title">
                <strong>{splitAccordionTitle[0]}</strong>
              </h3>
              <p className="program-info-card-age">{kid.age}</p>
              <img
                src={kid.img}
                className="program-info-card-img pb-4"
                alt="programs type"
              />
            </div>
          );
        })}
      </div>
      {renderedAccordian}
    </div>
  );
};

export default ProgramType;
