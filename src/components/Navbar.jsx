import "./Navbar.css";
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
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#">About </a>
          </li>
          <li>
            <a href="#">Projects </a>
          </li>
          <li>
            <a href="#">Get in touch </a>
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
