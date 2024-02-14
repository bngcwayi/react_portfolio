import "./About.css";

function About() {
  return (
    <div className="AboutMe">
      <div className="About">
        <img
          src={"/src/images/AboutMePhoto (1).png"}
          alt="Top-logo"
          width="500"
          height=""
        />
        <p>
          I am driven by a passion for crafting user-friendly applications with
          a keen focus on problem-solving. I thrive on taking initiative and
          find joy in contributing effectively within a collaborative team
          environment. Committed to continuous learning, I aspire to make
          meaningful contributions to the world of software development.
        </p>
      </div>
      <div className="Skills">
        <div className="item1">1</div>
        <div className="item2">2</div>
        <div className="item3">3</div>
        <div className="item4">4</div>
        <div className="item5">5</div>
        <div className="item6">6</div>
        <div className="item7">7</div>
        <div className="item8">8</div>
        <div className="item9">9</div>
        <div className="item10">10</div>
      </div>
    </div>
  );
}
export default About;
