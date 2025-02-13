import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../assets/img/pfeil_rechts_blau.png";
import back_icon from "../assets/img/pfeil_links_blau.png";
import Testimonials_1 from "../assets/img/Testimonials_1.jpg";
import Testimonials_2 from "../assets/img/Testimonials_2.jpg";
import Testimonials_3 from "../assets/img/Testimonials_3.jpg";
import Testimonials_4 from "../assets/img/Testimonials_4.jpg";

function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Testimonials_1} alt="" />
                <div>
                  <h3>Familie Schulz</h3>
                  <span>Grundschule Berlin</span>
                </div>
              </div>
              <p>
                My daughter took part in the competition and had a lot
                Have fun with it. blah blah blah All of my daughter's coloring pictures that we
                have kept at home, were also provided by Eridian
                scanned. Now we keep these on our PC and in
                Network.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Testimonials_2} alt="" />
                <div>
                  <h3>Familie Schulz</h3>
                  <span>Grundschule Berlin</span>
                </div>
              </div>
              <p>
                My daughter took part in the competition and had a lot
                Have fun with it. blah blah blah All of my daughter's coloring pictures that we
                have kept at home, were also provided by Eridian
                scanned. Now we keep these on our PC and in
                Network.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Testimonials_3} alt="" />
                <div>
                  <h3>Familie Schulz</h3>
                  <span>Grundschule Berlin</span>
                </div>
              </div>
              <p>
                My daughter took part in the competition and had a lot
                Have fun with it. blah blah blah All of my daughter's coloring pictures that we
                have kept at home, were also provided by Eridian
                scanned. Now we keep these on our PC and in
                Network.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Testimonials_4} alt="" />
                <div>
                  <h3>Familie Schulz</h3>
                  <span>Grundschule Berlin</span>
                </div>
              </div>
              <p>
                My daughter took part in the competition and had a lot
                Have fun with it. blah blah blah All of my daughter's coloring pictures that we
                have kept at home, were also provided by Eridian
                scanned. Now we keep these on our PC and in
                Network.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
