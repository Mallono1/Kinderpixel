import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import Gallery from "../Components/Gallery";
import Title from "../Components/Title";
import About from "../Components/About";
import Rating from "../Components/Rating";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

function Home() {
  return (
    <div>
      <div className="container_1">
        <Header />
        <div className="container">
          <Title subTitle="Gallery" title="Aller Alterstufen" />

          <Gallery />
          <About />
          <Title subTitle="Rating" title="Fotos Aller Alterstufen" />
          <a id="example">The currently best rated pictures</a>
          <Rating />
          <br></br>
          <Title
            subTitle="Testimonials"
            title="What Children Says about Kinderpixel"
          />
          <Testimonials />
          <Title subTitle="Contact us" title="Get in Touch" />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;
