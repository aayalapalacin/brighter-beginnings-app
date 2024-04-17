import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import ProgramsAccordion from "./ProgramsAccordion";
import "../../../styles/programs.css";
import { KidType } from "./ProgramsAccordion";

const ProgramType = () => {
  const [clickedProgram, setClickedProgram] = useState<KidType | null>(null);
  // const [isProgramClicked, setIsProgramClicked] = useState(false);
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;

  const handleClick = (kid: KidType) => {
    setClickedProgram(kid);
    // setIsProgramClicked(true);
    console.log(clickedProgram);
  };
  return (
    <div className="program-types-container">
      <div
        className={`program-info-container row border-bottom border-3 w-50 mx-auto justify-content-center`}>
        {store.availablePrograms.map((kid, index) => (
          <div
            className={`program-info-cards btn bg-gradient-${kid.color} col-md-5`}
            key={index}
            onClick={() => handleClick(kid)}>
            <h3>{kid.category}</h3>
            <p>{kid.age}</p>
            <img
              src={kid.img}
              className="program-types-img pb-4"
              alt="programs type"
            />
          </div>
        ))}
      </div>

      <div className={``}>
        <ProgramsAccordion clickedProgram={clickedProgram} />
      </div>
    </div>
  );
};

export default ProgramType;
