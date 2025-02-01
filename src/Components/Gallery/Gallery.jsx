import React from "react";
import "./Gallery.css";
import gallery_1 from "../../assets/img/gallery-1.jpg";
import gallery_2 from "../../assets/img/gallery-2.jpg";
import gallery_3 from "../../assets/img/gallery-3.jpg";
import gallery_4 from "../../assets/img/gallery-4.jpg";
import gallery_5 from "../../assets/img/white_arrow.png";

function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryFotos">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn">
        See more here
        {/* <img src={gallery_5} alt="" /> */}
      </button>
    </div>
  );
}

export default Gallery;
