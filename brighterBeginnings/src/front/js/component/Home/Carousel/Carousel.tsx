import React, {useState} from "react";
import "./carousel.css";
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

  const [slideNumber, setSlideNumber] = useState<number>(0);
    
  interface carouselData{
    title:string;
    subTitle:string;
    linkPath:string;
    linkText:string;
  } 

  const courselIndicatorData:carouselData[] = [
    {
    title:"Get to know our Staff!",
    subTitle:"Get to know a little more about our highly qualified and caringstaff!",
    linkPath:"/staff",
    linkText:"Learn More!"
    },
    {
    title:"Playground paradise",
    subTitle:"5 large fenced in play areas designated for different age groups",
    linkPath:"/staff",
    linkText:"See More!"
    },
    {
    title:"",
    subTitle:"",
    linkPath:"",
    linkText:""
    },
  
  ]
  
  return (
    <div 
      id="mainPageCarousel" 
      data-testid="carousel" 
      className="carousel  slide w-75 m-auto"  
      // data-bs-ride="carousel"
      // data-bs-interval="3000" 
    >
  
     <div className="carousel-indicators  w-100 m-auto" style={{backgroundColor:slideNumber == 0 || slideNumber == 1 ? "#716b6b99": ""}}>
      <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active d-none"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
        className="d-none"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
        className="d-none"

          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
            {
            slideNumber == 0 || slideNumber == 1 ?
              <div  className="carousel-indicator-text-content p-1 ">
               
                  <h3 className=" carousel-indicator-text-title text-white text-bold ">
                    {courselIndicatorData[slideNumber].title}
                  </h3>
                  <div className="carousel-indicator-subtitle-btn-container d-flex align-items-center">
                      
                      <p  className="carousel-indicator-text-subtitle text-white">
                         {courselIndicatorData[slideNumber].subTitle}
                      </p>
                      <Link to={courselIndicatorData[slideNumber].linkPath}>
                        <h6 
                        data-testid="learn-more-staff" 
                        className=" carousel-indicator-text-btn btn border border-2 rounded-pill text-white ms-3  "
                        >
                          {courselIndicatorData[slideNumber].linkText}
                        </h6>
                      </Link>

                  </div>
                
          </div> 
          : ""
            
          }
        
      </div>
      <div className="carousel-inner">
        <div className="carousel-item  playground-container">
          <img
            src="/home_images/playground_photo.jpeg"
            className="h-100 w-100"
            style={{ transform: "scale(1)" }}
            alt="playground"
          />
        
        </div>
        <div style={backgroundImageStyle} className="carousel-item  bg-light-sky   curriculum-container">
          <div 
              className={`clickOnVideoContainer ${showVideo ? "d-none" : "  d-flex justify-content-center align-items-end h-100" }`} 
              style={{  
                paddingBottom: "3rem",
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
        <div className="carousel-item active  staff-container">
          <img
            id="staff_photo"
            src="/home_images/staff.png"
            className="w-100 h-100"
            alt="staff"
          />
          
        </div>
      </div>
      <button
        className="carousel-control-prev my-auto"
        type="button"
        data-bs-target="#mainPageCarousel"
        data-bs-slide="prev"
        onClick={
          ()=>{
            if(slideNumber == 0){
              setSlideNumber(2)
            }
            else{
              setSlideNumber(slideNumber - 1)
            }
            }
          }
        >
        <span
          className="fa-solid fa-arrow-left fs-1 text-white"
          aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next my-auto"
        type="button"
        data-bs-target="#mainPageCarousel"
        data-bs-slide="next"
         onClick={
          ()=>{
            if(slideNumber == 2){
              setSlideNumber(0)
            }
            else{
              setSlideNumber(slideNumber + 1)
            }
            }
          }
        >
         
        <span
          className="fa-solid fa-arrow-right fs-1 text-white"
          aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
