import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="brand-area">
        <Link className="brand" to="/" onClick={closeMenu}>
          CourseReg
        </Link>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          Menu
        </button>
      </div>

      <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <Link
          className={location.pathname === "/" ? "active-link" : ""}
          to="/"
          onClick={closeMenu}
        >
          Info
        </Link>
        <Link
          className={location.pathname === "/course" ? "active-link" : ""}
          to="/course"
          onClick={closeMenu}
        >
          Course
        </Link>
        
        <Link
          className={location.pathname === "/summary" ? "active-link" : ""}
          to="/summary"
          onClick={closeMenu}
        >
          Summary
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
