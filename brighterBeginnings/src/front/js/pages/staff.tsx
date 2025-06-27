import React, { useState, useEffect } from "react";
import { staffData } from "../utils/staff_data";
import "../../styles/staff.css";
const Staff = () => {
  interface staffDataInterface {
    name: string;
    role: string;
    category: string;
    language: string;
    credentials: { state_req: string; staff_cred: string }[];
    img: JSX.Element;
  }
  const [dropdownTitle, setDropdownTitle] = useState<string>("All Staff");

  const filteredStaffData: staffDataInterface[] =
    dropdownTitle === "All Staff"
      ? staffData
      : staffData.filter((staff) => staff.category === dropdownTitle);

       useEffect(() => {
    // This will scroll the window to the very top (0, 0)
    // whenever the Staff component mounts (i.e., when you navigate to it).
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div data-testid="staff" id="staff-top" className="staff-page-container w-50 m-auto">
      <div className="staff-page-dropdown-container ">
        <div className="staff-page-dropdown dropdown m-5 d-flex justify-content-center">
          <a
            className="btn border border-dark dropdown-toggle fs-4 fw-bold color-sky px-4"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ boxShadow: "0px 2px 3px 0px #000000a3" }}
          >
            {dropdownTitle}
          </a>

          <ul className="dropdown-menu">
            {[
              "All Staff",
              "Admin",
              "Infant",
              "Toddler",
              "Preschool",
              "Floater",
            ].map((category) => (
              <li key={category} onClick={() => setDropdownTitle(category)}>
                <a className="dropdown-item">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="staff-page-results-container">
        {filteredStaffData.map((staffDataContent, staffDataContentIndex) => {
          return (
            <div
              key={`staffDataIndex${staffDataContentIndex}`}
              className="staff-page-profile-container"
              style={{ marginBottom: "5.3rem" }}
            >
              <div className="staff-page-profile-header-container d-flex">
                <div className="staff-page-img-container me-2 w-25">
                  {staffDataContent.img}
                </div>
                <div className="staff-page-name-role-fun-container m-4 fs-5">
                  <div className="staff-page-name-container mb-2 d-flex">
                    <div className="staff-page-name-title fw-bold me-2">
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
                      Language:
                    </div>
                    <div className="staff-page-fun">
                      {staffDataContent.language}
                    </div>
                  </div>
                </div>
              </div>

              <div className="staff-page-profile-footer-container mt-4">
                <div className="staff-page-footer-credential-title-container mb-5">
                  <div className="staff-page-footer-credential-title fw-bold fs-5 mb-3">
                    Credentials:
                  </div>
                  <div className="staff-page-footer-credential-data-container">
                    <table
                      className="table table-sm mb-0"
                      style={{
                        backgroundColor: "#89c9d0",
                        borderCollapse: "collapse",
                        width: "100%",
                      }}
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              border: "1px solid #ccc",
                              padding: "0.5rem",
                            }}
                          >
                            State Requirement
                          </th>
                          <th
                            style={{
                              border: "1px solid #ccc",
                              padding: "0.5rem",
                            }}
                          >
                            Staff Credential
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {staffDataContent.credentials.map(
                          (credentialData, index) => (
                            <tr key={`credentialData${index}`}>
                              <td
                                style={{
                                  border: "1px solid #ccc",
                                  padding: "0.5rem",
                                }}
                              >
                                {credentialData.state_req}
                              </td>
                              <td
                                style={{
                                  border: "1px solid #ccc",
                                  padding: "0.5rem",
                                }}
                              >
                                {credentialData.staff_cred}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
