import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import ProgramsAccordion from "./ProgramsAccordion";
import Accordian2 from "./Accordian2";

import "../../../styles/programs.css";
import { KidType } from "./ProgramsAccordion";

const ProgramType = () => {
  const [accordianData, setAccordianData] = useState<KidType | null>(null);
  // const [isProgramClicked, setIsProgramClicked] = useState(false);
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;

  const handleClick = (kid: KidType) => {
    setAccordianData(kid);
    // setIsProgramClicked(true);
    console.log(accordianData);
  };
  return (
    <div className="program-types-container">
      <div
        className={`program-info-container row border-bottom border-3 w-50 mx-auto justify-content-center`}>
        {store.availablePrograms.map((kid, index) => (
          <div
            className={`program-info-cards btn bg-gradient-${kid.bg_color} col-md-5`}
            key={index}
            onClick={() => handleClick(kid)}>
            <h3 className="program-info-card-title">
              <strong>{kid.accordion_title}</strong>
            </h3>
            <p className="program-info-card-age">{kid.age}</p>
            <img
              src={kid.img}
              className="program-info-card-img pb-4"
              alt="programs type"
            />
          </div>
        ))}
      </div>

      <div className={``}>
        <Accordian2 accordianData={accordianData} />
        {/* <ProgramsAccordion clickedProgram={clickedProgram} /> */}
      </div>
    </div>
  );
};

export default ProgramType;
