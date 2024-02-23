import "./About.css";
import Navbar from "../components/Navbar";
import AboutMePhoto from "../images/AboutMePhoto.png";
import ReactIcon from "../images/ReactIcon.png";
import JSIcon from "../images/JavascriptIcon.png";
import HTMLIcon from "../images/HTMLIcon.png";
import CSSIcon from "../images/CSSIcon.png";
import PythonIcon from "../images/FigmaIcon.png";
import FigmaIcon from "../images/FigmaIcon.png";
import MiroIcon from "../images/MiroIcon.png";
import PhotoshopIcon from "../images/PythonIcon.png";
import GitIcon from "../images/GitIcon.png";
import GithubIcon from "../images/GithubIcon.png";

function About() {
  return (
    <div className="AboutMe">
      <div className="AdjustNav">
        <Navbar />
      </div>

      <div className="About">
        <img src={AboutMePhoto} alt="profile-photo" width="500" height="" />
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
          <img src={ReactIcon} alt="React-logo" width="100" height="100" />
        </div>
        <div className="item2">
          <h6>JavaScript</h6>
          {""}
          <img src={JSIcon} alt="JavaScript-logo" width="100" height="100" />
        </div>
        <div className="item3">
          <h6>HTML</h6>{" "}
          <img src={HTMLIcon} alt="HTML-logo" width="100" height="100" />
        </div>
        <div className="item4">
          <h6>CSS</h6>{" "}
          <img src={CSSIcon} alt="CSS-logo" width="100" height="100" />
        </div>
        <div className="item5">
          <h6>Python</h6>{" "}
          <img src={PythonIcon} alt="Python-logo" width="100" height="90" />
        </div>
        <div className="item6">
          <h6>Figma</h6>{" "}
          <img src={FigmaIcon} alt="Figma-logo" width="100" height="90" />
        </div>
        <div className="item7">
          <h6>Miro</h6>{" "}
          <img src={MiroIcon} alt="Miro-logo" width="100" height="100" />
        </div>
        <div className="item8">
          <h6>Adobe Photoshop</h6>{" "}
          <img
            src={PhotoshopIcon}
            alt="Photoshop-logo"
            width="100"
            height="100"
          />
        </div>
        <div className="item9">
          <h6>Git</h6>{" "}
          <img src={GitIcon} alt="Git-logo" width="100" height="100" />
        </div>
        <div className="item10">
          <h6>Github</h6>{" "}
          <img src={GithubIcon} alt="Github-logo" width="100" height="100" />
        </div>
      </div>
    </div>
  );
}
export default About;
