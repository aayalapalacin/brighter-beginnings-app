// scripts/generate-about-data.js

const fs = require('fs');
const path = require('path');

// --- Configuration ---
const PROJECT_ROOT = path.join(__dirname, '..');

const INPUT_JSON_FILENAME = 'about.json';
const OUTPUT_JSON_FILENAME = 'processed_about.json';

const INPUT_JSON_PATH = path.join(PROJECT_ROOT, 'content', 'pages', INPUT_JSON_FILENAME);
const OUTPUT_JSON_PATH = path.join(PROJECT_ROOT, 'content', 'pages', OUTPUT_JSON_FILENAME);

console.log('--- Starting About Page Data Transfer (No Image Processing) ---');
console.log(`Input JSON: ${INPUT_JSON_PATH}`);
console.log(`Output JSON: ${OUTPUT_JSON_PATH}`);

try {
    // 1. Read the input JSON file
    if (!fs.existsSync(INPUT_JSON_PATH)) {
        console.warn(`Warning: Input JSON file not found at ${INPUT_JSON_PATH}. ` +
                     `Creating an empty ${OUTPUT_JSON_FILENAME} to prevent build failures.`);
        // Create an empty processed file if input doesn't exist
        fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify({ title: "", main_image: "", play_learn_data: [] }, null, 2), 'utf8');
        process.exit(0); // Exit successfully, but indicate no data was processed
    }

    const rawData = fs.readFileSync(INPUT_JSON_PATH, 'utf8');
    let aboutData = JSON.parse(rawData);

    // No image dimension processing is done here.
    // The data is transferred as-is.

    // 2. Write the data to the output JSON file
    fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(aboutData, null, 2), 'utf8');

    console.log('--- About Page Data Transfer Complete! ---');
    console.log(`Processed data written to: ${OUTPUT_JSON_PATH}`);

} catch (error) {
    console.error(`Fatal error during about page data transfer: ${error.message}`);
    process.exit(1); // Exit with error code
}