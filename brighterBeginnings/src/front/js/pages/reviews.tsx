import React from 'react';
import "../../styles/reviews.css";

const reviewData = [
  {
    imgSrc: "/reviews_images/facebook.png",
    link: "https://www.facebook.com/Brighter.Beginnings.Child.Care/reviews",
    mobileLink: "https://www.facebook.com/Brighter.Beginnings.Child.Care/reviews", // Add mobile link
    alt: "facebook_img"
  },
  {
    imgSrc: "/reviews_images/google.webp",
    link: "https://www.google.com/search?q=brighter+beginnings+day+care+south+hadley&sca_esv=7535fa7457e2bb3a&sxsrf=ADLYWILxm_baF3wdYEAH0rshjwBYgTv-wA%3A1720301189061&ei=hbaJZq6rA9D-p84Pj5CKkAg&oq=brighter+beginnings&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2JyaWdodGVyIGJlZ2lubmluZ3MqAggAMgcQIxiwAxgnMgcQIxiwAxgnMgcQIxiwAxgnMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMhkQLhiABBiwAxhDGMcBGMgDGIoFGK8B2AEBMhkQLhiABBiwAxhDGMcBGMgDGIoFGK8B2AEBSIYQUABYAHADeAGQAQCYAQCgAQCqAQC4AQHIAQCYAgOgAheYAwCIBgGQBgu6BgQIARgIkgcBM6AHAA&sclient=gws-wiz-serp#lrd=0x89e6db75dd2dd64d:0xecbc9c8277fd7644,1,,,,",
    mobileLink: "https://maps.app.goo.gl/iHnP5yC4VH1zTrcf7?g_st=com.google.maps.preview.copy",
    alt: "google_img"
  },
  {
    imgSrc: "/reviews_images/yelp.webp",
    link: "https://www.yelp.com/biz/brighter-beginnings-preschool-child-care-south-hadley#reviews",
    mobileLink: "https://www.yelp.com/biz/brighter-beginnings-preschool-child-care-south-hadley#reviews", // Add mobile link
    alt: "yelp_img"
  },
  {
    imgSrc: "/reviews_images/care.png",
    link: "https://www.care.com/b/l/brighter-beginnings-child-care-llc/south-hadley-ma",
    mobileLink: "https://www.care.com/b/l/brighter-beginnings-child-care-llc/south-hadley-ma", // Add mobile link
    alt: "care_img"
  },
];

const Reviews = () => {
  return (
    <div data-testid="reviews" className="reviews-container w-100 mx-auto">
      <div className="row reviews-page-img-container w-100 position-relative">
        <img src="/staff_images/Lilly.jpg" alt="Banner" className="w-100 reviews-page-img" />
        <div className="img-text-overlay">
          <h1 className="img-text-overlay-title ">Lily Smith</h1>
          <p className="img-overlay-subtitle mt-1">Brighter Beginnings Director</p>
        </div>
      </div>
      <div className="row reviews-paragraph-container">
        <div className="col reviews-paragraphs">
          <p className='reviews-p-1'>We know placing your child in someone else's care is a hard decision. That's why it's important to us that you have an honest and unbiased idea of what our services are like for other families.</p>
          <p className='reviews-p-2 d-none d-md-block'>Please carefully review our public reviews that we do not manage in any way so you can make the best decision for your family.</p>
          <p className='reviews-p-3 d-none d-md-block'>We believe our program has a lot to offer and hope it aligns with you and your little ones' best interest.</p>
          <p className='reviews-p-4'> -Brighter Beginnings </p>
        </div>
      </div>
      <div className="row reviews-container my-5">
        <div className="col d-flex review align-items-center justify-content-center">
          {reviewData.length > 0 ? reviewData.map((reviewContent, reviewContentIndex) => {
            return (
              <div className="review-item-container mx-1" key={reviewContentIndex}>
                <img src={reviewContent.imgSrc} alt={reviewContent.alt} className="review-item-image mb-3" />
                <button className="review-item-button d-block d-md-none d-lg-none" onClick={() => window.open(reviewContent.mobileLink, "_blank")}>Visit Reviews</button>
                <button className="review-item-button d-none d-md-block d-lg-block" onClick={() => window.open(reviewContent.link, "_blank")}>Visit Reviews</button>
              </div>
            );
          }) :
            <div className='no-reviews m-auto'>
              <h1 className='reviews-title'>Reviews did not load properly</h1>
            </div>
          }
        </div>
        <div className="col d-none review-mobile align-items-center justify-content-center">
            <div id="carouselExampleIndicators" className="carousel slide bg-gradient-sky ">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="review-item-container  mx-1" >
                        <img src={reviewData[0].imgSrc} alt={reviewData[0].alt} className="review-item-image mb-3" />
                        <button className="review-item-button d-block d-md-none d-lg-none" onClick={() => window.open(reviewData[0].mobileLink, "_blank")}>Visit Reviews</button>
                        <button className="review-item-button d-none d-md-block d-lg-block" onClick={() => window.open(reviewData[0].link, "_blank")}>Visit Reviews</button>
                      </div>
                  </div>
                  <div className="carousel-item">
                   <div className="review-item-container  mx-1" >
                        <img src={reviewData[1].imgSrc} alt={reviewData[1].alt} className="review-item-image mb-3" />
                        <button className="review-item-button d-block d-md-none d-lg-none" onClick={() => window.open(reviewData[1].mobileLink, "_blank")}>Visit Reviews</button>
                        <button className="review-item-button d-none d-md-block d-lg-block" onClick={() => window.open(reviewData[1].link, "_blank")}>Visit Reviews</button>
                      </div>
                  </div>
                  <div className="carousel-item">
                   <div className="review-item-container  mx-1" >
                        <img src={reviewData[2].imgSrc} alt={reviewData[2].alt} className="review-item-image mb-3" />
                        <button className="review-item-button d-block d-md-none d-lg-none" onClick={() => window.open(reviewData[2].mobileLink, "_blank")}>Visit Reviews</button>
                        <button className="review-item-button d-none d-md-block d-lg-block" onClick={() => window.open(reviewData[2].link, "_blank")}>Visit Reviews</button>
                      </div>
                  </div>
                  <div className="carousel-item">
                   <div className="review-item-container  mx-1" >
                        <img src={reviewData[3].imgSrc} alt={reviewData[3].alt} className="review-item-image mb-3" />
                        <button className="review-item-button d-block d-md-none d-lg-none" onClick={() => window.open(reviewData[3].mobileLink, "_blank")}>Visit Reviews</button>
                        <button className="review-item-button d-none d-md-block d-lg-block" onClick={() => window.open(reviewData[3].link, "_blank")}>Visit Reviews</button>
                      </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
          {/* {reviewData.length > 0 ? reviewData.map((reviewContent, reviewContentIndex) => {
            return (
              <div className="review-item-container mx-1" key={reviewContentIndex}>
                <img src={reviewContent.imgSrc} alt={reviewContent.alt} className="review-item-image mb-3" />
                <button className="review-item-button d-block d-md-none d-lg-none" onClick={() => window.open(reviewContent.mobileLink, "_blank")}>Visit Reviews</button>
                <button className="review-item-button d-none d-md-block d-lg-block" onClick={() => window.open(reviewContent.link, "_blank")}>Visit Reviews</button>
              </div>
            );
          }) :
            <div className='no-reviews m-auto'>
              <h1 className='reviews-title'>Reviews did not load properly</h1>
            </div>
          } */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;