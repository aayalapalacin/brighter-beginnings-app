import React, {useState} from "react";
import { staffData } from "../utils/staff_data";
const Staff = () => {

    const[dropdownTitle, setDropdownTitle]= useState<string>("All Staff");

    const filteredStaffData = dropdownTitle === "All Staff" ? staffData : staffData.filter(staff => staff.category === dropdownTitle);

    
  return <div className="staff-page-container w-50 m-auto">
            <div className="staff-page-dropdown-container ">
                <div className="staff-page-dropdown dropdown m-5 ">
                    <a 
                    className="btn border dropdown-toggle fs-4 fw-bold color-sky px-4 "  
                    role="button"
                     data-bs-toggle="dropdown" 
                     aria-expanded="false"
                     style={{boxShadow: "0px 2px 3px 0px #000000a3"}}
                     >
                        {dropdownTitle}
                    </a>

                    <ul className="dropdown-menu">
                        <li 
                            onClick={()=> setDropdownTitle("All Staff")}
                        > 
                            <a className="dropdown-item" >All Staff</a></li>
                        <li 
                            onClick={()=> setDropdownTitle("Admin")}
                        > 
                            <a className="dropdown-item" >Admin</a></li>
                        <li 
                            onClick={()=> setDropdownTitle("Infant")}
                        > 
                            <a className="dropdown-item" > Infant</a></li>
                        <li 
                            onClick={()=> setDropdownTitle("Toddler")}
                        > 
                            <a className="dropdown-item" > Toddler</a></li>
                        <li 
                            onClick={()=> setDropdownTitle("Pre School")}
                        > 
                            <a className="dropdown-item" > Pre School</a></li>
                            <li 
                            onClick={()=> setDropdownTitle("Floater")}
                        > 
                            <a className="dropdown-item" > Floater</a></li>
                    </ul>
                </div>
            </div>
            <div className="staff-page-results-container">
              {filteredStaffData.map((staffDataContent,staffDataContentIndex) =>{
                return(
                  <div className="staff-page-profile-container " style={{marginBottom:"5.3rem"}}>
                    <div className="staff-page-profile-header-container d-flex">
                        <div className="staff-page-img-container me-2 w-25">
                                  {staffDataContent.img}
                        </div>
                        <div className="staff-page-name-role-fun-container m-4 fs-5">
                            
                            <div className="staff-page-name-container mb-2 d-flex">    
                                <div className="staff-page-name-title  fw-bold me-2">    
                                    Name: 
                                </div>
                                <div className="staff-page-name">    
                                    {staffDataContent.name}
                                </div>
                            </div>

                            <div className="staff-page-role-container mb-2 d-flex">    
                                <div className="staff-page-role-title fw-bold me-2">    
                                    Role: 
                                </div>
                                <div className="staff-page-role">    
                                    {staffDataContent.role}
                                </div>
                            </div>
                            
                            <div className="staff-page-fun-container mb-2 d-flex">    
                                <div className="staff-page-fun-title fw-bold me-2">    
                                    Fun Fact: 
                                </div>
                                <div className="staff-page-fun">    
                                    {staffDataContent.fun_fact}
                                </div>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="staff-page-profile-footer-container ms-5 mt-4">
                      <div className="staff-page-footer-credential-title-container mb-5 ">
                          <div className="staff-page-footer-credential-title fw-bold fs-5 mb-3 ">
                              Credentials:
                          </div>
                          <div className="staff-page-footer-credential-data-container ms-4 overflow-auto " style={{height:"9rem"}}>
                                {staffDataContent.credentials.map((credentialData,credentialDataIndex)=>{
                                    return(
                                      <>
                                      <ul className="staff-page-footer-credential-data-ul mb-1">
                                        <li className="staff-page-footer-credential-state-li mb-2" >
                                            <span className="staff-page-footer-credential-txt p-1" style={{backgroundColor:"#8080804d"}}>
                                            {credentialData.state_req}
                                            </span>
                                        </li>
                                        <li className="staff-page-footer-credential-staff-li m-1" >
                                        <span className="staff-page-footer-credential-txt p-1" style={{backgroundColor:"#89c9d0bd"}}>
                                        {credentialData.staff_cred}
                                        </span>
                                        </li>
                                        </ul>
                                        <hr />
                                      </>
                                        
                                    )
                                }) }
                          </div>


                          
                      </div>
                    </div>
                </div>
                )

              })}
                
            </div>
        </div>;
};

export default Staff;
