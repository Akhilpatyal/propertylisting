import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function CustomNavbar() {
  const [show, setShow] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null); // 👈 new state

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="/JV-Logo.png" alt="Logo" width="150" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse className="d-none d-lg-flex justify-content-end">
            <Nav>
              <Nav.Link as={NavLink} to="/">
                HOME
              </Nav.Link>

              {/* ABOUT US dropdown */}
              <NavDropdown
                title="ABOUT US"
                id="aboutus-dropdown"
                show={hoveredDropdown === "about"}
                onMouseEnter={() => setHoveredDropdown("about")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/whoweare"
                  onClick={handleClose}
                >
                  WHO WE ARE
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/our-team"
                  onClick={handleClose}
                >
                  OUR TEAM
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/client-testimonial"
                  onClick={handleClose}
                >
                  CLIENT TESTIMONIALS
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/Collection/Plots"
                  onClick={handleClose}
                >
                  AWARDS & RECOGNITION
                </NavDropdown.Item>
              </NavDropdown>

              {/* PROJECT dropdown */}
              <NavDropdown
                title="PROJECT"
                id="project-dropdown"
                show={hoveredDropdown === "project"}
                onMouseEnter={() => setHoveredDropdown("project")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/Collection/Residential"
                  onClick={handleClose}
                >
                  Residential
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/Collection/Commercial"
                  onClick={handleClose}
                >
                  Commercial
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/Collection/Studio"
                  onClick={handleClose}
                >
                  Studio Apartments
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/Collection/Plots"
                  onClick={handleClose}
                >
                  Plots
                </NavDropdown.Item>
              </NavDropdown>

              {/* INSIGHTS dropdown */}
              <NavDropdown
                title="INSIGHTS"
                id="insights-dropdown"
                show={hoveredDropdown === "insights"}
                onMouseEnter={() => setHoveredDropdown("insights")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/insight/news&media"
                  onClick={handleClose}
                >
                  NEWS MEDIA
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blog" onClick={handleClose}>
                  BLOGS
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={NavLink} to="/career">
                CAREERS
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile view (click to open remains same) */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Navbar.Brand as={Link} to="/">
            <img src="/JV-Logo.png" alt="Logo" width="150" />
          </Navbar.Brand>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>
              Home
            </Nav.Link>

            <NavDropdown
              title="ABOUT US"
              id="offcanvas-about-dropdown"
              className="text-center"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/whoweare"
                onClick={handleClose}
              >
                WHO WE ARE
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/our-team"
                onClick={handleClose}
              >
                OUR TEAM
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/client-testimonial"
                onClick={handleClose}
              >
                CLIENT TESTIMONIALS
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Collection/Plots"
                onClick={handleClose}
              >
                AWARDS & RECOGNITION
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="PROJECT"
              id="offcanvas-project-dropdown"
              className="text-center"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/Collection/Residential"
                onClick={handleClose}
              >
                Residential
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Collection/Commercial"
                onClick={handleClose}
              >
                Commercial
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Collection/Studio"
                onClick={handleClose}
              >
                Studio Apartments
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Collection/Plots"
                onClick={handleClose}
              >
                Plots
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="INSIGHTS"
              id="offcanvas-insights-dropdown"
              className="text-center"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/Collection/Residential"
                onClick={handleClose}
              >
                NEWS MEDIA
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/blog" onClick={handleClose}>
                BLOGS
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/career" onClick={handleClose}>
              CAREERS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
              CONTACT US
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
