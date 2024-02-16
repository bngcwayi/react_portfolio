import "./Projects.css";
import Navbar from "../components/Navbar";

function Projects() {
  return (
    <div className="projectContainer">
      <div className="AdjustNav">
        <Navbar />
      </div>
      <ul className="cardWrapper">
        <li className="project01">
          <img
            src={"/src/images/Naruto.png"}
            alt="Top-logo"
            width="300"
            height=""
          />
          <h3 className="ProjectTitle">Tribute Page:Naruto</h3>
          <p>
            This tribute page honors the ninja's resilience, showcasing how he
            triumphed over adversity and never wavered in pursuing his dreams.
          </p>
          <button className="launch-btn">
            <a href=" https://snazzy-froyo-38dcc6.netlify.app/" target="_blank">
              Launch
            </a>
          </button>
          <button className="LearnMore-btn">
            <a href="https://github.com/bngcwayi/tribute-page" target="_blank">
              Learn more
            </a>
          </button>
        </li>

        <li className="project02">
          <img
            src={"/src/images/product_page_2.png"}
            alt="Top-logo"
            width="300"
            height="222"
          />
          <h3 className="ProjectTitle">Product Page</h3>
          <p>
            Upgrade your home with affordable luxury and transform your
            relaxation space with our user-friendly selection of sectional
            couches.
          </p>
          <button className="launch-btn">
            <a
              href="https://musical-crumble-3b9913.netlify.app/"
              target="_blank"
            >
              Launch
            </a>
          </button>
          <button className="LearnMore-btn">
            <a href="https://github.com/bngcwayi/product-page" target="_blank">
              Learn more
            </a>
          </button>
        </li>
        <li className="project03">
          <img
            src={"/src/images/Weather_App.png"}
            alt="Top-logo"
            width="300"
            height=""
          />
          <h3 className="ProjectTitle">Weather App</h3>
          <p>
            Stay ahead of the weather with our user-friendly app that provides
            real-time updates on temperature, precipitation and wind conditions.
          </p>
          <button className="launch-btn">
            <a
              href="https://warm-arithmetic-ba10c7.netlify.app/"
              target="_blank"
            >
              Launch
            </a>
          </button>
          <button className="LearnMore-btn">
            <a
              href="https://github.com/bngcwayi/vanilla_weather_app"
              target="_blank"
            >
              Learn more
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Projects;
