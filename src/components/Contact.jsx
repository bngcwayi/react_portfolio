import "./Contact.css";

function Contact() {
  return (
    <div className="form-container">
      <h3>Get in Touch</h3>
      <form action="">
        <div className="Name">
          <label htmlFor="name">
            <input type="text" name="name" placeholder="Name" required />
          </label>
        </div>
        <div classNme="email">
          <label htmlFor="email">
            <input type="email" placeholder="Email" required />
          </label>
        </div>

        <div className="textarea">
          <label htmlFor="textarea">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message me.."
              required
            ></textarea>
          </label>
        </div>

        <div className="submit-button">
          <button type="submit">Send email</button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
