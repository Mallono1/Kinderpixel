import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import CompetitionPage from "./Pages/CompetitionPage";
import AboutPage from "./Pages/AboutPage";
import RatingPage from "./Pages/RatingPage";
import ContactPage from "./Pages/ContactPage";
import GallaryPage from "./Pages/GallaryPage";
import CreateProjectPage from "./Pages/CreateProjectPage";


import Footer from "./Components/Footer/Footer";
import EditProjectPage from "./Pages/EditProjectPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Wettbewerb" element={<CompetitionPage />} />
        <Route path="/CreateProject" element={<CreateProjectPage />} />
        <Route path="/EditProject" element={<EditProjectPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Rating" element={<RatingPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Gallary" element={<GallaryPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
