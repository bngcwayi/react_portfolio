import React, { useState, useEffect } from "react";
import "./Slideshow.css";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />

      {images.map((image, idx) => (
        <img
          key={idx}
          src={image.src}
          alt={image.alt}
          width={image.width}
          className={currentSlide === idx ? "slide" : "slide slide-hidden"}
        />
      ))}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />

      <span className="indicators">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={
              currentSlide === idx
                ? "indicator"
                : "indicator indicator-inactive"
            }
          />
        ))}
      </span>
    </div>
  );
};
