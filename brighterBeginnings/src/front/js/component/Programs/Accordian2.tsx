import React from "react";

interface Accordion2Props {
  dropdownData: {
    title: string;
    description: string;
    color: string;
  }[] | null;
  img: string ;
  category: string;


}

const Accordion2 = ({ dropdownData ,img , category}: Accordion2Props) => {
  if (dropdownData)
    return (
      <div className="accordion" id="accordion2">
        <div className="accordion-item">

          <div className=" accordion-img-title-container d-flex">
            <img src={img} className=" accordion-img w-25" alt={img} />
            <h1 className="accordion-category">
              {category}
            </h1>
          </div>
          {dropdownData.map((accordionContent , accordionContentIndex) =>{
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
  else return <div>Nothing has clicked</div>;
};

export default Accordion2;
