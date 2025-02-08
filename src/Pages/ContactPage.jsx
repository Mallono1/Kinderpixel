import React from "react";
import "./ContactPage.css";
import msg_icon from "../assets/img/Email_Button.png";
import mail_icon from "../assets/img/@_Button.png";
import phone_icon from "../assets/img/Telefon_Button.png";
import location_icon from "../assets/img/G-Maps_Button.png";

function ContactPage() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d073875-c858-4954-97e7-2c6f3eaac7d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
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
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            className="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="Telnr."
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your massages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit now
          </button>
        </form>
        <span> {result} </span>
      </div>
    </div>
  );
}

export default ContactPage;
