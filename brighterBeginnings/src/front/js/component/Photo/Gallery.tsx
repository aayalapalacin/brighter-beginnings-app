import React, { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "../../../styles/photo-album.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  {
    key: `photo-0`,
    src: "/staff_images/smilling_staff.jpg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-1`,
    src: "/staff_images/smilling_staff.png",
    width: 1600,
    height: 900,
  },
  {
    key: `photo-10`,
    src: "/staff_images/smilling_staff.jpg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-2`,
    src: "/staff_images/smilling_staff.png",
    width: 1600,
    height: 900,
  },
  {
    key: `photo-3`,
    src: "/staff_images/smilling_staff.jpg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-4`,
    src: "/staff_images/smilling_staff.png",
    width: 1600,
    height: 900,
  },
  {
    key: `photo-5`,
    src: "/staff_images/smilling_staff.jpg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-6`,
    src: "/staff_images/smilling_staff.png",
    width: 1600,
    height: 900,
  },
  {
    key: `photo-7`,
    src: "/staff_images/smilling_staff.jpg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-8`,
    src: "/staff_images/smilling_staff.png",
    width: 1600,
    height: 900,
  },
  {
    key: `photo-9`,
    src: "/staff_images/smilling_staff.jpg",
    width: 800,
    height: 600,
  },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setOpen(true);
  };

  console.log(lightboxIndex);
  return (
    <div className="photo-album-container mx-auto">
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
        render={{
          slideFooter: () => {
            return (
              <div className="custom-slide-footer">
                {photos.map((photo, index) => (
                  <img
                    className="lightbox-thumbnail"
                    src={photo.src}
                    key={photo.key}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setLightboxIndex(index)}
                  />
                ))}
              </div>
            );
          },
        }}
      />
    </div>
  );
};

export default Gallery;
