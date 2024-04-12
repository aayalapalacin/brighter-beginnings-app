import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import CreateAccordion from "./CreateAccordion";

export interface KidType {
  name?: string;
  kidsAge?: number;
  category: string;
  age: string;
  start: any | number;
  end: any | number;
  img: string;
  color: string;
  price: string | number;
  description: string;
  schedule: string;
  staff: string;
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

  if (clickedProgram) {
    return (
      <div>
        <CreateAccordion program={clickedProgram} />
      </div>
    );
  } else if (store.childProgram) {
    return (
      <div>
        <CreateAccordion program={store.inputKidProgram} />
      </div>
    );
  } else return null;
};

export default ProgramsAccordion;
