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

  // Get all descriptions and prices of dropdownData items from all available programs
  const availablePrices = store.availablePrograms.map((program) => {
    const priceItem = program.dropdownData.find(
      (item) => item.title === "Price"
    );
    return { age: program.age, price: priceItem ? priceItem.description : "" };
  });

  // FINDING THE PRICE FOR THE CURRENT PROGRAM BASED ON THE AGE
  const currentProgramAge = store.inputKidProgram.age;
  const currentProgramPrice = availablePrices.find(
    (item) => item.age === currentProgramAge
  )?.price;

  if (accordianData?.childName) {
    // Check if there's a childName in the accordianData and modify accordianData
    accordianData = {
      ...accordianData,
      childName: store.inputKidProgram.childName,
      dropdownData: [
        {
          title: "Price",
          description: currentProgramPrice,
          color: "carrot",
        },
        {
          title: `${store.inputKidProgram.childName}'s Description`,
          description: `We take care of ${store.inputKidProgram.childName}`,
          color: "sky",
        },
        {
          title: `${store.inputKidProgram.childName}'s Schedule`,
          description: "Monday - Friday, 7:40am - 5pm",
          color: "grass",
        },
        {
          title: `Staff caring for ${store.inputKidProgram.childName}`,
          description: `${store.inputKidProgram.childName}'s staff`,
          color: "tree",
        },
      ],
    };
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
            {/* Conditionally rendering dynamic program details */}
            {accordianData && accordianData.childName
              ? `${accordianData.childName}'s Program Details (${accordianData.accordion_title})`
              : // Conditionally rendering the Program Details if nothing has been clicked nor submitted
              accordianData.img
              ? `Program Details (${accordianData.accordion_title})`
              : null}
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
