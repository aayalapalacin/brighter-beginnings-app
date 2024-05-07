import React from "react";
import PhotoAlbum from "react-photo-album";

let index = 0;

const photos = [
  { src: "/staff_images/smilling_staff.jpg", width: 800, height: 600 },
  { src: "/staff_images/smilling_staff.png", width: 1600, height: 900 },
  { src: "/staff_images/smilling_staff.jpg", width: 800, height: 600 },
  { src: "/staff_images/smilling_staff.png", width: 1600, height: 900 },
  { src: "/staff_images/smilling_staff.jpg", width: 800, height: 600 },
  { src: "/staff_images/smilling_staff.png", width: 1600, height: 900 },
  { src: "/staff_images/smilling_staff.jpg", width: 800, height: 600 },
  { src: "/staff_images/smilling_staff.png", width: 1600, height: 900 },
  { src: "/staff_images/smilling_staff.jpg", width: 800, height: 600 },
  { src: "/staff_images/smilling_staff.png", width: 1600, height: 900 },
  { src: "/staff_images/smilling_staff.jpg", width: 800, height: 600 },
];

const photo = {
  key: "1",
  src: "/staff_images/smilling_staff.jpg",
  width: 800,
  height: 600,
};

const Gallery = () => {
  return (
    <div className="bg-secondary photo-album-container w-75 mx-auto">
      <PhotoAlbum
        layout="columns"
        padding={5}
        photos={photos.map((photo) => ({ ...photo, key: `photo-${index++}` }))}
        // onClick={({ index }) => {
        //   openLightbox(index);
        // }}
      />
    </div>
  );
};

export default Gallery;
