import "./Slideshow.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Slideshow = ({ data }) => {
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill />

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
      <BsArrowRightCircleFill />
    </div>
  );
};
