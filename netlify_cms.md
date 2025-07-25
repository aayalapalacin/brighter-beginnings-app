# Netlify CMS Integration: Making React Content Editable

This guide demonstrates how to make text and images within a React component editable via Netlify CMS, using a simplified **"Simple Hero" component** as an example.

**The core idea:** We generate a static JavaScript file with your content during the build, which your React components then directly import.

---

## Step-by-Step Guide

Let's imagine a `SimpleHero.tsx` component that displays a title, a paragraph, and a background image.

### 1. Identify Editable Content

For our `SimpleHero` component, we want to edit:

* **Text:** A main `<h2>` title, and a `<p>` description.
* **Image:** A `hero_image`.

### 2. Define Content Structure in `config.yml` in brighterBeginnings/public/admin/config.yml

Tell Netlify CMS about your new content fields and where to save the data.

* **File:** `public/admin/config.yml`
* **Key Sections:** `media_folder`, `public_folder`, and a new `files` entry under `collections`.

```yaml
# ... (existing backend configuration) ...

# These paths are relative to your repository root.
# Example: If your project lives in 'my-repo/my-app/', and public folder is 'my-app/public/',
# and config.yml is in 'my-app/public/admin/', then:
media_folder: brighterBeginnings/public/uploads # Where uploaded files are stored in Git
public_folder: /uploads  # Public URL path to these uploaded files

collections:
  # ... (your existing 'programs' or other collections) ...

  - name: "pages"
    label: "Website Pages"
    files:
      # --- NEW: Simple Hero Page ---
      - file: "brighterBeginnings/content/pages/simple-hero.json" # Path to your content JSON file
        label: "Simple Hero Section"
        name: "simple_hero_section"
        fields:
          - {label: "Hero Title", name: "title", widget: "string", required: true, hint: "Main title for the hero section"}
          - {label: "Hero Description", name: "description", widget: "markdown", required: true, hint: "Detailed paragraph text for the hero"}
          - {label: "Hero Image", name: "hero_image", widget: "image", required: false, hint: "Background image for the hero section"}
```
### 3. Create a Basic Content JSON File

Netlify CMS will create this when you first save, but you can also create it manually with default content.

 ** File:** `brighterBeginnings/content/pages/simple-hero.json`

```json
{
  "title": "Welcome to Our Site!",
  "description": "This is a simple hero section with editable text and an image managed by Netlify CMS.",
  "hero_image": "/uploads/default-hero.jpg"
}
```
### 4. Create a Data Generation Script

This script reads your JSON content and turns it into a JavaScript module that your React app can directly import.

* **File:** `brighterBeginnings/scripts/generate-simple-hero-data.js`

```javascript
const fs = require('fs');
const path = require('path');

// Define Paths (relative to the script's location in 'scripts/')
const JSON_PATH = path.resolve(__dirname, '..', 'content', 'pages', 'simple-hero.json');
const OUTPUT_DIR = path.resolve(__dirname, '..', 'src', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'simple-hero.js');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

let heroData = {};
if (fs.existsSync(JSON_PATH)) {
  try {
    heroData = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
  } catch (error) {
    console.error(`Error parsing JSON from ${JSON_PATH}:`, error);
  }
} else {
  console.warn(`Warning: '${JSON_PATH}' not found. Simple Hero data will be empty.`);
}

const jsContent = `
// This file is auto-generated by generate-simple-hero-data.js. Do not edit manually.
const simpleHeroData = ${JSON.stringify(heroData, null, 2)};
export default simpleHeroData;
`;

fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf8');
console.log(`Generated Simple Hero data to ${OUTPUT_FILE}`);
```
### 5. Update `package.json` Build Command

Ensure your new data generation script runs before your React app builds.

* **File:** `package.json`
* **Change:** Add `node scripts/generate-simple-hero-data.js` to your `build` script.

```json
{
  // ... other package.json content ...
  "scripts": {
    "start": "react-scripts start",
    "build": "node scripts/generate-programs-data.js && node scripts/generate-reviews-data.js && node scripts/generate-simple-hero-data.js && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  // ... rest of package.json ...
}
```
### 6. Define TypeScript Interfaces

Add type definitions for your new data structure.

* **File:** `src/data/simple-hero.d.ts`

```typescript
// Interface for the Simple Hero data structure
export interface SimpleHeroData {
  title: string;
  description: string;
  hero_image?: string; // Optional, as per config.yml
}

// Declare the type of the default export from the generated simple-hero.js
declare const simpleHeroData: SimpleHeroData;
export default simpleHeroData;
```

### 7. Integrate Data into React Component

Finally, consume the generated data in your React component.

* **File:** `src/components/SimpleHero.tsx` (or wherever your component lives)

```typescript
import React from 'react';
// Import the generated data and its interface
import simpleHeroData from '../data/simple-hero';
import { SimpleHeroData } from '../data/simple-hero'; // For type checking

const SimpleHero: React.FC = () => {
  // Simple check for missing data
  if (!simpleHeroData || !simpleHeroData.title) {
    return <div style={{ color: 'red' }}>Error: Simple Hero data missing!</div>;
  }

  // Destructure content
  const { title, description, hero_image } = simpleHeroData;

  return (
    <div className="simple-hero" style={{ backgroundImage: hero_image ? `url(${hero_image})` : 'none' }}>
      <div className="hero-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {/* If you wanted an <img> tag instead of background-image: */}
      {/* {hero_image && <img src={hero_image} alt={title} className="hero-image-tag" />} */}
    </div>
  );
};

export default SimpleHero;
```

## Troubleshooting Tips

* **Image Uploads Not Appearing / "Malformed Path":**
    * **Check `media_folder` in `config.yml`:** Ensure it's correct and doesn't have extra slashes. It should be relative to your repository root (e.g., `brighterBeginnings/public/uploads`).
    * **Verify in Git:** After uploading via CMS, check your online Git repository to confirm the image file exists at the expected path (e.g., `brighterBeginnings/public/uploads/your-image.png`).
* **Build Fails (e.g., "File Not Found"):**
    * **Check Paths in Script:** Double-check `JSON_PATH` and `OUTPUT_DIR` in your `generate-programs-data.js` script. They must correctly point to your content JSON and desired output JS file location.
* **Content Not Updating on Site:**
    * **Netlify Deploy:** Ensure a new build and deploy completed successfully on Netlify after your changes (CMS saves or code pushes).
    * **Browser Cache:** Perform a hard refresh (Ctrl+F5 or Cmd+Shift+R) in your browser.