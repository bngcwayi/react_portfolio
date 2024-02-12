import "./Contact.css";

function Contact() {
  return (
    <div className="form-container">
      <form action="">
        <div className="formHeading">
          <h3>Get in Touch</h3>
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
              cols="30"
              rows="10"
              placeholder="Message me.."
              required
            ></textarea>
          </label>
        </div>

        <div className="submit-button">
          <button type="submit" id="submit-btn">
            Send email
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
