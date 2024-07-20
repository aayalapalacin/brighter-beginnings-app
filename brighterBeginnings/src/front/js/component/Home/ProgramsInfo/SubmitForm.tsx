import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context, ContextValue } from "../../../store/appContext";
import "../../../../styles/submit-form.css";

type FormState = {
  firstName: string;
  yearsOld: string;
  monthsOld: string;
};

const SubmitForm = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    yearsOld: "",
    monthsOld: "",
  });
  const [formValid, setFormValid] = useState<boolean>(true);
  const navigate = useNavigate();
  const { firstName, yearsOld, monthsOld } = formState;
  let sumAge = (parseFloat(yearsOld) || 0) * 12 + (parseFloat(monthsOld) || 0);

  const contextValue: ContextValue | null = useContext(Context);
  if (!contextValue) {
    return null;
  }

  const { actions } = contextValue;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleValidationMessage = (): JSX.Element | null => {
    if (sumAge < 2 && firstName.length < 3) {
      return <p className="validation-text col">*Age and Name Required</p>;
    } else if (sumAge === 0) {
      return <p className="validation-text col">*Age Required</p>;
    } else if (firstName.length <= 2) {
      return <p className="validation-text col">*Name required</p>;
    } else if (sumAge < 2 || sumAge > 60) {
      return <p className="validation-text col">*No program for given age (if 6 weeks enter 2 months)</p>;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sumAge <= 1.4 || firstName.length < 2 || sumAge > 60) {
      setFormValid(false);
    } else {
      setFormValid(true);
      actions.handleChildProgramSubmit(e, firstName, yearsOld, monthsOld);
      navigate("/programs");
    }
  };

  const calculateProgressBar = (): number => {
    const filledInputs =
      (firstName ? 1 : 0) + (yearsOld ? 1 : 0) + (monthsOld ? 1 : 0);

    const completionPercentage = (filledInputs / 3) * 100;

    return completionPercentage;
  };

  return (
    <div data-testid="submit-form" className=" submit-form-container color-tree text-start fs-4">
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
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                type="text"
                className="submit-form-name-input my-auto form-control"
                placeholder="Write here"
              />
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
                name="yearsOld"
                min={0}
                max={5}
                value={yearsOld}
                onChange={handleInputChange}
                className="submit-form-age-input-years w-100 form-control"
                type="number"
                placeholder="Years"
              />
            </div>
            <div className="submit-form-age-input-years-container col-4 ">
              <input
                name="monthsOld"
                value={monthsOld}
                min={0}
                max={60}
                onChange={handleInputChange}
                className="submit-form-age-input-years w-100 form-control"
                type="number"
                placeholder="Months"
              />
            </div>
          </div>
          {!formValid && handleValidationMessage()}
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
