import React from 'react';

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
        <img src="/home_images/ceo.jpeg" alt="Banner" className="w-100 reviews-page-img" />
      </div>

      {/* Row 2: Three Paragraphs */}
      <div className="row">
        <div className="col">
          <p>We know placing your child in someone else care  is a big and hard decision. That’s why it’s important to us that you have a honest and unbiased idea of what our services is like for other families.</p>
          <p>Please carefully review our public reviews that we do not manage in any way so you can make the best decision for your family.</p>
          <p>We believe our program has a lot to offer and hope it aligns with you and your little ones best interest.</p>
          <p> -Brighter Beginnings </p>
        </div>
      </div>

      {/* Row 3: Review Links Scroll Feature */}
      <div className="row overflow-auto">
        <div className="col d-flex justify-content-around">
          <a href={reviewLinks.google} target="_blank" rel="noopener noreferrer">Google Reviews</a>
          <a href={reviewLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook Reviews</a>
          <a href={reviewLinks.yelp} target="_blank" rel="noopener noreferrer">Yelp Reviews</a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
