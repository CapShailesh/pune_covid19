import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/MainComponent";
import { HashRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
