import React from "react";
import { staffData } from "../utils/staff_data";

const Staff = () => {
  return <div>Staff
    {staffData[0].name}
  </div>;
};

export default Staff;
