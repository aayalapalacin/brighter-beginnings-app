import React from "react";
import { KidType } from "./ProgramsAccordion";

interface Accordion2Props {
  accordianData: KidType | null;
}

const Accordion2 = ({ accordianData}: Accordion2Props) => {
  if (accordianData)
    return (
      <div className="accordion" id="accordion2">
        <div className="accordion-item">

          <div className=" accordion-img-title-container d-flex">
            <img src={accordianData.img} className=" accordion-img w-25" alt={accordianData.img} />
            <h1 className="accordion-title">
              {accordianData.accordion_title}
            </h1>
          </div>
          {accordianData.dropdownData.map((accordionContent , accordionContentIndex) =>{
            return(
              <>
                  <h2 className="accordion-header">
                      <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne">
                      {accordionContent.title}
                      </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordion2">
                  <div className="accordion-body">{accordionContent.description}</div>
                </div>
              </>

            );
          })}
          
          </div>

        </div>
 
    );
  else return <div>Content not showing, refresh the page.</div>;
};

export default Accordion2;
