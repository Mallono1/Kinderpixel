import React from "react";
import "./RatingPage.css";
import rating_1 from "../assets/img/gallery-1.jpg";
import rating_2 from "../assets/img/gallery-2.jpg";
import rating_3 from "../assets/img/gallery-3.jpg";
import rating_4 from "../assets/img/gallery-4.jpg";
import DiscoButton from "../Components/RatingButton";

function RatingPage() {
  return (
    <div className="rating">
      <div className="ratingFotos">
        <img src={rating_1} alt="" />
        <br />
        <DiscoButton />
        <img src={rating_2} alt="" />
        <DiscoButton />
        <img src={rating_3} alt="" />
        <DiscoButton />
        <img src={rating_4} alt="" />
        <DiscoButton />
      </div>
    </div>
  );
}

export default RatingPage;
