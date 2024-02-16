import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <ul className="Icons">
          <li>
            <a
              href="https://www.linkedin.com/in/babalwa-portia-ngcwayi-24618264/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="LinkedInIcon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/bngcwayi" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="GithubIcon" />
            </a>
          </li>
        </ul>
        <h3>bngcwayi@gmail.com</h3>
        <h2>Babalwa Ngcwayi, Cape Town, South Africa</h2>
      </footer>
    </div>
  );
}

export default Footer;
