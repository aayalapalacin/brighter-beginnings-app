import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import Accordion2 from "../component/Programs/Accordian2";
const About = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store } = contextValue;
  return <div>About
    {/* {store.} */}
    <Accordion2 accordianData={store.philosophyData[0]} />
  </div>;
};

export default About;
