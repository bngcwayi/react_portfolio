import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");
  const recaptcha = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1h8su7n", "template_o1odrcq", form.current, {
        publicKey: "mVseHYyiuFmFU-pTL",
      })
      .then(
        () => {
          setMessageStatus("Thank you. Message Sent!");
        },
        (error) => {
          setMessageStatus(
            "Failed to send message. Please try again.",
            error.text
          );
        }
      );
  };
  async function submitForm(event) {
    event.preventDefault();
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
    } else {
      const res = await fetch("http://localhost:8000/verify", {
        method: "POST",
        body: JSON.stringify({ captchaValue }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      if (data.success) {
        // make form submission
        alert("Form submission successful!");
      } else {
        alert("reCAPTCHA validation failed!");
      }
    }
  }

  return (
    <div className="form-container">
      <div className="AdjustNav">
        <Navbar />
      </div>
      <form onSubmit={submitForm} ref={form}>
        <div className="formHeading">
          <h3>Get in Touch</h3>
          <p>Thank you for visiting my portfolio website</p>
        </div>
        <div className="name">
          <label for="name">
            <input
              type="text"
              name="from_name"
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
              name="from_email"
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
              name="message"
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
        <ReCAPTCHA
          ref={recaptcha}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        />
        <span id="emailError" className="error-message"></span>
        {messageStatus && <div className="message-status">{messageStatus}</div>}
      </form>

      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

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
