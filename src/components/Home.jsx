import React from "react";
import IntroHeader from "./IntroHeader";
import Projects from "./Projects";
import Header from "./Navbar";
import About from "./About";
import Contact from "./Contact";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <IntroHeader />
        <Projects />
        <About />
        <Contact />
      </React.Fragment>
    );
  }
}
export default Home;
