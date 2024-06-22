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
    src: "/staff_images/smilling_staff.jpg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-1`,
    src: "/about_images/the_space/infant_classroom.jpeg",
    width: 1800,
    height: 1000,
  },
  {
    key: `photo-10`,
    src: "/about_images/the_space/outdoor.jpeg",
    width: 800,
    height: 600,
  },
  {
    key: `photo-2`,
    src: "/about_images/the_space/preschool_classroom.jpeg",
    width: 1800,
    height: 1000,
  },
  {
    key: `photo-3`,
    src: "/about_images/the_space/toddler_classroom.jpeg",
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
    src: "/home_images/staff.jpeg",
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

  console.log(lightboxIndex);
  return (
    <div className="photos-container">
      <div className="photos-description-container w-50 m-auto mb-5 fs-5">
        <div className="photos-description-title-container mb-3">
           <h1>Photo Gallery</h1>
        </div>
        <div className="photos-description mb-5">
          <p>
          With over an acre of land the children have a unique opportunity to experience the open beauty of New England. Fruit, Vegetable, and flower gardens are tended by the children, and provide a natural habitat for wildlife. the small gardens provide a lovely extension of the classroom. Expansive lawns encourage vigorous outdoor activity. play structures are strategically scattered throughout the school grounds, small courtyards, and a bike path encourage imaginative outdoor play
          </p>
        </div>
        <hr/>
      </div>
      <div className="photo-album-container mx-auto mt-5 mb-5 ">
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
