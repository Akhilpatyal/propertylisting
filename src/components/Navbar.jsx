import React, { useState } from "react";
import {
  FaPhone,
  FaNewspaper,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const tabs = [
    {
      label: "Developers",
      img: "/start-image.png",
      content: [
        "Middle East",
        "Second Homes",
        "Luxury Homes",
        "Business Solutions",
      ],
    },
    {
      label: "Channel Partners",
      img: "/channelpartner.png",
      content: ["Digital Agency", "Creative Agency", "Post Sales"],
    },
    {
      label: "Corporates",
      img: "/01.jpg",
      content: ["Home Solutions", "Luxury Homes", "Business Solutions"],
    },
    {
      label: "Consumers",
      img: "/02.jpg",
      content: ["Middle East", "Creative Agency", "Second Homes"],
    },
  ];

  const projects = [
    {
      title: "Residential",
      desc: "Customized solutions for your unique business needs!",
      img: "/public/Pune.png",
    },
    {
      title: "Commercial",
      desc: "Finding the perfect space for your business!",
      img: "/public/Chennai.png",
    },
    {
      title: "Trespect",
      desc: "Find your abode of happiness!",
      img: "/public/Delhi.png",
    },
  ];

  // Mobile sidebar menu items
  const menuItems = [
    { label: "Services", submenu: ["All Services", "Developer", "Channel Partner"] },
    { label: "Projects", submenu: ["Projects Lists", "Residential", "Commercial"] },
    { label: "Technology", submenu: ["All Services", "Developer", "Channel Partner"]},
    { label: "About Us", submenu: ["Company", "Team", "Culture"] },
    { label: "Insights", submenu: ["Blogs", "Case Studies"] },
    { label: "Careers"},
  ];

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: "0px",
        zIndex: 99,
        backgroundColor: "white",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center px-4 py-2 ">
        <div className="d-flex gap-3">
          <a href="#" className="text-decoration-none text-dark">
            <FaNewspaper className="me-1" style={{ color: "#cb2d38" }} /> Media
          </a>
          <a href="#" className="text-decoration-none text-dark">
            <FaPhone className="me-1 rotate95" style={{ color: "#cb2d38" }} /> Contact
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
        <ul className="d-none d-md-flex list-unstyled mb-0 gap-4 ">
          <li className="position-relative dropdown-hover">
            <a href="#" className="text-dark text-decoration-none fs-20">
              Services
            </a>
            <div className=" mega-menu shadow p-4">
              <h2 className="pb-2">How Can We Help You?</h2>
              <div className="row align-items-center align-items-center">
                {/* Left Side */}
                <div className="col-md-4 text-center text-md-start">
                  <div className="d-flex flex-wrap flex-column gap-2">
                    {tabs.map((tab, i) => (
                      <div
                        key={i}
                        className={`px-4 py-2 border rounded cursor-pointer ${
                          activeTab === i ? "bg-dark text-white" : "bg-white"
                        }`}
                        style={{
                          minWidth: "150px",
                          textAlign: "center",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={() => setActiveTab(i)}
                      >
                        {tab.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side */}
                <div className="col-md-8 text-start mt-md-0 d-flex justify-content-between align-items-center">
                  <ul className="list-unstyled w-100 d-flex justify-content-between align-items-center flex-column">
                    {tabs[activeTab].content.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* Projects with Mega Menu */}
          <li className="position-relative dropdown-hover">
            <a href="#" className="text-dark text-decoration-none fs-20">
              Projects
            </a>

            <div className=" mega-menu shadow p-4">
              <h2 className="pb-2">Explore our Projects</h2>
              <div className="row g-4">
                {projects.map((item, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="card h-100 border-0">
                      <img
                        src={item.img}
                        className="card-img-top rounded"
                        alt={item.title}
                      />
                      <div className="card-body px-0">
                        <h5 className="fw-bold">{item.title}</h5>
                        <p className="text-muted small">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>

          <li>
            <a href="#" className="text-dark text-decoration-none fs-20">
              Technology
            </a>
          </li>
        </ul>

        {/* Logo */}
        <div className="text-center">
          <img src="/JV-Logo.png" alt="Jenika Ventures" height="80px" />
        </div>

        {/* Right Menu (desktop only) */}
        <ul className="d-none d-md-flex list-unstyled mb-0 gap-4">
          <li>
            <a href="#" className="text-dark text-decoration-none fs-20">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none fs-20">
              Insights
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none fs-20">
              Careers
            </a>
          </li>
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
          <img src="/JV-Logo.png" alt="Jenika Ventures" height="80px" />
        </div>
        <ul className="list-unstyled fw-semibold">
          {menuItems.map((item, i) => (
            <li key={i} className="pt-3">
              <button
                className="dropdown-toggle-btn"
                onClick={() => item.submenu && toggleDropdown(item.label)}
              >
                {item.label}
                {item.submenu && (
                  <FaChevronDown
                    className={`chevron-icon ${
                      activeDropdown === item.label ? "rotate" : ""
                    }`}
                  />
                )}
              </button>
              {item.submenu && activeDropdown === item.label && (
                <ul className="submenu list-unstyled ps-3">
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-dark text-decoration-none">
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}

export default Navbar;
