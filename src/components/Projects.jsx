import "./Projects.css";

function Projects() {
  return (
    <div className="projectContainer">
      <ul className="cards-wrapper">
        <li className="project01">
          Project01
          <img
            src={"/src/images/Naruto.png"}
            alt="Top-logo"
            width="300"
            height=""
          />
          <h3>
            <a href="">Tribute Page:Naruto</a>
          </h3>
          <p>
            This tribute page honors the ninja's resilience, showcasing how he
            triumphed over adversity and never wavered in pursuing his dreams.
          </p>
        </li>

        <li className="project02">
          Project02
          <img
            src={"/src/images/Naruto.png"}
            alt="Top-logo"
            width="300"
            height=""
          />
          <h3>
            <a href="">Tribute Page:Naruto</a>
          </h3>
          <p>
            This tribute page honors the ninja's resilience, showcasing how he
            triumphed over adversity and never wavered in pursuing his dreams.
          </p>
        </li>
        <li className="project03">
          Project03
          <img
            src={"/src/images/Naruto.png"}
            alt="Top-logo"
            width="300"
            height=""
          />
          <h3>
            <a href="">Tribute Page:Naruto</a>
          </h3>
          <p>
            This tribute page honors the ninja's resilience, showcasing how he
            triumphed over adversity and never wavered in pursuing his dreams.
          </p>
        </li>
      </ul>
    </div>
  );
}
export default Projects;
