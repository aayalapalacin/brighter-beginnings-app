import React, { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "../../styles/photo-album.css";
import Lightbox, { ThumbnailsRef } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

const photos = [
  {
    key: `photo-0`,
    src: "/staff_images/smilling_staff.png",
    width: 800,
    height: 600,
  },
  {
    key: `photo-1`,
    src: "/about_images/play_learn_areas/infant_classroom.jpeg",
    width: 1800,
    height: 1000,
  },
  {
    key: `photo-10`,
    src: "/about_images/play_learn_areas/outdoor.jpeg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-2`,
    src: "/about_images/play_learn_areas/preschool_classroom.jpeg",
    width: 1800,
    height: 1000,
  },
  {
    key: `photo-3`,
    src: "/about_images/play_learn_areas/toddler_classroom.jpeg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-4`,
    src: "/about_images/children-reading-books.webp",
    width: 1800,
    height: 1000,
  },
  {
    key: `photo-5`,
    src: "/home_images/playground_photo.jpeg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-6`,
    src: "/home_images/staff.png",
    width: 1800,
    height: 1000,
  },
  {
    key: `photo-7`,
    src: "/staff_images/smilling_staff.png",
    width: 800,
    height: 600,
  },
  {
    key: `photo-8`,
    src: "/staff_images/employee_1.jpeg",
    width: 1800,
    height: 1000,
  },
  {
    key: `photo-9`,
    src: "/staff_images/employee_2.png",
    width: 800,
    height: 600,
  },
];

const Photos = () => {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const thumbnailsRef = useRef<ThumbnailsRef>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setOpen(true);
  };

  return (
    <div className="photos-container">
      <div className="photos-description-container w-75 m-auto mb-0 mb-md-5 mb-lg-5 fs-5">
        <div className="photos-description-title-container mb-3">
           <h1>Photo Gallery</h1>
        </div>
        <div className="photos-description d-none  d-md-block d-lg-block mb-5">
          <p>
          The children have a unique opportunity to explore over an acre of New England's open beauty. They tend fruit, vegetable, and flower gardens, creating natural habitats for wildlife and extending their classroom learning. Expansive lawns, strategically placed play structures, courtyards, and a bike path encourage vigorous and imaginative outdoor play.          </p>
        </div>
        <div className="photos-description d-block  d-md-none d-lg-none ">
          <p>
          Children explore over an acre of New England's beauty, tending gardens and enjoying expansive lawns, play structures, courtyards, and a bike path for outdoor play.            </p>
        </div>
        <hr/>
      </div>
      <div className="photo-album-container mx-auto mt-0 mt-md-5 mt-lg-5  mb-5 ">
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
