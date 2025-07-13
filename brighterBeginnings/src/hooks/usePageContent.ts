
import { useState, useEffect } from 'react';

// You still need to define these interfaces (HomePageContent, ReviewsPageContent)
// wherever you put them, e.g., in src/types/content.ts or src/types/pageContentMap.ts
// For this version of the hook, PageContentMap is not strictly necessary for its definition,
// but it's good practice for centralizing types.
// If you don't use PageContentMap, ensure your individual content interfaces are exported.

/**
 * Custom React Hook to load page content from generated data files.
 * Assumes data files are located at `../data/${pageName}.js` and export a default object.
 *
 * @template T The expected type of the content object.
 * @param {string} pageName The name of the page content to load (e.g., 'home', 'reviews').
 * @returns {{content: T | null, loading: boolean, error: boolean}}
 */
const usePageContent = <T>(pageName: string) => {
  const [content, setContent] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates on unmounted components

    const loadContent = async () => {
      setLoading(true);
      setError(false);
      try {
        // Dynamically import the specific page data
        // Note: The path here is relative to where usePageContent.js is located
        const module = await import(`../../content/pages/${pageName}.json`);
        if (isMounted) {
          setContent(module.default as T); // Assuming the data is the default export
        }
      } catch (err) {
        if (isMounted) {
          console.error(`Error loading content for '${pageName}':`, err);
          setError(true);
          setContent(null); // Clear content on error
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (pageName) { // Only load if pageName is provided
      loadContent();
    } else {
      // If pageName is empty/null, consider it an error or no content to load
      if (isMounted) {
        setError(true);
        setLoading(false);
        setContent(null);
      }
    }

    return () => {
      isMounted = false; // Cleanup: set flag to false when component unmounts
    };
  }, [pageName]); // Re-run effect if pageName changes

  return { content, loading, error };
};

export default usePageContent;