import React, { useRef, useEffect } from "react";
import PhotoAlbum from "react-photo-album";

let index = 0;

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
  const photoAlbumContainerRef = useRef(null);
  useEffect(() => {
    // Check if ResizeObserver is supported by the browser
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        // ResizeObserver callback function
        // You can handle resize events here if needed
      });

      // Start observing the container element

      // Return cleanup function to unobserve the container element when component unmounts
      return () => {
        if (photoAlbumContainerRef.current) {
          resizeObserver.unobserve(photoAlbumContainerRef.current);
        }
      };
    }
  }, []); // Only run this effect once, when the component mounts
  return (
    <div
      ref={photoAlbumContainerRef}
      className="bg-secondary photo-album-container w-75 mx-auto">
      <PhotoAlbum
        layout="columns"
        padding={5}
        photos={photos}
        // onClick={({ index }) => {
        //   openLightbox(index);
        // }}
      />
    </div>
  );
};

export default Gallery;
