import React, { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "../../../styles/photo-album.css";
import Lightbox, { ThumbnailsRef } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

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
    width: 1800,
    height: 1000,
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
    width: 1800,
    height: 1000,
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
    width: 1800,
    height: 1000,
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
    width: 1800,
    height: 1000,
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
    width: 1800,
    height: 1000,
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
  const thumbnailsRef = useRef<ThumbnailsRef>(null);

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
  );
};

export default Gallery;
