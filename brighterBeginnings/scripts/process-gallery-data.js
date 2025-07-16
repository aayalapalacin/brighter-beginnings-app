// scripts/process-gallery-data.js

const fs = require('fs');
const path = require('path');
const { imageSize } = require('image-size');

// ... (keep Configuration section as is) ...

try {
    const rawData = fs.readFileSync(INPUT_JSON_PATH, 'utf8');
    const galleryData = JSON.parse(rawData);

    // --- ADD THIS CONSOLE.LOG FOR DEBUGGING ON NETLIFY ---
    console.log('DEBUG: Photos read from input JSON on Netlify:', JSON.stringify(galleryData.gallery_photos.map(p => p.src), null, 2));
    // --- END DEBUGGING ADDITION ---

    if (!galleryData.gallery_photos || !Array.isArray(galleryData.gallery_photos)) {
        console.warn('Warning: "gallery_photos" array not found or is not an array in the input JSON. Initializing as empty.');
        galleryData.gallery_photos = [];
    }

    const processedPhotos = galleryData.gallery_photos.map(photo => {
        const imageRelativePath = photo.src.startsWith('/') ? photo.src.substring(1) : photo.src;
        const imageAbsolutePath = path.join(PUBLIC_DIR_PATH, imageRelativePath);

        try {
            // ... (rest of your image processing logic remains the same) ...

            const imageBuffer = fs.readFileSync(imageAbsolutePath);
            const dimensions = imageSize(imageBuffer);

            return {
                ...photo,
                width: dimensions.width,
                height: dimensions.height,
            };
        } catch (error) {
            console.error(`Error processing image ${imageAbsolutePath}: ${error.message}`);
            return { ...photo, width: 0, height: 0, _error: 'Failed to get dimensions' };
        }
    });

    const outputData = {
        ...galleryData,
        gallery_photos: processedPhotos,
    };

    fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(outputData, null, 2), 'utf8');

    console.log('--- Photo Gallery Data Processing Complete! ---');
    console.log(`Processed data written to: ${OUTPUT_JSON_PATH}`);

} catch (error) {
    console.error(`Fatal error during photo gallery data processing: ${error.message}`);
    process.exit(1);
}