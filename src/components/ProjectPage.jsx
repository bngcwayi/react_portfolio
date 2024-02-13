import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="projectPage">
      <ul className="cardContainer">
        <li className="projectNaruto">
          <h3>
            <a href="">Tribute Page:Naruto</a>
          </h3>
          <button className="launch-btn">Launch</button>
          <img
            src={"/src/images/Naruto.png"}
            alt="Top-logo"
            width="250"
            height=""
          />

          <p>
            This tribute page honors the ninja's resilience, showcasing how he
            triumphed over adversity and never wavered in pursuing his dreams.
          </p>
          <button className="launch-btn">Learn more + github icon</button>
        </li>
      </ul>
    </div>
  );
}
export default ProjectPage;
