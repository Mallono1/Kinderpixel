import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import CompetitionPage from "./Pages/CompetitionPage";

import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Wettbewerb" element={<CompetitionPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
