import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context, ContextValue } from "../../../store/appContext";
import "../../../../styles/submit-form.css";

const SubmitForm = () => {
  const [firstName, setFirstName] = useState("");
  const [yearsOld, setYearsOld] = useState("");
  const [monthsOld, setMonthsOld] = useState("");
  const navigate = useNavigate();

  const contextValue: ContextValue | null = useContext(Context);
  if (!contextValue) {
    return null;
  }

  const { store, actions } = contextValue;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (actions) {
      actions.handleChildProgramSubmit(e, firstName, yearsOld, monthsOld);
      navigate("/programs");
    }
  };

  const calculateProgressBar = () => {
    const filledInputs =
      (firstName ? 1 : 0) + (yearsOld ? 1 : 0) + (monthsOld ? 1 : 0);

    const completionPercentage = (filledInputs / 3) * 100;

    return completionPercentage;
  };

  return (
    <div className=" color-tree text-start fs-4">
      <form className="w-100" onSubmit={(e) => handleSubmit(e)}>
        <div className="w-100  ">
          <div className="row name-cointainer mb-3">
            <div className="col-4 name-title pe-0">
              <p
                id="child-name"
                className="  my-auto text-end d-md-block d-none text-nowrap">
                Child's first name:
              </p>
              <p
                id="child-no-name"
                className="my-auto d-md-none d-block text-end text-nowrap">
                Child:
              </p>
            </div>
            <div className="col-8 name-input">
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  console.log(firstName);
                }}
                type="text"
                className=" my-auto form-control"
                placeholder="Write here"
              />
            </div>
          </div>
          <div className="row age-container">
            <div className="col-4 age-title pe-0">
              <p className="my-auto text-end ">Age:</p>
            </div>
            <div className="col-4 age-year-input-container d-flex">
              <input
                value={yearsOld}
                onChange={(e) => {
                  setYearsOld(e.target.value);
                  console.log(yearsOld);
                }}
                className="w-100 form-control"
                type="number"
                placeholder="Years"
              />
            </div>
            <div className="col-4 age-month-input-container">
              <input
                value={monthsOld}
                onChange={(e) => setMonthsOld(e.target.value)}
                className="w-100 form-control"
                type="number"
                placeholder="Months"
              />
            </div>
          </div>
        </div>
        <div className="w-100 text-end mt-5 d-flex justify-content-end">
          <Link to="/programs">
            <p className="programs-button col-lg-4 my-auto  btn bg-sky rounded-pill text-white">
              All Programs
            </p>
          </Link>

          <button
            className="programs-button col-lg-3  my-auto  btn bg-grass rounded-pill text-white ms-4"
            type="submit">
            Submit
          </button>
        </div>
      </form>
      <div
        className="color-tree text-end p-2"
        style={{
          width: `${calculateProgressBar()}%`,
          transition: "ease-in 0.37s",
        }}>
        <strong className="ms-2">{Math.round(calculateProgressBar())}%</strong>
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
