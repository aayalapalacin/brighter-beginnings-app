import React from 'react'; // No need for useState or useEffect anymore
import "../../styles/reviews.css";
import ErrorNotification from '../component/ErrorNotification'; // Adjust path if your ErrorNotification is elsewhere

// --- Import the generated data and its interfaces ---
// Assuming your reviews.d.ts is located in src/data/reviews.d.ts
import reviewsPageData from '../../../data/reviews';
import { ReviewPlatform } from '../../../data/reviews'; 

// --- End TypeScript Interfaces ---

const Reviews: React.FC = () => {
  // Hardcoded map for review platform icons (these are NOT in CMS)
  const reviewIconMap: { [key: string]: string } = {
    "facebook": "/reviews_images/facebook.png",
    "google": "/reviews_images/google.webp",
    "yelp": "/reviews_images/yelp.webp",
    "care": "/reviews_images/care.png",
    // Add more if you introduce new platforms
  };

  // --- UPDATED: Error / Data Check ---
  // reviewsPageData is now directly imported, so it's never null/undefined.
  // Check if it's an empty object (if reviews.json was missing) or if a critical field is missing.
  if (!reviewsPageData || Object.keys(reviewsPageData).length === 0 || !reviewsPageData.banner_title) {
    // Log for debugging if needed, but the ErrorNotification will handle the UI
    console.error("Reviews page data is missing or incomplete:", reviewsPageData);
    return (
      <ErrorNotification  />
    );
  }

  // --- Destructure ALL data directly from the imported object ---
  const {
    banner_image,
    banner_title,
    banner_subtitle,
    paragraph_1,
    paragraph_2_desktop,
    paragraph_3_desktop,
    sign_off_text,
    review_platforms
  } = reviewsPageData;

  return (
    <div data-testid="reviews" className="reviews-container w-100 mx-auto">
     

      <div className="row reviews-page-img-container w-100 position-relative">
        {banner_image && <img src={banner_image} alt={banner_title} className="w-100 reviews-page-img" />}
        <div className="img-text-overlay">
          <h2 className="img-text-overlay-title ">{banner_title}</h2> {/* Changed to h2, as page 'title' is now h1 */}
          <p className="img-overlay-subtitle mt-1">{banner_subtitle}</p>
        </div>
      </div>
      <div className="row reviews-paragraph-container">
        <div className="col reviews-paragraphs">
          <p className='reviews-p-1'>{paragraph_1}</p>
          {paragraph_2_desktop && <p className='reviews-p-2 d-none d-md-block'>{paragraph_2_desktop}</p>}
          {paragraph_3_desktop && <p className='reviews-p-3 d-none d-md-block'>{paragraph_3_desktop}</p>}
          <p className='reviews-p-4'> {sign_off_text} </p>
        </div>
      </div>
      <div className="row reviews-container my-5">
        <div className="col d-flex review align-items-center justify-content-center">
          {review_platforms && review_platforms.length > 0 ? (
            review_platforms.map((platform: ReviewPlatform, index: number) => {
              const iconSrc = reviewIconMap[platform.icon_key];
              if (!iconSrc) {
                console.warn(`Missing icon path for key: ${platform.icon_key}`);
                return null;
              }
              return (
                <div className="review-item-container mx-1" key={index}>
                  <img src={iconSrc} alt={platform.icon_alt_text} className="review-item-image mb-3" />
                  <a href={platform.mobile_link} target="_blank" rel="noopener noreferrer" className="review-item-button d-block d-md-none d-lg-none">Visit Reviews</a>
                  <a href={platform.desktop_link} target="_blank" rel="noopener noreferrer" className="review-item-button d-none d-md-block d-lg-block">Visit Reviews</a>
                </div>
              );
            })
          ) : (
            <div className='no-reviews m-auto'>
              <h2 className='reviews-title'>No review platforms configured.</h2>
            </div>
          )}
        </div>
        {/* Mobile carousel remains */}
        <div className="col d-none review-mobile align-items-center justify-content-center">
            <div id="carouselExampleIndicators" className="carousel slide bg-gradient-sky ">
                <div className="carousel-indicators">
                    {review_platforms && review_platforms.map((_, index:number) => (
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
                    {review_platforms && review_platforms.map((platform: ReviewPlatform, index: number) => {
                        const iconSrc = reviewIconMap[platform.icon_key];
                        if (!iconSrc) return null;
                        return (
                            <div className={`review-carousel-item ${index === 0 ? "active" : ""}`} key={`review-carousel-item-${index}`}>
                                <div className="review-item-container mx-1" >
                                    <img src={iconSrc} alt={platform.icon_alt_text} className="review-item-image mb-3" />
                                    <a href={platform.mobile_link} target="_blank" rel="noopener noreferrer" className="review-item-button d-block d-md-none d-lg-none">Visit Reviews</a>
                                    <a href={platform.desktop_link} target="_blank" rel="noopener noreferrer" className="review-item-button d-none d-md-block d-lg-block">Visit Reviews</a>
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