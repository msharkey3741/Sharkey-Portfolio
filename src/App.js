import React from "react";
import "./App.css";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Home />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
