import "./App.css";
import React from "react";
import { Routes, Menu } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { Copyright } from "./components/copyright";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        <Routes />
        <Copyright />
      </Router>
    );
  }
}

export default App;
