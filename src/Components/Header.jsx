import React from "react";
import "./Header.css";

const Header = () => {
  const navigateToAbout = () => {
    window.location.href = "/About";
  };

  return (
    <div className="header container" id="header">
      <div className="header-text">
        <h1> Kinderpixel</h1>
        <h2>Germany's largest painting competition for children up to 18 years</h2>
        <p>Win prizes for you and your school/daycare center/after-school care center</p>
        <p>With a total value of €15,000</p>

        <button className="btn" onClick={navigateToAbout}>
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Header;
