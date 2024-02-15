import "./About.css";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="AboutMe">
      <div className="AdjustNav">
        <Navbar />
      </div>

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
        <div className="item1">
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item2">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item3">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item4">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item5">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item6">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item7">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item8">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item9">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
        <div className="item10">
          {" "}
          <img
            src={"/src/images/Logo_v2.png"}
            alt="Top-logo"
            width="150"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
