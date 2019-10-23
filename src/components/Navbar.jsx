import React from "react";
import { Navbar, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
const NavBar = () => {
  return (
    <Navbar color="light" light expand="md" className="NavBar">
      <Link to="/">Home</Link> <NavLink>Projects</NavLink>{" "}
      <NavLink>Skills</NavLink> <NavLink>About</NavLink>{" "}
      <NavLink href="https://www.linkedin.com/in/matthew-sharkey-944841189/">
        Linkedin
      </NavLink>
      <NavLink href="https://github.com/msharkey3741">Github</NavLink>
      <Link to="/Contact">Contact</Link>
    </Navbar>
  );
};

export default NavBar;
