import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { AccordionDataType } from "./ProgramType";
import "../../../styles/accordian.css";

interface Accordion2Props {
  accordianData: AccordionDataType | null;
  imgFirst?: boolean;
}

const Accordion = ({
  accordianData,
  imgFirst,
}: Accordion2Props): JSX.Element | null => {
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
    <div
      className="accordion w-75 mx-auto text-center pt-5 pb-5"
      id="accordion2">
      <div className="accordion-item w-100 mx-auto">
        {imgFirst ? (
          // IMAGE FIRST
          <div className="accordion-img-title-content w-75 mx-auto d-flex">
            <div className="accordion-img-content m-auto col-3 text-end">
              <img
                src={accordianData.img}
                className="accordion-img-first pb-2"
                alt={accordianData.img}
              />
            </div>
            <div className="accordion-title-content col-8 m-auto text-start ms-4">
              <h3 className="accordion-title">
                {accordianData.accordion_title}
              </h3>
            </div>
          </div>
        ) : (
          // TITLE FIRST
          <div className="accordion-img-title-content w-75 m-auto d-flex justify-content-start">
            <div className="accordion-title-content text-start my-auto">
              <h3 className="accordion-title fs-1">
                {accordianData.accordion_title}
              </h3>
            </div>
            <div className="accordion-img-content col-5 text-start my-auto">
              <img
                src={accordianData.img}
                className="accordion-img pb-2"
                alt={accordianData.img}
              />
            </div>
          </div>
        )}
        <div className="accordion-items-container m-auto">
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
                      <p className="accordion-item-title my-auto">
                        <strong>{accordionContent.title}</strong>
                      </p>
                    </button>
                  </h2>
                  <div
                    id={`collapse${accordionContentIndex}`}
                    className={`accordion-collapse collapse `}
                    data-bs-parent="#accordion2">
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
    </div>
  );
};

export default Accordion;
