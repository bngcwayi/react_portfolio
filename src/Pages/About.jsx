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
          I am dedicated to always learning and growing, striving to make a
          positive impact in the software development space.
          <br />
          Transitioning to tech ignited my passion for problem-solving, showing
          me the endless possibilities in this field.
          <br />
          With a long-term commitment to this career, I aim to not only fulfill
          my aspirations but also provide for my family, ensuring a stable and
          fulfilling future.
        </p>
      </div>
      <div className="Skills">
        <h1></h1>
        <div className="item1">
          <h6>React</h6>
          <img
            src={"/src/images/React_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item2">
          <h6>JavaScript</h6>
          {""}
          <img
            src={"/src/images/Javascript_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item3">
          <h6>HTML</h6>{" "}
          <img
            src={"/src/images/Html_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item4">
          <h6>CSS</h6>{" "}
          <img
            src={"/src/images/CSS_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item5">
          <h6>Python</h6>{" "}
          <img
            src={"/src/images/Python_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item6">
          <h6>Figma</h6>{" "}
          <img
            src={"/src/images/Figma_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item7">
          <h6>Miro</h6>{" "}
          <img
            src={"/src/images/Miro_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item8">
          <h6>Adobe Photoshop</h6>{" "}
          <img
            src={"/src/images/Photoshop_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item9">
          <h6>Git</h6>{" "}
          <img
            src={"/src/images/Git_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item10">
          <h6>Github</h6>{" "}
          <img
            src={"/src/images/Github_Icon.png"}
            alt="Top-logo"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
