import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faHippo} />
          </a>
          LinkedIn icon
        </li>
        <a href=""></a>
        <li>Github icon</li>
      </ul>
      <h3>bngcwayi@gmail.com</h3>
      <h2>Babalwa Ngcwayi, Cape Town, South Africa</h2>
    </div>
  );
}

export default Footer;
