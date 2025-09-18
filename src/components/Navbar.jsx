import React, { useState } from "react";
import { FaPhone, FaNewspaper, FaSearch, FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom">
        <div className="d-flex gap-3">
          <a href="#" className="text-decoration-none text-dark">
            <FaNewspaper className="me-1 text-purple" /> Media
          </a>
          <a href="#" className="text-decoration-none text-dark">
            <FaPhone className="me-1 text-purple" /> Contact
          </a>
        </div>

        <div className="search-box position-relative d-none d-md-block">
          <input
            type="text"
            className="form-control border-0 border-bottom rounded-0"
            placeholder="Looking for Residential, Land, Commercial"
          />
          <FaSearch className="position-absolute end-0 top-50 translate-middle-y text-purple me-2" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="d-flex justify-content-between align-items-center px-4 py-2">
        {/* Left Menu (desktop only) */}
        <ul className="d-none d-md-flex list-unstyled mb-0 gap-4 fw-semibold">
          <li><a href="#" className="text-dark text-decoration-none">Services</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Projects</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Technology</a></li>
        </ul>

        {/* Logo */}
        <div className="text-center">
          <img src="/JV-Logo.png" alt="Jenika Ventures" height="80px" />
          {/* <p className="mb-0 small fw-bold text-uppercase">Jenika Ventures</p> */}
        </div>

        {/* Right Menu (desktop only) */}
        <ul className="d-none d-md-flex list-unstyled mb-0 gap-4 fw-semibold">
          <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Insights</a></li>
          <li><a href="#" className="text-dark text-decoration-none">Careers</a></li>
        </ul>

        {/* Hamburger (mobile only) */}
        <div className="d-md-none">
          <FaBars
            size={24}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`sidebar-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0"></h5>
          <FaTimes
            size={24}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
<div className="text-center">
          <img src="//JV-Logo.png" alt="Jenika Ventures" height="80px" />
          {/* <p className="mb-0 small fw-bold text-uppercase">Jenika Ventures</p> */}
        </div>
        <ul className="list-unstyled fw-semibold">
          <li className="pt-3" ><a href="#" className="text-dark text-decoration-none">Services</a></li>
          <li className="pt-3" ><a href="#" className="text-dark text-decoration-none">Projects</a></li>
          <li className="pt-3" ><a href="#" className="text-dark text-decoration-none">Technology</a></li>
          <li className="pt-3" ><a href="#" className="text-dark text-decoration-none">About Us</a></li>
          <li className="pt-3" ><a href="#" className="text-dark text-decoration-none">Insights</a></li>
          <li className="pt-3" ><a href="#" className="text-dark text-decoration-none">Careers</a></li>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
}

export default Navbar;
