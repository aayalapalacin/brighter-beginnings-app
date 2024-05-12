import React from 'react';
import Reviews from "../component/Reviews/Reviews"

const App = () => {
  return (
    <Reviews 
      reviewLinks={{
        google: "https://www.google.com/search?q=your+business+reviews",
        facebook: "https://www.facebook.com/yourbusiness/reviews",
        yelp: "https://www.yelp.com/biz/yourbusiness"
        // care: "https://www.care.com/biz/yourbusiness"
      }}
    />
  );
};

export default Reviews;

