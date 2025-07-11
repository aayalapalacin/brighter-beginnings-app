import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/Home/Carousel/Carousel";
import ProgramsInfo from "../component/Home/ProgramsInfo/ProgramsInfo";
import CareersContent from "../component/Home/CareersContent/CareersContent";
import "../../styles/home.css";
import ClassDojo from "../component/ClassDojo";
import ErrorNotification from "../component/ErrorNotification";
const Home = () => {
  const contextValue = useContext(Context);

   if (!contextValue || !contextValue.store || !contextValue.store.availablePrograms || contextValue.store.availablePrograms.length === 0) {
    return <ErrorNotification />;
  }

  return (
    <div className="">
      <Carousel />
      <div className="container w-100">
        <ProgramsInfo />
        <hr />
        <ClassDojo />
        <hr />
        <CareersContent
          mobileButtonCenter={false}
          innerContainerMx5={false}
          blockImage={true}
        />
      </div>
    </div>
  );
};

export default Home;
