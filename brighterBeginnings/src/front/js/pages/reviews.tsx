import React, { useState, useEffect } from 'react';
import "../../styles/reviews.css";

// --- Define TypeScript Interfaces for your data ---

// Interface for a single review platform item from the CMS
interface ReviewPlatform {
  platform_name: string;
  icon_key: string; // Used to lookup the hardcoded image path
  desktop_link: string;
  mobile_link: string;
  icon_alt_text: string;
}

// Interface for the entire reviews page data structure from reviews.json
interface ReviewsPageData {
  title: string;
  banner_image: string;
  banner_title: string;
  banner_subtitle: string;
  paragraph_1: string;
  paragraph_2_desktop?: string; // Optional, as per your config.yml (required: false)
  paragraph_3_desktop?: string; // Optional
  sign_off_text: string;
  review_platforms: ReviewPlatform[]; // Array of ReviewPlatform objects
}

// --- End TypeScript Interfaces ---

const Reviews: React.FC = () => { // Use React.FC for functional components
  const [reviewsPageData, setReviewsPageData] = useState<ReviewsPageData | null>(null); // Type the state

  // Hardcoded map for review platform icons (these are NOT in CMS)
  const reviewIconMap: { [key: string]: string } = { // Type the map
    "facebook": "/reviews_images/facebook.png",
    "google": "/reviews_images/google.webp",
    "yelp": "/reviews_images/yelp.webp",
    "care": "/reviews_images/care.png",
    // Add more if you introduce new platforms
  };
  useEffect(() => {
    // Fetch the data for the Reviews page from your generated content
    // Assuming it's processed and available via a simple fetch from the public folder
    fetch('../../../../public/content/pages/reviews.json') // Adjust path if your build process changes it
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        // Explicitly type the JSON response
        return res.json() as Promise<ReviewsPageData>;
      })
      .then(data => setReviewsPageData(data))
      .catch(error => {
        console.error("Error fetching reviews page data:", error);
        // You might set an error state here to show a message to the user
      });
  }, []);

  if (!reviewsPageData) {
    return (
      <div className='no-reviews m-auto'>
        <h1 className='reviews-title'>Loading Reviews...</h1>
      </div>
    );
  }

  // Destructure data for easier use
  const {
    banner_image,
    banner_title,
    banner_subtitle,
    paragraph_1,
    paragraph_2_desktop,
    paragraph_3_desktop,
    sign_off_text,
    review_platforms // This is your array of review platforms from CMS
  } = reviewsPageData; // TypeScript infers types from ReviewsPageData interface

  return (
    <div data-testid="reviews" className="reviews-container w-100 mx-auto">
      <div className="row reviews-page-img-container w-100 position-relative">
        <img src={banner_image} alt={banner_title} className="w-100 reviews-page-img" /> {/* Dynamic Banner Image */}
        <div className="img-text-overlay">
          <h1 className="img-text-overlay-title ">{banner_title}</h1> {/* Dynamic Title */}
          <p className="img-overlay-subtitle mt-1">{banner_subtitle}</p> {/* Dynamic Subtitle */}
        </div>
      </div>
      <div className="row reviews-paragraph-container">
        <div className="col reviews-paragraphs">
          <p className='reviews-p-1'>{paragraph_1}</p> {/* Dynamic Paragraph 1 */}
          {/* Use optional chaining or checks for optional paragraphs */}
          {paragraph_2_desktop && <p className='reviews-p-2 d-none d-md-block'>{paragraph_2_desktop}</p>} {/* Dynamic Paragraph 2 */}
          {paragraph_3_desktop && <p className='reviews-p-3 d-none d-md-block'>{paragraph_3_desktop}</p>} {/* Dynamic Paragraph 3 */}
          <p className='reviews-p-4'> {sign_off_text} </p> {/* Dynamic Sign-off */}
        </div>
      </div>
      <div className="row reviews-container my-5">
        <div className="col d-flex review align-items-center justify-content-center">
          {review_platforms && review_platforms.length > 0 ? (
            review_platforms.map((platform: ReviewPlatform, index: number) => { // Type 'platform' and 'index'
              const iconSrc = reviewIconMap[platform.icon_key]; // Lookup hardcoded icon path
              if (!iconSrc) {
                console.warn(`Missing icon path for key: ${platform.icon_key}`);
                return null; // Don't render if icon path isn't found
              }
              return (
                <div className="review-item-container mx-1" key={index}>
                  <img src={iconSrc} alt={platform.icon_alt_text} className="review-item-image mb-3" /> {/* Icon from map, alt from CMS */}
                  {/* Buttons use links from CMS */}
                  <button className="review-item-button d-block d-md-none d-lg-none" onClick={() => window.open(platform.mobile_link, "_blank")}>Visit Reviews</button>
                  <button className="review-item-button d-none d-md-block d-lg-block" onClick={() => window.open(platform.desktop_link, "_blank")}>Visit Reviews</button>
                </div>
              );
            })
          ) : (
            <div className='no-reviews m-auto'>
              <h1 className='reviews-title'>No reviews data loaded.</h1>
            </div>
          )}
        </div>
        {/* Mobile carousel remains */}
        <div className="col d-none review-mobile align-items-center justify-content-center">
            <div id="carouselExampleIndicators" className="carousel slide bg-gradient-sky ">
                <div className="carousel-indicators">
                    {review_platforms && review_platforms.map((_, index) => (
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index.toString()}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                            key={`indicator-${index}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {review_platforms && review_platforms.map((platform: ReviewPlatform, index: number) => { // Type 'platform' and 'index'
                        const iconSrc = reviewIconMap[platform.icon_key];
                        if (!iconSrc) return null;
                        return (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={`carousel-item-${index}`}>
                                <div className="review-item-container mx-1" >
                                    <img src={iconSrc} alt={platform.icon_alt_text} className="review-item-image mb-3" />
                                    <button className="review-item-button d-block d-md-none d-lg-none" onClick={() => window.open(platform.mobile_link, "_blank")}>Visit Reviews</button>
                                    <button className="review-item-button d-none d-md-block d-lg-block" onClick={() => window.open(platform.desktop_link, "_blank")}>Visit Reviews</button>
                                </div>
                            </div>
                        );
                    })}
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
        </div>
      </div>
    </div>
  );
};

export default Reviews;