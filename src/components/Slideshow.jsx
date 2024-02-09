import "./Slideshow.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Slideshow = ({ data }) => {
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" />

      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            width={item.width}
            key={idx}
            className="slide"
          />
        );
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button key={idx} onClick={null} className="indicator"></button>
          );
        })}
      </span>
    </div>
  );
};
