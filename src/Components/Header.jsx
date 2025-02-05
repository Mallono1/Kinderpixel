import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header container" id="header">
      <div className="header-text">
        <h1> Kinderpixel</h1>
        <h2>Deutschlands größter Malwettbewerb für Kinder bis 18 Jahren</h2>
        <p>Gewinnt Preise für Euch und Eure Schul/Kita/Hort</p>
        <p>Im Gesamtwert von 15.000 €</p>

        <button className="btn">Explore more</button>
      </div>
    </div>
  );
};

export default Header;
