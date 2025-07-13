import React, { useState, useEffect } from "react"; // Added useEffect for carousel item activation
import "./carousel.css";
import { Link } from "react-router-dom";
import {homeContentType} from "../../../../../types/homeContent"


interface CarouselProps {
  slides: homeContentType; // Now expects an array of CarouselSlide objects
}

const Carousel = ({ slides }: CarouselProps) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  // Use 0 as default, but consider if you want to activate a specific slide first
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  // Effect to ensure the active class is applied correctly after initial render or prop change
  useEffect(() => {
    // When slides prop changes or component mounts, reset to first slide and ensure active class
    if (slides && slides.carousel_slides.length > 0) {
      setActiveSlideIndex(0);
    }
  }, [slides]); // Re-run if slides prop changes

  if (!slides || slides.carousel_slides.length === 0) {
    return <div>No carousel slides configured.</div>; // Or a fallback component
  }

  const handleSlideChange = (newIndex: number) => {
    let nextIndex = newIndex;
    if (nextIndex < 0) {
      nextIndex = slides.carousel_slides.length - 1;
    } else if (nextIndex >= slides.carousel_slides.length) {
      nextIndex = 0;
    }
    setActiveSlideIndex(nextIndex);
    setShowVideo(false); // Reset video state on slide change
  };

  const currentSlide = slides.carousel_slides[activeSlideIndex];

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
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-indicators w-100 m-auto" style={{ backgroundColor: (currentSlide.heading || currentSlide.subheading) ? "#716b6b99" : "" }}>
        {slides.carousel_slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#mainPageCarousel" // Correct target ID
            data-bs-slide-to={index}
            className={index === activeSlideIndex ? "active" : ""}
            aria-current={index === activeSlideIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            // You might want to hide these buttons if you're controlling with custom arrows
            // If you want to show them, remove 'd-none' and style them properly
            style={{ display: 'none' }} // Keeping them hidden as per your original code
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
                className="carousel-overlay-image" // Add a class for specific styling if needed
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
              // If it's not a video slide and has a background image, render it as an img or just rely on background-image style
              // Your original code used <img> tags for first two. Let's replicate that if there's no overlay image.
              // If you prefer background-image for all, remove this <img> tag.
              !slide.overlay_image && slide.background_image && (
                  <img
                    src={slide.background_image}
                    className="h-100 w-100"
                    style={{ transform: "scale(1)" }} // Keep original style
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