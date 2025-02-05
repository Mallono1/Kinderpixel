import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/hand-logo2.png";
import { Link } from "react-scroll";
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
          <Link to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="wettbewerb" smooth={true} offset={-150} duration={500}>
            Wettbewerb
          </Link>
        </li>

        <li>
          <Link to="example" smooth={true} offset={-200} duration={500}>
            Examples
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            // className="btn"
          >
            Kontakt
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
      <img src={logo} alt="" className="logo" />
    </nav>
  );
};

export default Navbar;
