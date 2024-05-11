import React from 'react';
import "../../../styles/reviews.css";

// Define the type for the props for the review links
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
      <div className="row reviews-page-img-container w-100">
        <img src="/reviews_images/ceo.jpeg" alt="Banner" className="w-100 reviews-page-img" />
      </div>
      <div className="row reviews-paragraph-container">
        <div className="col reviews-paragraphs">
          <p>We know placing your child in someone else care  is a big and hard decision. That’s why it’s important to us that you have a honest and unbiased idea of what our services is like for other families.</p>
          <p>Please carefully review our public reviews that we do not manage in any way so you can make the best decision for your family.</p>
          <p>We believe our program has a lot to offer and hope it aligns with you and your little ones best interest.</p>
          <p> -Brighter Beginnings </p>
        </div>
      </div>
      <div className="row overflow-auto reviews-scroll-container">
  <div className="col d-flex reviews-scroll">
    <div className="review-item">
      <img src="/reviews_images/facebook.png" alt="Google Reviews" className="review-image" />
      <button onClick={() => window.open("https://www.google.com/search?q=your+business+reviews", "_blank")} className="review-button">View on Facebook</button>
    </div>
    <div className="review-item">
      <img src="/reviews_images/google.webp" alt="Facebook Reviews" className="review-image" />
      <button onClick={() => window.open("https://www.facebook.com/yourbusiness/reviews", "_blank")} className="review-button">View on Google</button>
    </div>
    <div className="review-item">
      <img src="/reviews_images/yelp.webp" alt="Yelp Reviews" className="review-image" />
      <button onClick={() => window.open("https://www.yelp.com/biz/yourbusiness", "_blank")} className="review-button">View on Yelp</button>
    </div>
    <div className="review-item">
      <img src="/reviews_images/care.PNG" alt="Care Reviews" className="review-image" />
      <button onClick={() => window.open("https://www.care.com/biz/yourbusiness", "_blank")} className="review-button">View on Care</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Reviews;
