// src/components/PlayLearnAreas.tsx

import React, { useState } from "react";
import "../../../styles/play-learn-areas.css";

// Define the shape of a single carousel item expected from CMS
interface CarouselItem {
  carouselImg: string;
  carouselTitle: string;
  carouselDescription: {"point":string}[];
}

// Define the props for the PlayLearnAreas component
interface PlayLearnAreasProps {
  carouselData: CarouselItem[];
}

const PlayLearnAreas: React.FC<PlayLearnAreasProps> = ({ carouselData }) => {
  const [carouselSlide, setCarouselSlide] = useState<number>(0);

  // Get the number of items dynamically from the passed data
  const numCarouselItems = carouselData.length;

  // Handles moving to the next slide, ensuring it wraps around
  const handleCarouselSlideRight = () => {
    setCarouselSlide((prevSlide) => (prevSlide + 1) % numCarouselItems);
  };

  // Handles moving to the previous slide, ensuring it wraps around
  const handleCarouselSlideLeft = () => {
    setCarouselSlide((prevSlide) => (prevSlide - 1 + numCarouselItems) % numCarouselItems);
  };

  return (
    <div data-testid="play-and-learn" className="carousel-container position-relative">
      <div className="position-relative carousel-card-container">
        {carouselData.map((carouselDataItem, carouselDataIndex: number) => {
          let carouselClassConversion = (carouselDataIndex + carouselSlide) % numCarouselItems;
          if (carouselClassConversion < 0) {
            carouselClassConversion += numCarouselItems;
          }

          return (
            <div
              key={carouselDataIndex}
              className={`carousel-card-wrapper position-absolute carousel-${carouselClassConversion}`} // Renamed to wrapper for clarity
            >
              <div className="carousel-card-content card">
                {/* NEW: Image container div */}
                <div className="carousel-image-container">
                  <img
                    src={carouselDataItem.carouselImg}
                    className="card-img-top object-fit-cover" // Keep this for potential Bootstrap styling if you're using it elsewhere
                    alt={carouselDataItem.carouselTitle}
                  />
                </div>
                {/* END NEW */}
                <div className="card-body">
                  <h5 className="card-title">{carouselDataItem.carouselTitle}</h5>
                  <div className="card-text">
                    {carouselDataItem.carouselDescription && carouselDataItem.carouselDescription.length > 0 && (
                      <ul>
                        {carouselDataItem.carouselDescription.map((point, pointIndex) => (
                          <li key={pointIndex}>{point.point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel-placholder-spacer"> </div>
          <span className="carousel-btn-container">
            <button
              type="button"
              className={`carousel-btn carouse-btn-animation boxShadow color-sky border-sky-2 me-5`}
              onClick={handleCarouselSlideLeft}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>

            <button
              type="button"
              className={`carousel-btn carouse-btn-animation boxShadow color-sky border-sky-2 `}
              onClick={handleCarouselSlideRight}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </span>
    </div>
  );
};

export default PlayLearnAreas;
