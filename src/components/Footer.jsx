import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="mainfooter py-5">
      <div className="container">
        <div className="row ">
          {/* Left Column */}
          <div className="col-lg-4 col-12 mb-4">
            {/* Logo */}
            {/* <h4 className="fw-bold mb-3">ANAROCK</h4> */}
            <img
              src="/Group-2.png"
              alt="Anarock"
              height="100"
              className="ms-4"
            />
            {/* <p className="mb-0 small fw-bold text-uppercase">Jenika Ventures</p> */}

            {/* Social Links */}
            <div className="d-flex gap-3 my-3">
              <a href="#" className="text-light">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light">
                <FaTwitter />
              </a>
              <a href="#" className="text-light">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-light">
                <FaInstagram />
              </a>
              <a href="#" className="text-light">
                <FaYoutube />
              </a>
            </div>

            {/* Newsletter */}
            <p className="fw-semibold">
              Stay updated with latest trends & reports.
            </p>
            <div className=" form input-group">
              <input
                type="email"
                className="form-control border"
                placeholder="Email address"
              />
              <button className="btn border-0">Subscribe</button>
            </div>
          </div>
          {/* About Us */}
          <div className="col-lg-2 col-6 col-md-6 mb-4">
            <h6 className="fw-bold">About Us</h6>
            <ul className="list-unstyled ">
              <li>
                <a href="#" className="link link--metis">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Management Team
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Awards & Recognition
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  CSR
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div className="col-lg-2 col-6 col-md-6 mb-4">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="link link--metis">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Land Services
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Retail
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Investment Banking
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Hospitality
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  View All
                </a>
              </li>
            </ul>
          </div>
          {/* Technology */}
          <div className="col-lg-2 col-6 col-md-6 mb-4">
            <h6 className="fw-bold">Technology</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="link link--metis">
                  ACRM
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  ASTRA
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  ACP
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  ANACITY
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  myHQ
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Upflex India
                </a>
              </li>
            </ul>
            <h6 className="fw-bold mt-3">Media</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="link link--metis">
                  In the News
                </a>
              </li>
            </ul>
          </div>
          {/* Projects */}
          <div className="col-lg-2 col-6 col-md-6 mb-4">
            <h6 className="fw-bold">Projects</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="link link--metis">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Trespect
                </a>
              </li>
            </ul>
            <h6 className="fw-bold">Insights</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="link link--metis">
                  Research Reports
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Knowledge Exchange
                </a>
              </li>
              <li>
                <a href="#" className="link link--metis">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-top pt-3 mt-4 text-center small text-light">
          We value diversity within Jenika Ventures and are committed to
          offering equal opportunities in employment...
        </div>
      </div>
      
      <ScrollToTop/>
    </footer>
  );
}
