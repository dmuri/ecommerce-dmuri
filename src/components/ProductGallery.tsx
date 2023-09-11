import React, { useEffect, useRef, useState } from "react";
import Lightbox from "./Lightbox";

const ProductGallery: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lightboxToggle, setLightBoxToggle] = useState(false);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imagePaths: string[] = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];

  const imagePathsThumbnail: string[] = [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg",
  ];

  const setPosition = (index?: number): void => {
    const indexToUse = typeof index === "number" ? index : currentIndex;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-indexToUse * 100}%)`;
    }
  };

  const handleThumbnailClick = (e: React.MouseEvent, index: number): void => {
    e.stopPropagation;
    setCurrentIndex((prevIndex) => {
      if (prevIndex !== index) {
        setPosition(index);
        return index;
      }
      return prevIndex;
    });
  };

  const handleMouseStart = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    if (windowWidth >= 1000 && !lightboxToggle) {
      setLightBoxToggle(true);
      return;
    }
    if (!sliderRef.current) {
      return;
    }
    console.log(window.innerWidth);
    const event = e.nativeEvent as MouseEvent;
    const imageWidth = sliderRef.current.offsetWidth;
    let tentativeIndex = currentIndex;

    if (event.offsetX < imageWidth * 0.2) {
      tentativeIndex =
        (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    } else {
      tentativeIndex = (currentIndex + 1) % imagePaths.length;
    }
    setPosition(tentativeIndex);
    setCurrentIndex(tentativeIndex);
  };

  const handleLightboxCloseClick = () => {
    setLightBoxToggle(false);
  };

  return (
    <>
      <section>
        {lightboxToggle && windowWidth > 800 ? (
          <Lightbox handleLightboxCloseClick={handleLightboxCloseClick} />
        ) : (
          <></>
        )}
        <div id="product-gallery">
          <div id="big-image-container">
            <div
              className="big-image-slider"
              ref={sliderRef}
              onClick={handleMouseStart}
            >
              {imagePaths.map((src, index) => (
                <img
                  className="big-image"
                  key={index}
                  src={src}
                  alt={`Big Image ${index + 1}`}
                  draggable={false}
                />
              ))}
            </div>
          </div>
          <div id="thumbnails">
            {imagePathsThumbnail.map((src, index) => (
              <img
                className={`thumbnail ${
                  currentIndex === index ? " active" : ""
                }`}
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                onClick={(e) => handleThumbnailClick(e, index)}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGallery;
