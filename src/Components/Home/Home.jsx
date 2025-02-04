import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home container" id="home">
      <div className="home-text">
        <h1> Kinderpixel</h1>
        <h2>Deutschlands größter Malwettbewerb für Kinder bis 18 Jahren</h2>
        <p>Gewinnt Preise für Euch und Eure Schul/Kita/Hort</p>
        <p>Im Gesamtwert von 15.000 €</p>
        <button className="btn">Erfahre mehr</button>
      </div>
    </div>
  );
};

export default Home;
