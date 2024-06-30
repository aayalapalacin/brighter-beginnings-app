import React from "react";
import "../../styles/class_dojo.css";

const ClassDojo = () => {
  return (
    <div className="class-dojo-container align-items-center row">
      <div className="class-dojo-description-container col-md-6 col-12 pb-5">
        <h1 className=" class-dojo-description-title text-shadow color-tree mb-3">
          Stay Informed with Class Dojo
        </h1>
        <ul className="class-dojo-description-text fs-4">
          <li>Easily communicate with teachers</li>
          <li>Constant real time photo updates of activities</li>
          <li>Important Daycare Announcements </li>
          <li>Only parents/guardians have access</li>
        </ul>
      </div>
      <div className="class-dojo-video-container col-md-6 col-12 ">
        <iframe
          className="class-dojo-video w-100"
          src="https://www.youtube.com/embed/oufeciODPuo?si=7Bij7d8mLSd03Bus"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ClassDojo;
