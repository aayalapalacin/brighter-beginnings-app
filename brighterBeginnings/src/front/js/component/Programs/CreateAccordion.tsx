import React from "react";
import { KidType } from "./ProgramsAccordion";

interface CreateAccordionProps {
  program: KidType | null;
}

const CreateAccordion = ({ program }: CreateAccordionProps) => {
  if (program)
    return (
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <div className="d-flex">
            <img src={program.img} className="w-25" alt="program types" />
            <h1>
              {program.name ? `${program.name}'s` : ""} Program Details
              {`(${program.category})`}
            </h1>
          </div>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Price
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">{program.price}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo">
              Description
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">{program.description}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree">
              {program.name ? `${program.name}'s` : ""} Schedule
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">{program.schedule}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour">
              {program.name ? `${program.name}'s` : ""} Staff
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">{program.staff}</div>
          </div>
        </div>
      </div>
    );
  else return <div>Nothing has clicked</div>;
};

export default CreateAccordion;
