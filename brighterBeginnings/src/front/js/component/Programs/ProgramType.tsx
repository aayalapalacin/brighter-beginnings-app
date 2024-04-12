import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import ProgramsAccordion from "./Accordion";
import "../../../styles/programs.css";
import { KidType } from "./ProgramsAccordion";

const ProgramType = () => {
  const [clickedProgram, setClickedProgram] = useState<KidType | null>(null);
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;
  const availablePrograms = store.availablePrograms;

  const handleClick = (kid: KidType) => {
    setClickedProgram(kid);
    console.log(clickedProgram);
  };
  return (
    <div className="program-types-container row text-center mx-auto border-bottom border-3">
      {availablePrograms.map((kid, index) => (
        <div className="program-info-container col-5 m-auto p-4" key={index}>
          <div
            className={`w-100 btn bg-${kid.color}`}
            onClick={() => handleClick(kid)}>
            <h3>{kid.category}</h3>
            <p>{kid.age}</p>
            <img
              src={kid.img}
              className="program-types-img p-2"
              alt="programs type"
            />
          </div>
        </div>
      ))}
      <ProgramsAccordion kid={clickedProgram} />
    </div>
  );
};

export default ProgramType;
