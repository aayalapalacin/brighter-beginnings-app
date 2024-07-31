import React, { useState } from "react";
import "../../../../styles/play-and-learn.css";
import {zeroTo3} from "../../../utils/zeroTo3";
import {zeroToNegative3} from "../../../utils/zeroToNegative3";

const playLearnCarouselData = [
  {
    carouselImg: "/about_images/play_learn_areas/infant_classroom.jpeg",
    carouselTitle: "Infant Classroom",
    carouselDescrtiption: (
      <ul>
        <li>8+ cribs for naptime</li>
        <li>8+ strollers for enjoying outdoors</li>
        <li>50+ toys promoting development</li>
      </ul>
    ),
  },
  
  {
    carouselImg: "/about_images/play_learn_areas/outdoor.jpeg",
    carouselTitle: "Outdoor Area",
    carouselDescrtiption: (
      <ul>
        <li>
          5 large fenced in play areas designated for different age groups
        </li>
        <li>3 playground structures</li>
      </ul>
    ),
  },
  {
    carouselImg: "/about_images/play_learn_areas/toddler_classroom.jpeg",
    carouselTitle: "Todddler Classroom",
    carouselDescrtiption: (
      <ul>
        <li>10+ Art project supplies</li>
        <li>Sanbox used for sensory motor skills</li>
        <li>Diverse book collection</li>
      </ul>
    ),
  },
  {
    carouselImg: "/about_images/play_learn_areas/preschool_classroom.jpeg",
    carouselTitle: "Preschool Classroom",
    carouselDescrtiption: (
      <ul>
        <li>Fish Tank that is regulated daily</li>
        <li>10+ science kits</li>
        <li>Art supplies for independent </li>
      </ul>
    ),
  },
];

const PlayLearnAreas = () => {
  const [carouselSlide, setCarouselSlide] = useState<number>(0);
  const [enlarged, setEnlarged] = useState<boolean>(false);

  

  const handleBtnAnimation = () => {
    setEnlarged(true);
    setTimeout(() => setEnlarged(false), 300); // Return to normal size after 300ms
  };


  return (
    <div data-testid="play-and-learn" className="carousel-container  position-relative">
      <div className="position-relative carousel-card-container">
        {playLearnCarouselData.map((carouselData, carouselDataIndex: number) => {
          // we want to dyanimcally create class names carousel-0 carousel-1 carousel-2 carousel-3
          // because those are the corresponsing css classes
          
          // we need to take the of X and convert it to Y
          // where X is the value of carouselDataIndex together with the value of carouselSlide
          // Y is the output
          //    X    Y
          //   -3 |  1 
          //   -2 |  2
          //   -1 |  3
          //    0 |  0
          //    1 |  1
          //    2 |  2
          //    3 |  3
          //    4 |  0
          //    5 |  1
          //    6 |  2
          //
           
          let carouselClassConversion =
            carouselDataIndex + carouselSlide >= 0 &&
            carouselDataIndex + carouselSlide < 4
              ? carouselDataIndex + carouselSlide
              : carouselDataIndex + carouselSlide === 4
              ? 0
              : carouselDataIndex + carouselSlide === 5
              ? 1
              : carouselDataIndex + carouselSlide === 6
              ? 2
              : carouselDataIndex + carouselSlide === -1
              ? 3
              : carouselDataIndex + carouselSlide === -2
              ? 2
              : carouselDataIndex + carouselSlide === -3
              ? 1
              : carouselDataIndex + carouselSlide;

          return (
            <div
              key={carouselDataIndex}
              className={`carousel-card-container position-absolute carousel-${carouselClassConversion}`}
              >
              <div className="carousel-card-content card ">
                <img
                  src={carouselData.carouselImg}
                  className="card-img-top"
                  alt={carouselData.carouselTitle}
                />
                <div className="card-body">
                  <h5 className="card-title">{carouselData.carouselTitle}</h5>
                  <div className="card-text">
                    {carouselData.carouselDescrtiption}
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
          className={`carousel-btn ${enlarged ? 'englarged2' : ''} color-sky border-sky-2 me-5`}
          onClick={() => {
            setCarouselSlide(zeroToNegative3(carouselSlide));
            handleBtnAnimation();
          }}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      
        <button
          type="button"
          className={`carousel-btn ${enlarged ? 'englarged1' : ''} color-sky border-sky-2 `}
          onClick={() => {
            setCarouselSlide(zeroTo3(carouselSlide))
          
            handleBtnAnimation();
          }
            }
            >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </span>
    </div>
  );
};

export default PlayLearnAreas;
