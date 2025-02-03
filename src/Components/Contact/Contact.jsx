import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/img/Email Button.png";
import mail_icon from "../../assets/img/@_Button.png";
import phone_icon from "../../assets/img/Telefon_Button.png";
import location_icon from "../../assets/img/G-Maps_Button.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-kpi">
        <h3>
          Send us a message <img src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us we strive to porvide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> Contact@Kinderpixel.de
          </li>
          <li>
            <img src={phone_icon} alt="" /> +49 30 339 399 00
          </li>
          <li>
            <img src={location_icon} alt="" /> Möllentordamm 10, 13597 Berlin{" "}
            <br />
          </li>
        </ul>
      </div>
      <div className="contact-kpi">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            className="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
        </form>
      </div>
    </div>
  );
}

export default Contact;
