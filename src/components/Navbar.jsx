import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i class="fa-solid fa-bars" id="btn"></i>
          <i class="fa-solid fa-times" id="cancel"></i>
        </label>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <a href="#">Resume </a>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
