import React, {useState} from "react";
import "../../../styles/carousel.css";
import { Link } from "react-router-dom";
const Carousel = () => {
  const [showVideo, setShowVideo]=useState<boolean>(false)
  const backgroundImageStyle = {
    backgroundImage: 'url("/home_images/HeggertyLogo.png")', // Image on top of the gradient
    backgroundSize: '50%', // Adjust image size to fit the container
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', // Center the image within the container
    width: '100%',
  };

    

  return (
    <div 
      id="carouselExample" 
      data-testid="carousel" 
      className="carousel slide"  
      // data-bs-ride="carousel"
      // data-bs-interval="2500" 
    >
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
            alt="playground"
          />
          <span id="playground-caption" className="carousel-caption">
            <h1 className="text-white text-bold ">Playground paradise</h1>
            <h6 className=" d-none d-md-block">
              5 large fenced in play areas designated for different age groups
            </h6>
            <Link to={"/about"}>
              <h6 className="btn border border-2 rounded-pill text-white float-end me-5">
                See More!
              </h6>
            </Link>
          </span>
        </div>
        <div style={backgroundImageStyle} className="carousel-item  bg-light-sky   curriculum-container">
          <div 
              className={`clickOnVideoContainer ${showVideo ? "d-none" : "  d-flex justify-content-center align-items-end h-100" }`} 
              style={{  
                paddingBottom: "5rem",
              }}
              >
            <div onClick={()=> setShowVideo(true)}  className="clickOnVideoBtnContainer">
              <button type="button" className=" clickOnVideoBtn btn bg-sun p-3 fs-4 text-white image-shadow">Get to know our Curriculum</button>
            </div>

          </div>
          <iframe
            className={ `iframe video ${showVideo ? " video-full" : "" }`}
            width="100%"
            height={"100%"}
            src="https://www.youtube.com/embed/79qPYOTdrUE?si=tyWvN9XQiMmgSdqC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
        <div className="carousel-item   staff-container">
          <img
            id="staff_photo"
            src="/home_images/staff2.png"
            className="w-100 h-100"
            alt="staff"
          />
          <span id="staff-caption" className="carousel-caption   ">
            <h1 className="text-white text-bold d-none d-md-block  ">
              Get to know us!
            </h1>
            <h1 className="text-white text-bold d-block d-md-none ">
              Get to our Staff!
            </h1>

            <h6 id="staff-description-1" className="d-none">
              Get to know a little more about our highly qualified and caring
              staff!
            </h6>
            <h4 id="staff-description-2" className=" d-none d-md-block  ">
              Get to know a little more about our highly qualified and caring
              staff!
            </h4>
            <Link to={"/staff"}>
              <h6 className="btn border border-2 rounded-pill text-white float-end me-5">
                Learn More!
              </h6>
            </Link>
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
