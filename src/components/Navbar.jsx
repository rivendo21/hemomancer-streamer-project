import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <a href="/">
          <img className="logo-img" src="hemomancer.png" />
        </a>
      </div>
      <div className="right-section">
        <NavLink to="/">About</NavLink>
        <NavLink to="/Leaderboard">Leaderboard</NavLink>
        <NavLink to="/PatchNotes">Patch notes</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
