import React, {useState} from "react";
import "../../../styles/space.css"

const spaceCarouselData = [
  {
carouselImg : "/about_images/the_space/infant_classroom.jpeg",
carouselTitle: "Infant Classroom",
carouselDescrtiption: 
<ul>
  <li>8+ cribs for naptime</li>
  <li>8+ strollers for enjoying outdoors</li>
  <li>50+ toys promoting development</li>
</ul>
},
{
  carouselImg : "/about_images/the_space/outdoor.jpeg",
  carouselTitle: "Outdoor Area",
  carouselDescrtiption: 
  <ul>
    <li>5 large fenced in play areas designated for different age groups</li>
    <li>3 playground structures</li>
  </ul>
  },
  {
    carouselImg : "/about_images/the_space/toddler_classroom.jpeg",
    carouselTitle: "Todddler Classroom",
    carouselDescrtiption: 
    <ul>
      <li>10+ Art project supplies</li>
      <li>Sanbox used for sensory motor skills</li>
      <li>Diverse book collection</li>
    </ul>
    },
    {
      carouselImg : "/about_images/the_space/preschool_classroom.jpeg",
      carouselTitle: "Preschool Classroom",
      carouselDescrtiption: 
      <ul>
        <li>Fish Tank that is regulated daily</li>
        <li>10+ science kits</li>
        <li>Art supplies for independent </li>
      </ul>
      },
]


const Space = () => {

  const [carouselSlide, setCarouselSlide] = useState<number>(0);

  const handleCarouselSlideRight =() =>{
    // function to make sure carousel slide index stays within [0] and [3]
      if(  carouselSlide + 1 < 4){
        return carouselSlide + 1;
      }
      else {
        return 0;
      }
    }


const handleCarouselSlideLeft =() =>{
  // function to make sure carousel slide index stays within [0] and [-3]
  if( carouselSlide - 1 > (-4) ){
    return carouselSlide -1;
  }
  else {
    return 0;
  }
}



const carouselSlideValue = {
  "-3": 1,
  "-2": 2,
  "-1": 3,
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 0,
  "5": 1,
  "6": 2
}
  return <div className=" carousel-container  position-relative">
    {spaceCarouselData.map((carouselData,carouselDataIndex :number)=>{
      let conditions = carouselDataIndex + carouselSlide >= 0 && carouselDataIndex + carouselSlide < 4 ?
      carouselDataIndex + carouselSlide : 
      carouselDataIndex + carouselSlide === 4 ? 0 :
       carouselDataIndex + carouselSlide === 5 ? 1 : 
       carouselDataIndex + carouselSlide === 6 ? 2 : 
       carouselDataIndex + carouselSlide === (-1) ? 3 : 
       carouselDataIndex + carouselSlide === (-2) ? 2 : 
       carouselDataIndex + carouselSlide === (-3) ? 1 : carouselDataIndex + carouselSlide;
      console.log("conditions: ", conditions, "index: ",carouselDataIndex, "slide: ", carouselSlide);

      return(
        <div className={`carousel-card-container position-absolute carousel-${conditions}
        }`}>
            <div className="carousel-card-content card " >
                <img src={carouselData.carouselImg}className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{carouselData.carouselTitle}</h5>
                  <p className="card-text">{carouselData.carouselDescrtiption}</p>
                </div>
            </div>
        </div>
      )
    })}
            <div className="carousel-btn-container" >
              <button type="button" className="carousel-btn-left btn btn-primary"
               onClick={()=> {
                setCarouselSlide( handleCarouselSlideLeft())
              }}
                >
                  carouselSlide {carouselSlide}
                  </button>     
              <button type="button" className=" carousel-btn-right btn btn-primary" onClick={()=> setCarouselSlide(handleCarouselSlideRight())} >right</button>     
            </div>

        </div>;
};

export default Space;
