import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/hand-logo2.png";
import { Link as LinkScroll } from "react-scroll";
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
          <LinkScroll to="home" smooth={true} offset={0} duration={500}>
            Home
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="wettbewerb"
            smooth={true}
            offset={-250}
            duration={500}
          >
            Wettbewerb
          </LinkScroll>
        </li>
        <li>
          <LinkScroll to="about" smooth={true} offset={-150} duration={500}>
            About us
          </LinkScroll>
        </li>

        <li>
          <LinkScroll to="example" smooth={true} offset={-200} duration={500}>
            Rating
          </LinkScroll>
        </li>

        <li>
          <LinkScroll
            to="testimonials"
            smooth={true}
            offset={-250}
            duration={500}
          >
            Testimonials
          </LinkScroll>
        </li>

        <li>
          <LinkScroll
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            // className="btn"
          >
            Kontakt
          </LinkScroll>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
      <img src={logo} alt="" className="logo" />
    </nav>
  );
};

export default Navbar;
