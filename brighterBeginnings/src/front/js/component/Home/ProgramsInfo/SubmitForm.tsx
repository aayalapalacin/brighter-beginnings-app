import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context, ContextValue } from "../../../store/appContext";
import "../../../../styles/submit-form.css";

const SubmitForm = () => {
  const [firstName, setFirstName] = useState("");
  const [yearsOld, setYearsOld] = useState("");
  const [monthsOld, setMonthsOld] = useState("");
  const [validFormAge, setValidFormAge] = useState(false);
  const [validFormName, setValidFormName] = useState(false);
  const navigate = useNavigate();

  let sumAge = 0;
  if (yearsOld === "") {
    sumAge = 0 + Math.round(parseFloat(monthsOld));
  } else if (monthsOld === "") {
    sumAge = parseFloat(yearsOld) * 12 + 0;
  } else {
    sumAge = Math.round(parseFloat(yearsOld) * 12 + parseFloat(monthsOld));
  }
  const contextValue: ContextValue | null = useContext(Context);
  if (!contextValue) {
    return null;
  }

  const { actions } = contextValue;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    validateFields();
    e.preventDefault();
    if (validFormAge && sumAge > 2) {
      actions.handleChildProgramSubmit(e, firstName, yearsOld, monthsOld);
      navigate("/programs");
    } else {
      setValidFormAge(false);
    }
  };

  const validateFields = () => {
    if (sumAge > 60 || sumAge < 1.5) {
      setValidFormAge(false);
    } else setValidFormAge(true);
    if (firstName.length < 3) {
      setValidFormName(false);
    } else setValidFormName(true);
  };

  const calculateProgressBar = () => {
    const filledInputs =
      (firstName ? 1 : 0) + (yearsOld ? 1 : 0) + (monthsOld ? 1 : 0);

    const completionPercentage = (filledInputs / 3) * 100;

    return completionPercentage;
  };

  return (
    <div className=" submit-form-container color-tree text-start fs-4">
      <form
        className=" submit-form-tag-container w-100"
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <div className="submit-form-input-container w-100  ">
          <div className="submit-form-name-cointainer row  mb-3">
            <div className="submit-form-name-title col-4  pe-0">
              {/* depending on screen size have two options to render to save space when needed */}
              <p
                id="child-name"
                className="  my-auto text-shadow text-end d-md-block d-none text-nowrap">
                Child's first name:
              </p>
              <p
                id="child-no-name"
                className="my-auto text-shadow d-md-none d-block text-end text-nowrap">
                Child:
              </p>
            </div>
            <div className="submit-form-name-input-container col-8 ">
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="submit-form-name-input my-auto form-control"
                placeholder="Write here"
              />
              {firstName.length < 3 && firstName.length >= 1 && (
                <p className="validation-text">Please provide full name</p>
              )}
            </div>
          </div>
          <div className="submit-form-age-container row ">
            <div className="submit-form-age-title-container col-4  pe-0">
              <p className="submit-form-age-title text-shadow my-auto text-end ">
                Age:
              </p>
            </div>
            <div className="submit-form-age-input-years-container col-4  d-flex">
              <input
                min={0}
                max={5}
                value={yearsOld}
                onChange={(e) => {
                  setYearsOld(e.target.value);
                }}
                className="submit-form-age-input-years w-100 form-control"
                type="text"
                placeholder="Years"
              />
            </div>
            <div className="submit-form-age-input-years-container col-4 ">
              <input
                value={monthsOld}
                min={0}
                max={60}
                onChange={(e) => setMonthsOld(e.target.value)}
                className="submit-form-age-input-years w-100 form-control"
                type="text"
                placeholder="Months"
              />
            </div>
          </div>
          {sumAge < 1.5 || sumAge > 60 ? (
            <p className="validation-text text-center">
              Age range: 6 Weeks - 5 Years
            </p>
          ) : null}
        </div>
        <div className="submit-form-btn-container w-100 text-end mt-5 d-flex justify-content-end">
          <Link to="/programs">
            <p className="programs-info-button col-lg-4 my-auto  btn bg-sky rounded-pill text-white">
              All Programs
            </p>
          </Link>

          <button
            className="programs-info-button col-lg-3  my-auto  btn bg-grass rounded-pill text-white ms-4"
            type="submit">
            Submit
          </button>
        </div>
      </form>
      <div
        className=" submit-form-progress-bar-percent-container color-tree text-end p-2"
        style={{
          width: `${calculateProgressBar()}%`,
          transition: "ease-in 0.37s",
        }}>
        <strong className="submit-form-progress-bar-percent ms-2">
          {Math.round(calculateProgressBar())}%
        </strong>
      </div>
      <div
        className="progress bg-white p-0 w-100"
        role="progressbar"
        style={{ height: "1.85rem" }}
        aria-label="Completion Progress"
        aria-valuenow={calculateProgressBar()}
        aria-valuemin={0}
        aria-valuemax={100}>
        <div
          className="progress-bar color-tree"
          style={{ width: `${calculateProgressBar()}%` }}
        />
      </div>
    </div>
  );
};

export default SubmitForm;
