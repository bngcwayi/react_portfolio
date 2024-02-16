import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import Linkedin icon
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import github icon

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <ul>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faLinkedin} /> {/* Use LinkedIn icon */}
            </a>
            LinkedIn icon
          </li>
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <li>Github icon</li>
        </ul>
        <h3>bngcwayi@gmail.com</h3>
        <h2>Babalwa Ngcwayi, Cape Town, South Africa</h2>
      </footer>
    </div>
  );
}

export default Footer;
