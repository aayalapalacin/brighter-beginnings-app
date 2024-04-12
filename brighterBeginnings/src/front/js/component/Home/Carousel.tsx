import React from "react";
import "../../../styles/carousel.css";
const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active playground-container">
          <img
            src="/home_images/playground_photo.jpeg"
            className="h-100 w-100"
            style={{ transform: "scale(1)" }}
            alt="playground photo"
          />
          <span id="playground-caption" className="carousel-caption   ">
            <h1 className="text-white text-bold ">Playground paradise</h1>
            <h6 className=" d-none d-md-block">
              5 large fenced in play areas designated for different age groups
            </h6>
            <h6 className="btn border border-2 rounded-pill text-white float-end me-5">
              See More!
            </h6>
          </span>
        </div>
        <div className="carousel-item curriculum-container">
          <iframe
            className=""
            width="100%"
            height={"100%"}
            src="https://www.youtube.com/embed/5TDz4j8NvnU?si=hXaf9j-t9T7g1l2L"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
        <div className="carousel-item  staff-container">
          <img
            id="staff_photo"
            src="/home_images/staff.jpeg"
            className="w-100 h-100"
            alt="staff photo"
          />
          <span id="staff-caption" className="carousel-caption   ">
            <h1 className="text-white text-bold d-none d-md-block  ">
              Get to know us!
            </h1>
            <h1 className="text-white text-bold d-block d-md-none ">
              Get to our Staff!
            </h1>

            <h6 className=" d-none d-md-block  ">
              Get to know a little more about our highly qualified and caring
              staff!
            </h6>
            <h6 className="btn border border-2 rounded-pill text-white float-end me-5">
              Learn More!
            </h6>
          </span>
        </div>
      </div>
      <button
        className="carousel-control-prev my-auto"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev">
        <span
          className="fa-solid fa-arrow-left fs-1 text-white"
          aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next my-auto"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next">
        <span
          className="fa-solid fa-arrow-right fs-1 text-white"
          aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
