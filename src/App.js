import React from "react";
import "./App.css";
import "../src/css/background.css";
import NavBar from "./components/Navbar";
import IntroHeader from "./components//IntroHeader";
import Projects from "./components//Projects";
import About from "./components//About";
import Skills from "./components//Skills";
import Contact from "./components//Contact";
import TopButton from "./components/topbutton";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path="/" render={props => <NavBar {...props} />} />
        <Route
          exact={true}
          path="/"
          render={props => <IntroHeader {...props} />}
        />
        <Route
          exact={true}
          path="/"
          render={props => <Projects {...props} />}
        />

        {/* <div className="contactpage"> */}
        <Route
          exact={true}
          path="/contact"
          render={props => <Contact {...props} />}
        />
        <Route
          exact={true}
          path="/"
          render={props => <Skills {...props} />}
          className="SkillsSection"
        />
        <Route exact={true} path="/" render={props => <About {...props} />} />
        {/* </div> */}
        <Route exact path="/" render={props => <TopButton {...props} />} />
      </div>
    );
  }
}

export default App;
