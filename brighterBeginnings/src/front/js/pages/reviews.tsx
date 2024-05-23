import React from 'react';
import "../../styles/reviews.css";


const reviewData :{imgSrc:string ;link: string; alt:string;}[] =
[
    {
      imgSrc: "/reviews_images/facebook.png",
      link: "https://www.facebook.com/Brighter.Beginnings.Child.Care/reviews",
      alt:"facebook_img" 
    },
    {
      imgSrc: "/reviews_images/google.webp",
      link: "https://www.google.com/search?q=brighter+beginnings&oq=brighter+beginnings&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhYIARAuGIMBGK8BGMcBGLEDGIAEGI4FMgYIAhBFGEAyBwgDEAAYgAQyBwgEEAAYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDyoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89e6db75dd2dd64d:0xecbc9c8277fd7644,1,,,,", 
      alt:"google_img"
    },
    {
      imgSrc: "/reviews_images/yelp.webp",
      link: "https://www.yelp.com/biz/brighter-beginnings-preschool-child-care-south-hadley#reviews", 
      alt:"yelp_img"
    },
    {
      imgSrc: "/reviews_images/care.png",
      link: "https://www.care.com/b/l/brighter-beginnings-child-care-llc/south-hadley-ma", 
      alt:"care_img"
    },
]
const Reviews = () => {
  return (
    <div className="reviews-container w-100 mx-auto">
      <div className="row reviews-page-img-container w-100 position-relative">
        <img src="/reviews_images/ceo.jpeg" alt="Banner" className="w-100 reviews-page-img" />
        <div className="img-text-overlay">
          <h1 className="img-text-overlay-title ">Lily Smith</h1>
          <p className="img-overlay-subtitle mt-1">Brighter Beginnings Director</p>
        </div>
      </div>
      <div className="row reviews-paragraph-container">
        <div className="col reviews-paragraphs">
          <p className='reviews-p-1'>We know placing your child in someone else's care is a big and hard decision. That's why it's important to us that you have an honest and unbiased idea of what our services are like for other families.</p>
          <p className='reviews-p-2 d-none d-md-block'>Please carefully review our public reviews that we do not manage in any way so you can make the best decision for your family.</p>
          <p className='reviews-p-3 d-none d-md-block'>We believe our program has a lot to offer and hope it aligns with you and your little ones' best interest.</p>
          <p className='reviews-p-4'> -Brighter Beginnings </p>
        </div>
      </div>
      <div className="row reviews-scroll-container my-5">
        <div className="col d-flex reviews-scroll">
          {reviewData.length > 0 ? reviewData.map((reviewContent, reviewContentIndex)=>{
            return(
              <div className="review-item-container mx-1">
                <img src={reviewContent.imgSrc} alt={reviewContent.alt} className="review-item-image mb-3" />
                <button onClick={() => window.open(reviewContent.link, "_blank")} className="review-item-button">Visit Reviews</button>
              </div>
            )
            
          })
        :
        <div className='no-reviews m-auto'>
            <h1 className='reviews-title'>Reviews did not load properly</h1>
        </div>
        }
        </div>
      </div>
    </div>
  );
};

export default Reviews;
