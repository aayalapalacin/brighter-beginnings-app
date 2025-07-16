// scripts/generate-about-data.js

const fs = require('fs');
const path = require('path');

// --- Configuration ---
const PROJECT_ROOT = path.join(__dirname, '..'); // Assumes script is in a 'scripts' folder at project root

const ABOUT_JSON_FILENAME = 'about.json'; // The file is both input AND output
const ABOUT_JSON_PATH = path.join(PROJECT_ROOT, 'content', 'pages', ABOUT_JSON_FILENAME);

console.log('--- Starting About Page Data Confirmation Script ---');
console.log(`Target JSON File: ${ABOUT_JSON_PATH}`);

try {
    // 1. Read the current about.json
    if (!fs.existsSync(ABOUT_JSON_PATH)) {
        console.warn(`Warning: '${ABOUT_JSON_FILENAME}' not found at ${ABOUT_JSON_PATH}. Creating an empty one.`);
        // Create an empty file with a basic structure if it doesn't exist, to prevent build failures
        fs.writeFileSync(ABOUT_JSON_PATH, JSON.stringify({ title: "", main_image: "", play_learn_data: [] }, null, 2), 'utf8');
        console.log(`Created empty '${ABOUT_JSON_FILENAME}'.`);
        process.exit(0); // Exit successfully, but indicate no data was found to "update"
    }

    const rawData = fs.readFileSync(ABOUT_JSON_PATH, 'utf8');
    let aboutData = JSON.parse(rawData);

    // No processing (like image dimensions) is performed.
    // The content is simply read and then written back to the same file.
    // This action ensures the file's timestamp is updated within the build environment,
    // making sure it's considered "fresh" for subsequent build steps or direct consumption.
    fs.writeFileSync(ABOUT_JSON_PATH, JSON.stringify(aboutData, null, 2), 'utf8');

    console.log('--- About Page Data Confirmation Complete! ---');
    console.log(`'${ABOUT_JSON_FILENAME}' was re-written to confirm its latest state.`);

} catch (error) {
    console.error(`Fatal error during about page data confirmation: ${error.message}`);
    process.exit(1); // Exit with error code
}