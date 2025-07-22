import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/Home/Carousel/Carousel";
import ProgramsInfo from "../component/Home/ProgramsInfo/ProgramsInfo";
import CareersContent from "../component/Home/CareersContent/CareersContent";
import "../../styles/home.css";
import ClassDojo from "../component/ClassDojo";
import ErrorNotification from "../component/ErrorNotification";
import usePageContent from "../../../hooks/usePageContent";
import {homeContentType} from "../../../types/homeContent"

const Home = () => {
  const contextValue = useContext(Context);
  const { content: homeContent,  error } = usePageContent<homeContentType>('home');

 

   if (
    error || // If there was an error fetching the home page content
    !homeContent || // If homeContent is null/undefined after loading (meaning it failed or wasn't found)
    !contextValue || // If context itself is missing
    !contextValue.store || // If context store is missing
    !contextValue.store.availablePrograms || // If availablePrograms is missing
    contextValue.store.availablePrograms.length === 0 // If availablePrograms is empty
  ) {
    console.error("Error loading home page. Content error: ", error, "Store error: ", contextValue);
    // You might want to pass more specific messages to ErrorNotification here
    return <ErrorNotification />;
  }

  return (
    <div className="">
      <Carousel slides={homeContent} />
      <div className="container w-100">
        <ProgramsInfo title={homeContent.title} />
        <hr />
        <ClassDojo classDojoDescription={homeContent.class_dojo_description} />
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
