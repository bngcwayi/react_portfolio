import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="form-container">
      <div className="AdjustNav">
        <Navbar />
      </div>
      <form action="">
        <div className="formHeading">
          <h3>Get in Touch</h3>
          <p>Thank you for visiting my portfolio website</p>
        </div>
        <div className="name">
          <label for="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              pattern="[A-Za-z\s]+"
              title="Only letters and spaces are allowed"
            />
          </label>
        </div>
        <div className="email">
          <label for="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <div className="textarea">
          <label for="textarea">
            <textarea
              name="textarea"
              id="textarea"
              cols="37"
              rows="6"
              placeholder="I'd like to chat about.."
              required
            ></textarea>
          </label>
        </div>

        <button type="submit" id="submit-btn">
          Send email
        </button>
        <span id="emailError" className="error-message"></span>
      </form>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}
export default Contact;
function handleEmailChange(event) {
  const email = event.target.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById("emailError");

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "inline"; // Make the error message visible
  } else {
    emailError.textContent = ""; // Clear the error message
    emailError.style.display = "none"; // Hide the error message
  }
}
