import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <a href="/">
          <img className="logo-img" src="hemomancer.png" alt="Logo" />
        </a>
      </div>

      <div className={`right-section ${menuOpen ? "open" : ""}`}>
        <NavLink to="/home" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/Leaderboard" onClick={() => setMenuOpen(false)}>
          Leaderboard
        </NavLink>
        <NavLink to="/PatchNotes" onClick={() => setMenuOpen(false)}>
          Patch Notes
        </NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
