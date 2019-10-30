import React from "react";
import { Navbar, NavLink } from "reactstrap";
import { Link as Link2 } from "react-router-dom";
import "../css/NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Navbar expand="lg" className="NavBar">
      <Link onClick={scrollToTop} to="home">
        Home
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Skills
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>{" "}
      <NavLink
        target="_blank"
        href="https://www.linkedin.com/in/matthew-sharkey-944841189/"
      >
        Linkedin
      </NavLink>
      <NavLink target="_blank" href="https://github.com/msharkey3741">
        Github
      </NavLink>
      <Link2 to="/Contact">Contact</Link2>
      <a
        href={process.env.PUBLIC_URL + "/Resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="resume"
      >
        Resume
      </a>
    </Navbar>
  );
};

export default NavBar;
