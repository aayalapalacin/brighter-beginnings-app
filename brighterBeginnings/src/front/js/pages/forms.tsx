import Accordion from "../component/Programs/Accordian";
import "../../styles/forms.css";
import ErrorNotification from "../component/ErrorNotification";
import usePageContent from "../../../hooks/usePageContent";
import {FormsAccordionData} from "../../../types/forms"
import {AccordionLink} from "../../../types/forms"
import {AccordionDropdownData} from "../../../types/forms"

const Forms = () => {

  const { content: formContent,  error } = usePageContent<FormsAccordionData>('forms');

    if (!formContent || error) {
    return <ErrorNotification />;
  }
  let updatedFormContent:any = formContent;

  formContent.dropdownData.forEach(
    (dropData:AccordionDropdownData, i:number)=>{

     
      const ul = (
        <ul>
          {dropData.description.map((item:AccordionLink, idx:number) => (
            <li key={idx}>
              <a
                href={item.url}
                rel="noreferrer"
                target="_blank"
                title={`${item.text}.pdf`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      );

      updatedFormContent.dropdownData[i].description= ul
    }
  )

  return (
    <div className="forms-container m-auto w-100">
      <Accordion accordianData={updatedFormContent} imgFirst={false} />
    </div>
  );
};

export default Forms;
