import React from "react";
import "./CompetitionPage.css";
import Gallery from "../Components/Gallery";

function CompetitionPage() {
  return (
    <div>
    <div className="text">
    <h1>Chose your Gallery</h1> </div>
    
    <Gallery />
      <div className="gallarypage"> 
            
        
      </div>
      <div className="flex">
          <h2>Here you see all Gallary-Pages from Kids 2-14 years!</h2>
          <span>Click on the Gallary and you will see all paintings from children in that age.</span>
        </div>
      
    </div>
  );
}

export default CompetitionPage;
