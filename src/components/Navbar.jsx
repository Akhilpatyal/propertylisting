import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomNavbar() {
  const [show, setShow] = useState(false);

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
              <Nav.Link as={NavLink} to="/">HOME</Nav.Link>

              {/* Dropdown for Collection */}
              <NavDropdown title="ABOUT US" id="collection-dropdown">
                <NavDropdown.Item as={NavLink} to="/whoweare" onClick={handleClose}>
                  WHO WE ARE
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/our-team" onClick={handleClose}>
                  OUR TEAM
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Collection/Studio" onClick={handleClose}>
                  CLIENT TESTIMONIALS
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Collection/Plots" onClick={handleClose}>
                  Awards and Recognition
                </NavDropdown.Item>
              </NavDropdown>
              {/* Dropdown for Collection */}
              <NavDropdown title="PROJECT" id="collection-dropdown">
                <NavDropdown.Item as={NavLink} to="/Collection/Residential" onClick={handleClose}>
                  Residential

                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Collection/Commercial" onClick={handleClose}>
                  Commercial
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Collection/Studio" onClick={handleClose}>
                  Studio Apartments
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Collection/Plots" onClick={handleClose}>
                  Plots
                </NavDropdown.Item>
              </NavDropdown>
              {/* Dropdown for Collection */}
              <NavDropdown title="INSIGHTS" id="collection-dropdown">
                <NavDropdown.Item as={NavLink} to="/Collection/Residential" onClick={handleClose}>
                 NEWS MEDIA
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/blog" onClick={handleClose}>
                  BLOGS
                </NavDropdown.Item>
                
              </NavDropdown>

              <Nav.Link as={NavLink} to="/CAREERS">CAREERS</Nav.Link>
              <Nav.Link as={NavLink} to="/Contact">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas menu for small screens */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Navbar.Brand as={Link} to="/">
            <img src="/JV-Logo.png" alt="Logo" width="150" />
          </Navbar.Brand>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>Home</Nav.Link>

            {/* Offcanvas Dropdown for Collection */}
            <NavDropdown title="ABOUT US" id="offcanvas-collection-dropdown" className="text-center">
              <NavDropdown.Item as={NavLink} to="/whoweare" onClick={handleClose}>
                WHO WE ARE
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Collection/Commercial" onClick={handleClose}>
                OUR TEAM
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Collection/Studio" onClick={handleClose}>
                CLIENT TESTIMONIALS
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Collection/Plots" onClick={handleClose}>
                Awards and Recognition
              </NavDropdown.Item>
            </NavDropdown>
            {/* Offcanvas Dropdown for Collection */}
            <NavDropdown title="PROJECT" id="offcanvas-collection-dropdown" className="text-center">
              <NavDropdown.Item as={NavLink} to="/Collection/Residential" onClick={handleClose}>
                Residential
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Collection/Commercial" onClick={handleClose}>
                commercial
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Collection/Studio" onClick={handleClose}>
                Studio Apartments
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Collection/Plots" onClick={handleClose}>
                Plots
              </NavDropdown.Item>
            </NavDropdown>
            {/* Offcanvas Dropdown for Collection */}
            <NavDropdown title="INSIGHTS" id="offcanvas-collection-dropdown" className="text-center">
              <NavDropdown.Item as={NavLink} to="/Collection/Residential" onClick={handleClose}>
                NEWS MEDIA
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/blog" onClick={handleClose}>
                BLOGS
              </NavDropdown.Item>
              
            </NavDropdown>

            <Nav.Link as={NavLink} to="/About" onClick={handleClose}>CAREERS</Nav.Link>
            <Nav.Link as={NavLink} to="/Contact" onClick={handleClose}>Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
 