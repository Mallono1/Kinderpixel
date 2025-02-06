import React from 'react'
import './AboutPage.css'
import about_img from "../assets/img/about.jpg";
import playbutton from "../assets/img/Playbutton.png";

function AboutPage() {
  return (
    <div className="about" id="about">
          <div className="about-left">
            <img src={about_img} alt="about_img" className="about_img" />
            <img src={playbutton} alt="playbutton" className="playbutton" />
          </div>
          <div className="about-right">
            <h2>About Kinderpixel</h2>
            <p>
              Wir fördern die Kraativität von Kindern und annimieren mehr Zeit mit
              Stift und Papier zu verbringen.{" "}
            </p>
          </div>
        </div>
  )
}

export default AboutPage;
