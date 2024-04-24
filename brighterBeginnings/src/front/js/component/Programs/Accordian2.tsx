import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { KidType } from "./ProgramType";
import "../../../styles/accordian.css";

interface Accordion2Props {
  accordianData: KidType | null;
}

const Accordion2 = ({ accordianData }: Accordion2Props): JSX.Element | null => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;

  if (!accordianData) {
    return null; // or any other fallback JSX
  }
  return (
    <div className="accordion" id="accordion2">
      <div className="accordion-item w-50 mx-auto">
        <div className=" accordion-img-title-container d-flex">
          <img
            style={{ width: "20%" }}
            src={accordianData.img}
            className=" accordion-img "
            alt={accordianData.img}
          />
          <h3 className="accordion-title m-auto">
            {accordianData.accordion_title}
          </h3>
        </div>
        {accordianData.dropdownData.map(
          (accordionContent, accordionContentIndex) => {
            return (
              <div className="accordion-item">
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
  );
};

export default Accordion2;
