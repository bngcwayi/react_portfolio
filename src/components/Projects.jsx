import "./Projects.css";

function Projects() {
  return (
    <div className="projectContainer">
      <ul className="cardWrapper">
        <li className="project01">
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
          <img
            src={"/src/images/product_page_2.png"}
            alt="Top-logo"
            width="300"
            height="222"
          />
          <h3>
            <a href="">Product Page</a>
          </h3>
          <p>
            Upgrade your home with affordable luxury and transform your
            relaxation space with our user-friendly selection of sectional
            couches.
          </p>
        </li>
        <li className="project03">
          <img
            src={"/src/images/Weather_App.png"}
            alt="Top-logo"
            width="295"
            height=""
          />
          <h3>
            <a href="">Weather_App</a>
          </h3>
          <p>
            Stay ahead of the weather with our user-friendly app that provides
            real-time updates on temperature, precipitation and wind conditions.
          </p>
        </li>
      </ul>
    </div>
  );
}
export default Projects;
