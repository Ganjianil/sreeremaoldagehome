import React, { useState, useEffect, useRef } from "react";
import "./AutoScrollGallery.css";
import bath from "/bath.jpg"
import inside from "/inside.jpg"
import old from "/old.jpg"
import Srh from "/Srh.jpeg"
const galleryImages = [
  // Using 8 images for better demonstration of groups
  {
    id: 1,
    imageUrl:
      old,
    altText: "Seniors interacting 1",
    caption: "Community 1",
  },
  {
    id: 2,
    imageUrl:
      inside,
    altText: "Wellness session 1",
    caption: "Wellness 1",
  },
  {
    id: 3,
    imageUrl:
      Srh,
    altText: "Caregiver assisting 1",
    caption: "Care 1",
  },
  {
    id: 4,
    imageUrl:
      "https://images.pexels.com/photos/6624171/pexels-photo-6624171.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    altText: "Comfortable room 1",
    caption: "Comfort 1",
  },
  {
    id: 5,
    imageUrl:
      bath,
    altText: "Outdoor garden 1",
    caption: "Outdoors 1",
  },
  {
    id: 6,
    imageUrl:
      inside,
    altText: "Bedridden care example",
    caption: "Support 1",
  },
  
  // Add more images if needed, ideally in multiples of 4 for cleanest look
];

const SCROLL_INTERVAL = 10000; // 10 seconds
const ITEMS_PER_SLIDE_DESKTOP = 4;

const AutoScrollGallery = ({ images = galleryImages }) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Calculate the total number of groups
  const numGroups = Math.ceil(images.length / ITEMS_PER_SLIDE_DESKTOP);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (numGroups <= 1) return; // No scrolling if only one group or less

    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentGroupIndex((prevIndex) =>
          prevIndex === numGroups - 1 ? 0 : prevIndex + 1
        ),
      SCROLL_INTERVAL
    );

    return () => {
      resetTimeout();
    };
  }, [currentGroupIndex, numGroups]);

  const goToGroup = (groupIndex) => {
    setCurrentGroupIndex(groupIndex);
  };

  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  return (
    <div className="auto-scroll-gallery-container multi-item-desktop">
      <h2 className="gallery-title">Life at Sriram Pakruthi</h2>
      <div className="gallery-viewport">
        <div
          className="gallery-filmstrip"
          style={{ transform: `translateX(-${currentGroupIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div className="gallery-slide" key={image.id}>
              {" "}
              {/* This will be 25% width on desktop */}
              <img
                src={image.imageUrl}
                alt={image.altText}
                className="gallery-image"
              />
              {image.caption && (
                <p className="gallery-caption">{image.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {numGroups > 1 && (
        <div className="gallery-dots">
          {Array.from({ length: numGroups }).map((_, idx) => (
            <button
              key={idx}
              className={`gallery-dot ${
                currentGroupIndex === idx ? "active" : ""
              }`}
              onClick={() => goToGroup(idx)}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoScrollGallery;
