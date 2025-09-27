import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showInsight, setShowInsight] = useState(false);

  // Mobile menu data
  const menuItems = [
    { label: "HOME" },
    {
      label: "ABOUT US",
      submenu: [
        "WHO WE ARE",
        "OUR TEAM",
        "CLIENT TESTIMONIALS",
        "Awards and Recognition",
      ],
    },
    {
      label: "PROJECT",
      submenu: ["Residential", "Commercial", "Studio Apartments", "Plots"],
    },
    { label: "INSIGHTS", submenu: ["NEWS MEDIA", "BLOGS"] },
    { label: "CAREERS" },
    { label: "CONTACT US" },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        className="shadow-sm py-2 px-4"
        sticky="top"
        style={{ background: "#fff", zIndex: 99 }}
      >
        <Container className="d-flex justify-content-center align-items-center">
          {/* Logo */}
          <Navbar.Brand as={NavLink} to={"/"} className="me-auto">
            <img src="/JV-Logo.png" alt="Jenika Ventures" height="80px" />
          </Navbar.Brand>
          {/* Left Nav (desktop) */}
          <Nav className="d-none d-md-flex flex-row gap-4">
            <Nav.Link as={NavLink} to={"/"} className="fs-20 text-dark">
              HOME
            </Nav.Link>

            {/* ABOUT US with hover dropdown */}
            <NavDropdown
              title={<span className="fs-20 text-dark">ABOUT US</span>}
              id="about-dropdown"
              className="custom-dropdown"
              show={showAbout}
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <NavDropdown.Item href="#">WHO WE ARE</NavDropdown.Item>
              <NavDropdown.Item href="#">OUR TEAM</NavDropdown.Item>
              <NavDropdown.Item href="#">CLIENT TESTIMONIALS</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Awards and Recognition
              </NavDropdown.Item>
            </NavDropdown>

            {/* PROJECT dropdown */}
            <NavDropdown
              title={<span className="fs-20 text-dark">PROJECT</span>}
              id="project-dropdown"
              className="custom-dropdown"
              show={showProject}
              onMouseEnter={() => setShowProject(true)}
              onMouseLeave={() => setShowProject(false)}
            >
              <NavDropdown.Item href="#">Residential</NavDropdown.Item>
              <NavDropdown.Item href="#">Commercial</NavDropdown.Item>
              <NavDropdown.Item href="#">Studio Apartments</NavDropdown.Item>
              <NavDropdown.Item href="#">Plots</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="fs-20 text-dark">INSIGHTS</span>}
              id="insights-dropdown"
              className="custom-dropdown"
              show={showInsight}
              onMouseEnter={() => setShowInsight(true)}
              onMouseLeave={() => setShowInsight(false)}
            >
              <NavDropdown.Item >NEWS MEDIA</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/blog"}>BLOGS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="fs-20 text-dark">
              CAREERS
            </Nav.Link>
            <Nav.Link href="#" className="fs-20 text-dark">
              CONTACT US
            </Nav.Link>
          </Nav>

          {/* Mobile Hamburger */}
          <div className="d-md-none">
            <FaBars
              size={24}
              className="cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          </div>
        </Container>
      </Navbar>

      {/* Offcanvas (Mobile Menu) */}
      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="start"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img src="/JV-Logo.png" alt="Jenika Ventures" height="60px" />
          </Offcanvas.Title>
          <FaTimes size={24} onClick={() => setShowMenu(false)} />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled fw-semibold">
            {menuItems.map((item, i) => (
              <li key={i} className="pt-3">
                {item.submenu ? (
                  <details>
                    <summary className="d-flex justify-content-between align-items-center">
                      {item.label}
                      <FaChevronDown />
                    </summary>
                    <ul className="list-unstyled ps-3">
                      {item.submenu.map((sub, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="text-dark text-decoration-none"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a as={NavLink} to={"/blog"} className="text-dark text-decoration-none">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
