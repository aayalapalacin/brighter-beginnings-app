import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Accordion from "../component/Programs/Accordian";
import "../../styles/forms.css";
// import "../../../styles/accordion.css";
import { AccordionDataType } from "../pages/programs";

const accordionContent: AccordionDataType[] = [
  {
    accordion_title: "Available Forms",
    bg_color: "grass",
    dropdownData: [
      {
        title: "Enrollment and Registration",
        description: <ul>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Welcome%20to%20our%20Class.pdf" title="Welcome to our Class.pdf">Welcome to our Class</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Application_1.pdf" title="Application.pdf">Application</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Enrollment%20Form%20Page%201.pdf" title="Enrollment Form Page 1.pdf">Enrollment Form Page 1</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Enrollment%20Form%20Page%202.pdf" title="Enrollment Form Page 2.pdf">Enrollment Form Page 2</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Parent%20Information%20Form%20Page%201.pdf" title="Parent Information Form Page 1.pdf">Parent Information Form Page 1</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Parent%20Information%20Form%20Page%202.pdf" title="Parent Information Form Page 2.pdf">Parent Information Form Page 2</a></li>
    </ul>,
        color: "sky",
      },
      {
        title: "Medical and Emergency Information",
        description: <ul>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/First%20Aid%20and%20Emergency%20Medical%20Care%20Consent%20Form%20Page%201.pdf" target="_blank" title="First Aid and Emergency Medical Care Consent Form Page 1.pdf" rel="noreferrer">First Aid and Emergency Medical Care Consent Form Page 1</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/First%20Aid%20and%20Emergency%20Medical%20Care%20Consent%20Form%20Page%202.pdf" target="_blank" title="First Aid and Emergency Medical Care Consent Form Page 2.pdf" rel="noreferrer">First Aid and Emergency Medical Care Consent Form Page 2</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Medical%20Administration%20Record.pdf" target="_blank" title="Medical Administration Record.pdf" rel="noreferrer">Medical Administration Record</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Medication%20Consent%20Form.pdf" target="_blank" title="Medication Consent Form.pdf" rel="noreferrer">Medication Consent Form</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Physical%20page%201.pdf" target="_blank" title="Physical Page 1.pdf" rel="noreferrer">Physical Page 1</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Physical%20page%202.pdf" target="_blank" title="Physical Page 2.pdf" rel="noreferrer">Physical Page 2</a></li>
    </ul>,
        color: "sky",
      },
      {
        title: "Child Development and Background",
        description: <ul>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Developmental%20History%20and%20Background%20Page%201.pdf" target="_blank" title="Developmental History and Background Page 1.pdf" rel="noreferrer">Developmental History and Background Page 1</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Developmental%20History%20and%20Background%20Page%202.pdf" target="_blank" title="Developmental History and Background Page 2.pdf" rel="noreferrer">Developmental History and Background Page 2</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Developmental%20History%20and%20Background%20Page%203.pdf" target="_blank" title="Developmental History and Background Page 3.pdf" rel="noreferrer">Developmental History and Background Page 3</a></li>
    </ul>,
        color: "sky",
      },
      {
        title: "Additional Information and Authorization",
        description:  <ul>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/School%20Supply%20List.pdf" target="_blank" title="School Supply List.pdf" rel="noreferrer">School Supply List</a></li>
        <li><a href="https://www.brighterbeginningcc.com/Forms_files/Transportation%20and%20Authorization%20Plan.pdf" target="_blank" title="Transportation and Authorization Plan.pdf" rel="noreferrer">Transportation and Authorization Plan</a></li>
    </ul>,
        color: "sky",
      },
    ],
  },
];

const Forms = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  return (
    <div className="forms-container m-auto w-100">
      <Accordion accordianData={accordionContent[0]} imgFirst={false} />
    </div>
  );
};

export default Forms;
