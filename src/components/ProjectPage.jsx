import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="projectPage">
      <ul className="cardContainer">
        <li className="projectNaruto">
          <h3>Tribute Page:Naruto</h3>
          <button className="launch-btn">
            <a href="">Launch </a>
          </button>
          <p>
            Naruto Uzumaki, is known for his friendly charm and never-give-up
            spirit. His perseverance in the face of challenges and his dream of
            becoming the Hokage make him a beloved and inspiring character for
            fans around the world.
          </p>
          <img
            src={"/src/images/Naruto.png"}
            alt="Top-logo"
            width="250"
            height=""
          />

          <a href="">
            <button className="LearnMore-btn">Learn more</button>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default ProjectPage;
