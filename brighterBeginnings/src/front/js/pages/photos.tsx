// Your Photos.tsx component file

import React, { useRef, useState } from "react";
// Import your existing usePageContent hook
import usePageContent from "../../../hooks/usePageContent";

import PhotoAlbum from "react-photo-album";
import "../../styles/photo-album.css";
import Lightbox, { ThumbnailsRef } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

// Define the interfaces for your photo and gallery data
// You might want to put these in a shared types file (e.g., src/types/content.ts)
interface Photo {
  src: string;
  width: number;
  height: number;
  _error?: string;
}

interface GalleryData {
  title: string;
  long_description: string;
  short_description: string;
  gallery_photos: Photo[];
}

const Photos: React.FC = () => {
  // Use your custom hook to fetch the processed photo gallery data
  // The 'pageName' here is 'processed_photo_gallery' because that's the filename we'll generate.
  const { content: galleryData, loading, error } = usePageContent<GalleryData>(
    'processed_photo_gallery'
  );

  const [open, setOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const thumbnailsRef = useRef<ThumbnailsRef>(null);

  if (loading) {
    return <div className="photos-container">Loading photo gallery...</div>;
  }

  if (error) {
    return <div className="photos-container">Error loading photo gallery.</div>;
  }

  if (!galleryData || !galleryData.gallery_photos) {
    return <div className="photos-container">No photo gallery data available.</div>;
  }

  // Destructure data once it's confirmed to be loaded
  const { title, long_description, short_description, gallery_photos: photos } = galleryData;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setOpen(true);
  };

  return (
    <div className="photos-container">
      <div className="photos-description-container w-75 m-auto mb-0 mb-md-5 mb-lg-5 fs-5">
        <div className="photos-description-title-container mb-3">
          <h1>{title}</h1>
        </div>
        <div className="photos-description d-none d-md-block d-lg-block mb-5">
          <p>
            {long_description}
          </p>
        </div>
        <div className="photos-description d-block d-md-none d-lg-none ">
          <p>
            {short_description}
          </p>
        </div>
        <hr />
      </div>
      <div className="photo-album-container mx-auto mt-0 mt-md-5 mt-lg-5 mb-5 ">
        <PhotoAlbum
          layout="rows"
          padding={5}
          photos={photos}
          onClick={({ index }) => {
            openLightbox(index);
          }}
        />
        <Lightbox
          className="lightbox-container"
          open={open}
          close={() => setOpen(false)}
          slides={photos}
          index={lightboxIndex}
          plugins={[Thumbnails]}
          thumbnails={{
            ref: thumbnailsRef,
            imageFit: "contain",
            borderRadius: 15,
            showToggle: true,
            position: "bottom",
            borderStyle: "",
          }}
          on={{
            click: () => {
              (thumbnailsRef.current?.visible
                ? thumbnailsRef.current?.hide
                : thumbnailsRef.current?.show)?.();
            },
          }}
        />
      </div>
    </div>
  );
};

export default Photos;