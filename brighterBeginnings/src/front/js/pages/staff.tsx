import React from "react";
import { staffData } from "../utils/staff_data";

const Staff = () => {
  return <div className="staff-page-container">
            <div className="staff-page-dropdown">
                dropdown
            </div>
            <div className="staff-page-results-container">
                <div className="staff-page-profile-container">
                    <div className="staff-page-profile-header-container">
                        <div className="staff-page-img-container">
                            <div className="staff-page-img">
                                  staff img
                            </div>
                        </div>
                        <div className="staff-page-name-role-fun-container">
                            <div className="staff-page-name">
                                name
                            </div>
                            <div className="staff-page-role">
                                role
                            </div>
                            <div className="staff-page-fun">
                                fun
                            </div>
                        </div>
                    </div>
                    <div className="staff-page-profile-footer-container">
                      <div className="staff-page-footer-credential-title-container">
                          <div className="staff-page-footer-credential-title">
                              Credentials:
                          </div>
                          <div className="staff-page-footer-credential-data-container">
                                <ul className="staff-page-footer-credential-data-ul">
                                  <li className="staff-page-footer-credential-data-li">
                                      MA- 2 credits
                                  </li>
                                </ul>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>;
};

export default Staff;
