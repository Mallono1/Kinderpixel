import React from "react";
import "./Gallery.css";
import gallery_1 from "../../assets/img/Program_1.jpg";
import gallery_2 from "../../assets/img/Program_2.jpg";
import gallery_3 from "../../assets/img/Program_3.jpg";
import gallery_icon_1 from "../../assets/img/hand-logo2.png";
import gallery_icon_2 from "../../assets/img/hand-logo2.png";
import gallery_icon_3 from "../../assets/img/hand-logo2.png";

const Gallery = () => {
  return (
    <div className="gallerys" id="wettbewerb">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <div className="caption">
          <img src={gallery_icon_1} alt="" />
          <p>Alterstufe 5-7</p>
        </div>
      </div>
      <div className="gallery">
        <img src={gallery_2} alt="" />
        <div className="caption">
          <img src={gallery_icon_2} alt="" />
          <p>Alterstufe 8-10</p>
        </div>
      </div>
      <div className="gallery">
        <img src={gallery_3} alt="" />
        <div className="caption">
          <img src={gallery_icon_3} alt="" />
          <p>Alterstufe 11-14</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
