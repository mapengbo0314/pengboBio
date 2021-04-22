import "./App.css";
import React from "react";
import { Routes } from "./components";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="Menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfilo">Portfilo</Link>
          <Link to="/hobbies">Hobbies</Link>
        </div>
        <Routes />
      </Router>
    );
  }
}

export default App;
