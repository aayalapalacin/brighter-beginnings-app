// Interface for an individual link item within a dropdown
 export interface AccordionLink {
  text: string;
  url: string;
}

// Interface for a single dropdown section within the accordion
 export interface AccordionDropdownData {
  title: string;
  description: AccordionLink[]; // An array of AccordionLink
  color: string;
}

interface formUL{
  description: React.ReactNode;
}
 interface UpdatedAccordionDropdownData {
  title: string;
  description: formUL; // An array of AccordionLink
  color: string;
}
// Interface for the overall Forms Accordion data structure

export interface FormsAccordionData {
  accordion_title: string;
  bg_color: string;
  dropdownData: AccordionDropdownData[]; // An array of AccordionDropdownData
}

export interface UpdatedFormsAccordionData {
  accordion_title: string;
  bg_color: string;
  dropdownData: UpdatedAccordionDropdownData[]; // An array of AccordionDropdownData
}
// If you are directly importing the JSON content (e.g., from a generated JS file like forms-accordion.js)
// you might also need a declaration like this for type inference:
// declare const formsAccordionData: FormsAccordionData;
// export default formsAccordionData;