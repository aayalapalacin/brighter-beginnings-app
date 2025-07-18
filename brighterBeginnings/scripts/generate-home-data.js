const fs = require('fs');
const path = require('path');

// --- PATHS FOR HOME DATA ---

// Path to the home.json content file
// From the 'scripts' folder (__dirname), go up two levels (../../) to 'brighterBeginnings/',
// then navigate into 'content/pages/home.json'.
const HOME_JSON_PATH = path.resolve(__dirname, '..', '..', 'content', 'pages', 'home.json');

// Directory where the generated JavaScript file will be saved for your React app to import.
// From the 'scripts' folder (__dirname), go up one level (../) to 'src/',
// then navigate into 'data'.
const OUTPUT_DIR = path.resolve(__dirname, '..', 'data');

// Full path for the output home.js file
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'home.js');

// --- END PATHS ---


// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

let homeData = {};

// Read the home.json file
if (fs.existsSync(HOME_JSON_PATH)) {
  const fileContent = fs.readFileSync(HOME_JSON_PATH, 'utf8');
  try {
    homeData = JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error parsing JSON from ${HOME_JSON_PATH}:`, error);
    // Fallback to empty object if parsing fails, to avoid breaking the build
    homeData = {};
  }
} else {
  console.warn(`Warning: '${HOME_JSON_PATH}' not found. Home page data will be empty. Make sure to create it via Netlify CMS.`);
  // If the file doesn't exist, ensure homeData is an empty object
  homeData = {};
}

// Generate the JavaScript file that exports the home page data
const jsContent = `
// This file is auto-generated by generate-home-data.js. Do not edit manually.
const homePageData = ${JSON.stringify(homeData, null, 2)};

export default homePageData;
`;

fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf8');

console.log(`Generated home page data to ${OUTPUT_FILE}`);