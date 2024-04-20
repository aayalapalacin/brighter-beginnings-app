import React from "react";

interface Accordion2Props {
  program: {
    title: string;
    description: string;
    color: string;

  }[] | null;
  icon: string ;
  program_name: string;
}

const Accordion2 = ({ program, icon, program_name }: Accordion2Props) => {
  if (program)
    return (
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <div className="d-flex">
            <img src={icon} className="w-25" alt={icon} />
            <h1>
              {program_name}
            </h1>
          </div>
          {program.map((programData , programDataIndex) =>{
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
                {programData.title}
                </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">{programData.description}</div>
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
