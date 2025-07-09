// Interface for a single review platform item from the CMS
// It's good practice to export interfaces if they might be used in other files.
export interface ReviewPlatform {
  platform_name: string;
  icon_key: string; // Used to lookup the hardcoded image path
  desktop_link: string;
  mobile_link: string;
  icon_alt_text: string;
}

// Interface for the entire reviews page data structure from reviews.json
// It's good practice to export interfaces if they might be used in other files.
export interface ReviewsPageData {
  title: string; // Confirmed present in reviews.json
  banner_image?: string; // Made optional as per config.yml's required: false
  banner_title: string;
  banner_subtitle: string;
  paragraph_1: string;
  paragraph_2_desktop?: string; // Optional
  paragraph_3_desktop?: string; // Optional
  sign_off_text: string;
  review_platforms: ReviewPlatform[]; // Array of ReviewPlatform objects
}

// Declare the type of the default export from the generated src/data/reviews.js file.
// The variable exported by generate-reviews-data.js is 'reviewsPageData',
// and it's a single object, not an array.
declare const reviewsPageData: ReviewsPageData;
export default reviewsPageData; // This exports the TYPE declaration for 'reviewsPageData'