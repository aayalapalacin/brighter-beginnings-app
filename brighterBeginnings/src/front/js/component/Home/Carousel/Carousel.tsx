import React, { useState, useEffect } from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import {homeContentType} from "../../../../../types/homeContent"

interface CarouselProps {
  slides: homeContentType; // Assuming this contains slides.carousel_slides
}

const Carousel = ({ slides }: CarouselProps) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  // Define the interval duration in milliseconds (e.g., 3000ms = 3 seconds)
  const autoSlideInterval = 4000;

  // Effect for automatic slide advancement
  useEffect(() => {
    // Only set up interval if there are slides
    if (slides && slides.carousel_slides.length > 0) {
      const intervalId = setInterval(() => {
        setActiveSlideIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % slides.carousel_slides.length;
          // You might want to reset showVideo here if the auto slide lands on a video slide
          setShowVideo(false);
          return nextIndex;
        });
      }, autoSlideInterval);

      // Cleanup function to clear the interval when the component unmounts
      // or when the slides data changes (to restart the interval)
      return () => clearInterval(intervalId);
    }
  }, [slides, autoSlideInterval]); // Depend on slides and interval to re-run if they change

  // Initial setup: ensure first slide is active when component mounts or slides change
  // This is technically redundant now with the auto-slide useEffect starting at 0,
  // but good for explicit initial state if the interval hadn't started yet.
  useEffect(() => {
    if (slides && slides.carousel_slides.length > 0) {
      setActiveSlideIndex(0);
    }
  }, [slides]);


  // if (!slides || !slides.carousel_slides || slides.carousel_slides.length === 0) {
  //   return <div>No carousel slides configured.</div>; // Or a fallback component
  // }

  // Ensure currentSlide is always valid
  const currentSlide = slides.carousel_slides[activeSlideIndex] || slides.carousel_slides[0];

  const handleSlideChange = (newIndex: number) => {
    let nextIndex = newIndex;
    if (nextIndex < 0) {
      nextIndex = slides.carousel_slides.length - 1;
    } else if (nextIndex >= slides.carousel_slides.length) {
      nextIndex = 0;
    }
    setActiveSlideIndex(nextIndex);
    setShowVideo(false); // Reset video state on manual slide change
  };

  // Determine the background style based on the current slide's content
  const slideBackgroundStyle: React.CSSProperties = {};
  if (currentSlide.background_image) {
    slideBackgroundStyle.backgroundImage = `url(${currentSlide.background_image})`;
    slideBackgroundStyle.backgroundSize = 'cover'; // Usually cover for background images
    slideBackgroundStyle.backgroundRepeat = 'no-repeat';
    slideBackgroundStyle.backgroundPosition = 'center';
  } else if (currentSlide.container_bg_color) {
    slideBackgroundStyle.backgroundColor = currentSlide.container_bg_color;
  }

  // Style for overlay image if present
  const overlayImageStyle: React.CSSProperties = {};
  if (currentSlide.overlay_image) {
    overlayImageStyle.backgroundImage = `url(${currentSlide.overlay_image})`;
    overlayImageStyle.backgroundSize = '50%'; // Adjust as needed
    overlayImageStyle.backgroundRepeat = 'no-repeat';
    overlayImageStyle.backgroundPosition = 'center';
    overlayImageStyle.width = '100%';
    overlayImageStyle.height = '100%'; // Ensure it fills its container
  }

  return (
    <div
      id="mainPageCarousel"
      data-testid="carousel"
      className="carousel slide w-75 m-auto"
      // REMOVED Bootstrap's data-bs-ride and data-bs-interval
    >
      <div className="carousel-indicators w-100 m-auto" style={{ backgroundColor: (currentSlide.heading || currentSlide.subheading) ? "#716b6b99" : "" }}>
        {slides.carousel_slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#mainPageCarousel"
            data-bs-slide-to={index}
            className={index === activeSlideIndex ? "active" : ""}
            aria-current={index === activeSlideIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            style={{ display: 'none' }}
          />
        ))}

        {(currentSlide.heading || currentSlide.subheading || (currentSlide.button_text && currentSlide.button_link)) && (
          <div className="carousel-indicator-text-content p-1">
            {currentSlide.heading && (
              <h3 className="carousel-indicator-text-title text-white text-bold">
                {currentSlide.heading}
              </h3>
            )}
            {(currentSlide.subheading || (currentSlide.button_text && currentSlide.button_link)) && (
              <div className="carousel-indicator-subtitle-btn-container d-flex align-items-center">
                {currentSlide.subheading && (
                  <p className="carousel-indicator-text-subtitle text-white">
                    {currentSlide.subheading}
                  </p>
                )}
                {currentSlide.button_text && currentSlide.button_link && (
                  <Link to={currentSlide.button_link}>
                    <h6
                      data-testid="learn-more-staff"
                      className="carousel-indicator-text-btn btn border border-2 rounded-pill text-white ms-3"
                    >
                      {currentSlide.button_text}
                    </h6>
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="carousel-inner">
        {slides.carousel_slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeSlideIndex ? "active" : ""}`}
            style={slide.background_image ? slideBackgroundStyle : { backgroundColor: slide.container_bg_color || '' }}
          >
            {slide.overlay_image && (
              <div
                style={overlayImageStyle}
                className="carousel-overlay-image"
              ></div>
            )}

            {slide.video_url ? (
              <>
                <div
                  className={`clickOnVideoContainer ${showVideo ? "d-none" : "d-flex justify-content-center align-items-end h-100"}`}
                  style={{ paddingBottom: "3rem" }}
                >
                  <div onClick={() => setShowVideo(true)} className="clickOnVideoBtnContainer">
                    <button type="button" className="clickOnVideoBtn btn bg-sun p-3 fs-4 text-white image-shadow">
                      {slide.video_button_text || "Watch Video"}
                    </button>
                  </div>
                </div>
                <iframe
                  className={`iframe video ${showVideo ? "video-full" : ""}`}
                  width="100%"
                  height={"100%"}
                  src={slide.video_url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </>
            ) : (
              !slide.overlay_image && slide.background_image && (
                  <img
                    src={slide.background_image}
                    className="h-100 w-100 object-fit-cover"
                    style={{ transform: "scale(1)" }}
                    alt={slide.heading || "Carousel slide image"}
                  />
              )
            )}
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev my-auto"
        type="button"
        data-bs-target="#mainPageCarousel"
        data-bs-slide="prev"
        onClick={() => handleSlideChange(activeSlideIndex - 1)}
      >
        <span className="fa-solid fa-arrow-left fs-1 text-white" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next my-auto"
        type="button"
        data-bs-target="#mainPageCarousel"
        data-bs-slide="next"
        onClick={() => handleSlideChange(activeSlideIndex + 1)}
      >
        <span className="fa-solid fa-arrow-right fs-1 text-white" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;