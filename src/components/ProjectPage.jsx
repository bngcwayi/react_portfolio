import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="projectPage">
      <ul className="cardContainer">
        <li className="projectNaruto">
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
export default ProjectPage;
