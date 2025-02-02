import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Unsere Galerie" title="Aller Alterstufen" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Fotos Aller Alterstufen" />
        <Gallery />
        <Title
          subTitle="Testimonials"
          title="What Children Says about Kinderpixel"
        />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
