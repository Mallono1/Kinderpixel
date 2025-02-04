import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/hand-logo2.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>About us</li>
        <li>Gallery</li>
        <li>Wettbewerb</li>
        <li>
          <button className="btn">Kontakt</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
