import "./Slideshow.css";

export const Slideshow = ({ data }) => {
  return (
    <div className="carousel">
      {data.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} width={item.width} key={idx} />
        );
      })}
    </div>
  );
};
