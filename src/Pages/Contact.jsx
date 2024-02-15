import "./Contact.css";
import Navbar from "../components/Navbar";

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
          <label htmlFor="name">
            <input type="text" name="name" placeholder="Name" required />
          </label>
        </div>
        <div className="email">
          <label htmlFor="email">
            <input type="email" name="email" placeholder="Email" required />
          </label>
        </div>

        <div className="textarea">
          <label htmlFor="textarea">
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
      </form>
    </div>
  );
}
export default Contact;
