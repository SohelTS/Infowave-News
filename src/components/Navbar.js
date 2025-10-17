import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
        <span className="brand">Infowave News</span>
      </div>
      <div className="nav-links">
        <Link to="/">General</Link>
        <Link to="/business">Business</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/health">Health</Link>
        <Link to="/science">Science</Link>
      </div>
    </nav>
  );
}

export default Navbar;
