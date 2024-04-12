import React from "react";
import Carousel from "../component/Home/Carousel";
import ProgramsInfo from "../component/Home/ProgramsInfo/ProgramsInfo";
import CareersContent from "../component/Home/CareersContent";
import "../../styles/home.css";
import ClassDojo from "../component/ClassDojo";

const Home = () => {
  return (
    <div className="">
      <Carousel />
      <div className="container w-100">
        <ProgramsInfo />
        <hr />
        <ClassDojo />
        <hr />
        <CareersContent />
      </div>
    </div>
  );
};

export default Home;
