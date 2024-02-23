import React, { useState, useEffect } from "react";
import "./Slideshow.css";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Slideshow = ({ data }) => {
  const [Slides, setSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [Slides]);

  const nextSlide = () => {
    setSlide(Slides === data.length - 1 ? 0 : Slides + 1);
  };
  const prevSlide = () => {
    setSlide(Slides === 0 ? data.length - 1 : Slides - 1);
  };
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />

      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            width={item.width}
            key={idx}
            className={Slides === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                Slides === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
