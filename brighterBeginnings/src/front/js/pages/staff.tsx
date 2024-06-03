import React, {useState} from "react";
import { staffData } from "../utils/staff_data";
const Staff = () => {

    const[dropdownTitle, setDropdownTitle]= useState<string>("All Staff");
  return <div className="staff-page-container">
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
                    <div className="staff-page-profile-header-container">
                        <div className="staff-page-img-container">
                            <div className="staff-page-img">
                                  {staffData[0].img}
                            </div>
                        </div>
                        <div className="staff-page-name-role-fun-container">
                            <div className="staff-page-name">
                            {staffData[0].name}
                            </div>
                            <div className="staff-page-role">
                            {staffData[0].role}
                            </div>
                            <div className="staff-page-fun">
                            {staffData[0].fun_fact}

                            </div>
                        </div>
                    </div>
                    <div className="staff-page-profile-footer-container">
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
