// src/components/PlayLearnAreas.tsx (or wherever your component is located)

import React, { useState } from "react";
import "../../../styles/play-learn-areas.css";

// Define the shape of a single carousel item expected from CMS
interface CarouselItem {
  carouselImg: string;
  carouselTitle: string;
  // carouselDescription is now an array of strings, where each string is a "point"
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
          // Calculate the class index for positioning the carousel card.
          // This logic now accounts for a dynamic number of items.
          let carouselClassConversion = (carouselDataIndex + carouselSlide) % numCarouselItems;
          if (carouselClassConversion < 0) {
            carouselClassConversion += numCarouselItems; // Adjust for negative modulo results
          }

          return (
            <div
              key={carouselDataIndex}
              className={`carousel-card-container position-absolute carousel-${carouselClassConversion}`}
            >
              <div className="carousel-card-content card ">
                <img
                  src={carouselDataItem.carouselImg}
                  className="card-img-top"
                  alt={carouselDataItem.carouselTitle}
                />
                <div className="card-body">
                  <h5 className="card-title">{carouselDataItem.carouselTitle}</h5>
                  <div className="card-text">
                    {/* Render the array of description strings as an unordered list */}
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