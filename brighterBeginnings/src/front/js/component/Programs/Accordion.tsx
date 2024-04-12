import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { KidType } from "./ProgramsAccordion";

// export interface KidType {
//   category: string;
//   age: string;
//   img: string;
//   color: string;
//   price: string | number;
//   description: string;
//   schedule: string;
//   staff: string;
// }

interface ProgramsAccordionProps {
  kid: KidType | null;
}

const ProgramsAccordion = ({ kid }: ProgramsAccordionProps) => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;

  if (kid)
    return (
      <div>
        <div className="d-flex">
          <img src={kid.img} className="w-25" alt="program type" />
          <h1>{kid.category} Program Details</h1>
        </div>
        <div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>Schedule</p>
          </div>
          <div>
            <p>Staff</p>
          </div>
        </div>
      </div>
    );
  else if (store.childProgram) return <div>{store.childProgram.firstName}</div>;
  else return null;
};

export default ProgramsAccordion;
