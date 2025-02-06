import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link as LinkRouter } from "react-router-dom";
import logo from "../../assets/img/hand-logo2.png";
import menu_icon from "../../assets/img/SidebarNavi.png";

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

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <LinkRouter to="/">Home</LinkRouter>
        </li>
        <li>
          <LinkRouter to="/Wettbewerb">Wettbewerb</LinkRouter>
        </li>
        <li><LinkRouter to="/About">About us</LinkRouter></li>

        <li><LinkRouter to="/Rating">Rating</LinkRouter></li>

        {/* <li>Testimonials</li> */}

        <li><LinkRouter to="/Contact">Contact</LinkRouter></li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
      <img src={logo} alt="" className="logo" />
    </nav>
  );
};

export default Navbar;
