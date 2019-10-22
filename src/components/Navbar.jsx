import React from "react";
import { Navbar, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
const NavBar = props => {
  return (
    <Navbar color="light" light expand="md" className="NavBar">
      Home <NavLink>Projects</NavLink> <NavLink>Skills</NavLink>{" "}
      <NavLink>About</NavLink> <NavLink>Linkedin</NavLink>{" "}
      <NavLink>GitHub</NavLink>
      <Link to="/Contact">Contact</Link>
    </Navbar>
  );
};

export default NavBar;
