import "./menu.css";
import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfilo">Portfilo</Link>
      <Link to="/hobbies">Hobbies</Link>
    </div>
  );
};

export default Menu;
