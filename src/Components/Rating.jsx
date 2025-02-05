import React from "react";
import "./Rating.css";
import rating_1 from "../assets/img/gallery-1.jpg";
import rating_2 from "../assets/img/gallery-2.jpg";
import rating_3 from "../assets/img/gallery-3.jpg";
import rating_4 from "../assets/img/gallery-4.jpg";

function Rating() {
  return (
    <div className="rating">
      <div className="ratingFotos">
        <img src={rating_1} alt="" />
        <img src={rating_2} alt="" />
        <img src={rating_3} alt="" />
        <img src={rating_4} alt="" />
      </div>
      <button className="btn">See more here</button>
    </div>
  );
}

export default Rating;
