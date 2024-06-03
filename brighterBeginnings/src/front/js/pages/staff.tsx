import React, {useState} from "react";
import { staffData } from "../utils/staff_data";
const Staff = () => {

    const[dropdownTitle, setDropdownTitle]= useState<string>("All Staff");

  return <div className="staff-page-container w-50 m-auto">
            <div className="staff-page-dropdown-container">
                <div className="staff-page-dropdown dropdown">
                    <a className="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            onClick={()=> setDropdownTitle("PreSchool")}
                        > 
                            <a className="dropdown-item" > PreSchool</a></li>
                    </ul>
                </div>
            </div>
            <div className="staff-page-results-container">
                <div className="staff-page-profile-container">
                    <div className="staff-page-profile-header-container d-flex">
                        <div className="staff-page-img-container me-2 w-25">
                                  {staffData[0].img}
                        </div>
                        <div className="staff-page-name-role-fun-container m-4 fs-5">
                            
                            <div className="staff-page-name-container mb-2 d-flex">    
                                <div className="staff-page-name-title  fw-bold me-2">    
                                    Name: 
                                </div>
                                <div className="staff-page-name">    
                                    {staffData[0].name}
                                </div>
                            </div>

                            <div className="staff-page-role-container mb-2 d-flex">    
                                <div className="staff-page-role-title fw-bold me-2">    
                                    Role: 
                                </div>
                                <div className="staff-page-role">    
                                    {staffData[0].role}
                                </div>
                            </div>
                            
                            <div className="staff-page-fun-container mb-2 d-flex">    
                                <div className="staff-page-fun-title fw-bold me-2">    
                                    Fun Fact: 
                                </div>
                                <div className="staff-page-fun">    
                                    {staffData[0].fun_fact}
                                </div>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="staff-page-profile-footer-container ">
                      <div className="staff-page-footer-credential-title-container">
                          <div className="staff-page-footer-credential-title">
                              Credentials:
                          </div>
                          {staffData[0].credentials.map((credentialData,credentialDataIndex)=>{
                            return(
                                <div className="staff-page-footer-credential-data-container">
                                <ul className="staff-page-footer-credential-data-ul">
                                  <li className="staff-page-footer-credential-state-li">
                                      {credentialData.state_req}
                                  </li>
                                  <li className="staff-page-footer-credential-staff-li">
                                      {credentialData.staff_cred}
                                  </li>
                                </ul>
                          </div>
                            )
                          }) }

                          
                      </div>
                    </div>
                </div>
            </div>
        </div>;
};

export default Staff;
