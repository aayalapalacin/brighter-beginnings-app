import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import CreateAccordion from "./CreateAccordion";

export interface KidType {
  accordion_title: string;
  age: string;
  start: any | number;
  end: any | number;
  img: string;
  bg_color: string;
  dropdownData:{
    title: string;
    description: string;
    color: string;
  }[]

}



interface ProgramsAccordionProps {
  clickedProgram: KidType | null;
}

const ProgramsAccordion = ({ clickedProgram }: ProgramsAccordionProps) => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;

  // Displaying accordion when Cards are CLICKED
  if (clickedProgram) {
    return (
      <div>
        <CreateAccordion program={clickedProgram} />
      </div>
    );

    // Displaying accordion if they submitted info through the SubmitForm Component
  } else if (store.childProgram) {
    return (
      <div>
        <CreateAccordion program={store.inputKidProgram} />
      </div>
    );

    // Handling when nothing has happened
  } else return null;
};

export default ProgramsAccordion;
