import React from "react";
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
  return (
    <div className="bg-secondary photo-album-container w-75 mx-auto">
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
