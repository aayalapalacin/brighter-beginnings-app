import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { AccordionDataType } from "./ProgramType";
import "../../../styles/accordian.css";

interface AccordionProps {
  accordianData: AccordionDataType | null;
}

const Accordion = ({ accordianData }: AccordionProps): JSX.Element | null => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }


  // This is needed because accordionData may be null
  if (!accordianData) {
    return null;
  }

  // Not rendering any accordion
  if (accordianData.accordion_title === "") return null;

  // Rendering dessired accordion
  return (
    <div className="accordion w-75 mx-auto text-center pt-5" id="accordion">
      <div className="accordion-item w-75 mx-auto">
        <div className="accordion-img-title-content d-flex">
          <div className="accordion-img-content col-3 justify-content-end ms-5">
            <img
              src={accordianData.img}
              className="accordion-img w-75 pb-2"
              alt={accordianData.img}
            />
          </div>
          <div className="accordion-title-content col-8 m-auto text-start ms-4">
            <h3 className="accordion-title">{accordianData.accordion_title}</h3>
          </div>
        </div>
        {accordianData.dropdownData.map(
          (accordionContent, accordionContentIndex) => {
            return (
              <div className="accordion-item p-1" key={accordionContentIndex}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button bg-white border-${accordionContent.color}-1 color-${accordionContent.color} `}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${accordionContentIndex}`}
                    aria-expanded="true"
                    aria-controls={`collapse${accordionContentIndex}`}>
                    {accordionContent.title}
                  </button>
                </h2>
                <div
                  id={`collapse${accordionContentIndex}`}
                  className={`accordion-collapse collapse `}
                  data-bs-parent="#accordion">
                  <div className="accordion-body">
                    {accordionContent.description}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Accordion;
