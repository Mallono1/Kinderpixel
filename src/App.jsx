import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Rating from "./Components/Rating/Rating";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import CompetitionPage from "./Pages/CompetitionPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Home />
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

        <Footer />
      </div>
    </div>
  );
};

export default App;
