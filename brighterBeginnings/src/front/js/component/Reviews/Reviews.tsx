import React from 'react';
import "../../../styles/reviews.css";

interface ReviewsProps {
  reviewLinks: {
    google: string;
    facebook: string;
    yelp: string;
  };
}

const Reviews: React.FC<ReviewsProps> = ({ reviewLinks }) => {
  return (
    <div className="reviews-container w-100 mx-auto">
      <div className="row reviews-page-img-container w-100 position-relative">
        <img src="/reviews_images/ceo.jpeg" alt="Banner" className="w-100 reviews-page-img" />
        <div className="img-text-overlay">
          <h1 className="img-title">Lily Smith</h1>
          <p className="img-subtitle">Brighter Beginnings Director</p>
        </div>
      </div>
      <div className="row reviews-paragraph-container">
        <div className="col reviews-paragraphs">
          <p>We know placing your child in someone else's care is a big and hard decision. That's why it's important to us that you have an honest and unbiased idea of what our services are like for other families.</p>
          <p>Please carefully review our public reviews that we do not manage in any way so you can make the best decision for your family.</p>
          <p>We believe our program has a lot to offer and hope it aligns with you and your little ones' best interest.</p>
          <p> -Brighter Beginnings </p>
        </div>
      </div>
      <div className="row reviews-scroll-container">
        <div className="col d-flex reviews-scroll">
          <div className="review-item">
            <img src="/reviews_images/facebook.png" alt="Facebook Reviews" className="review-image" />
            <button onClick={() => window.open(reviewLinks.facebook, "_blank")} className="review-button">Visit Facebook</button>
          </div>
          <div className="review-item">
            <img src="/reviews_images/google.webp" alt="Google Reviews" className="review-image" />
            <button onClick={() => window.open(reviewLinks.google, "_blank")} className="review-button">Visit Google</button>
          </div>
          <div className="review-item">
            <img src="/reviews_images/yelp.webp" alt="Yelp Reviews" className="review-image" />
            <button onClick={() => window.open(reviewLinks.yelp, "_blank")} className="review-button">Visit Yelp</button>
          </div>
          <div className="review-item">
            <img src="/reviews_images/care.PNG" alt="Care Reviews" className="review-image" />
            <button onClick={() => window.open(reviewLinks.yelp, "_blank")} className="review-button">Visit Care</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
