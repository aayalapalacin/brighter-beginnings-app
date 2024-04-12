import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ProgramType from "../component/Programs/ProgramType";

const Programs = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store, actions } = contextValue;

  return (
    <div>
      <ProgramType />
    </div>
  );
};

export default Programs;
