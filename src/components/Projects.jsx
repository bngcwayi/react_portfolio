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
          <h3>Tribute Page:Naruto</h3>
        </li>

        <li className="project02">Project02</li>
        <li className="project03">Project03</li>
      </ul>
    </div>
  );
}
export default Projects;
