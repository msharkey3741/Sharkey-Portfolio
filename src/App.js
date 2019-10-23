import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import IntroHeader from "./components//IntroHeader";
import Projects from "./components//Projects";
import About from "./components//About";
import Contact from "./components//Contact";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
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
        <Route exact={true} path="/" render={props => <About {...props} />} />
        <Route
          exact={true}
          path="/contact"
          render={props => <Contact {...props} />}
        />
      </div>
    );
  }
}

export default App;
