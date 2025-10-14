import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch } from "react-icons/fa";
import { PiClockClockwiseLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);
const NewMedia = () => {
  const blogs = [
    {
      id: 1,
      image: "/public/hydrabad.png",
      
      author: "Peush Jain",
      title: "Singapore's Xander, GIC buy Hyderabad's",
      description:
        "Signing a commercial lease is a critical step for any business, whether you are opening your first office or expanding…",
      readTime: "3 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 2,
      image: "/public/new2.png",
    
      author: "Peush Jain",
      title:
        "Metro Line 12 to benefit Thane, Kalyan, and Taloja",
      description:
        "In today’s fast-paced real estate market, data analytics has emerged as a game-changer, empowering businesses and investors to make smarter…",
      readTime: "3 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 3,
      image: "/public/new3.png",
      author: "Peush Jain",
      title: "Growth prospect for Indian real estate in 2024",
      description:
        "Leasing office space is a critical decision that can significantly impact your business’s operations, culture, and financial health. Whether you…",
      readTime: "2 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 4,
      image: "/public/ModernHome.png",
      
      author: "Peush Jain",
      title: "Top 5 Factors to Consider When Leasing Office Space",
      description:
        "Leasing office space is a critical decision that can significantly impact your business’s operations, culture, and financial health. Whether you…",
      readTime: "2 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 5,
      image: "/public/building.jpg",
  
      author: "Peush Jain",
      title: "Dwarka Expressway to further boost real estate prices i",
      description:
        "Leasing office space is a critical decision that can significantly impact your business’s operations, culture, and financial health. Whether you…",
      readTime: "2 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 6,
      image: "/public/building-2.jpg",
      author: "Peush Jain",
      title: "Premium housing sales grow in Pune",
      description:
        "Leasing office space is a critical decision that can significantly impact your business’s operations, culture, and financial health. Whether you…",
      readTime: "2 Min Read",
      date: "April 1, 2025",
    },
  ];

  return (
    <div>
      <div>
        <div
          className="object-fit-cover position-relative"
          style={{ height: "550px", width: "100vw" }}
        >
          <video
            className="object-fit-cover"
            style={{
              height: "550px",
              width: "100vw",
              filter: "brightness(0.6)",
            }}
            autoPlay
            loop
            muted
            src="/public/newsVideo.mp4"
          ></video>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <div>
            <div
              className="text-center pt-5 mt-5 mt-lg-0"
              style={{ fontFamily: "font1" }}
            >
              {/* First Line */}
              <div
                className="text-uppercase text-light"
                style={{
                  fontSize: "90px",
                  lineHeight: "8vw",
                }}
              >
                In the News
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container NewTag p-4 my-5 rounded d-flex align-items-center justify-content-between">
        {/* Left Section */}
        <div>
          <h2 className="h4 fw-bold text-dark mb-0">Media Relations Contact</h2>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          {/* Image */}
          <img
            src="/public/channelpartner.png" // Replace with your image path
            alt="Ayushi"
            className="rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />

          {/* Text */}
          <div className="d-flex flex-column">
            <span className="fw-semibold text-dark">Ayushi</span>
            <div className="blankDiv"></div>
            <span className="text-secondary small">Head - Media Relations</span>
            <a
              href="mailto:arun.chitnis@gmail.com"
              className="text-decoration-none text-primary small mt-1"
            >
              arun.chitnis@anarock.com
            </a>
          </div>
        </div>
      </div>

      {/* filter section */}
      <div className="container py-3">
        {/* Top Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
          {/* Left Section */}
          <div className="d-flex align-items-center">
            <h2 className="fw-bold text-dark mb-0 me-3">Filters</h2>
            <span className="text-secondary me-3">|</span>
            <button className="btn p-0 text-decoration-none text-purple fw-semibold">
              Clear Filters
            </button>
          </div>

          {/* Right Section */}
          <div className="d-flex flex-wrap align-items-center mt-3 mt-md-0">
            {/* Search Icon */}
            <div className="px-3">
              <FaSearch
                style={{
                  color: "#a136aa",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
            </div>

            {/* Category Dropdown */}
            <div className="px-3 border-start border-2 border-light-subtle">
              <span className="me-2 text-dark fw-semibold">Category</span>
              <select
                className="form-select form-select-sm d-inline-block"
                style={{ width: "120px" }}
              >
                <option>All</option>
                <option>News</option>
                <option>Events</option>
                <option>Reports</option>
              </select>
            </div>

            {/* Year Dropdown */}
            <div className="px-3 border-start border-2 border-light-subtle">
              <span className="me-2 text-dark fw-semibold">Year</span>
              <select
                className="form-select form-select-sm d-inline-block"
                style={{ width: "80px" }}
              >
                <option>All</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div
          style={{
            height: "2px",
            background:
              "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4, #007bff)",
          }}
        ></div>

        <div className="my-5">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6 blog-card" key={blog.id}>
                <div className="card shadow-sm border-0">
                  <div className="card-img-wrapper rounded-2 overflow-hidden">
                    <img
                      src={blog.image}
                      className="card-img-top"
                      alt={blog.title}
                    />
                  </div>
                  <div className="card-body">
                    <div className="text-uppercase small text-muted fw-semibold mb-2">
                       Author – {blog.author}
                    </div>
                    <h5 className="card-title fw-bold">{blog.title}</h5>
                    <p className="card-text text-muted">{blog.description}</p>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex justify-content-between text-muted small">
                    <span>
                      <PiClockClockwiseLight /> {blog.readTime}
                    </span>
                    <span>
                      <SlCalender /> {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bottom section */}

      <div className="container py-4">
        {/* Top gradient line */}
        <div
          className="mb-4"
          style={{
            height: "2px",
            background:
              "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4, #007bff)",
          }}
        ></div>

        {/* Press Kit Row */}
        <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
          <div
            className="d-flex align-items-center"
            style={{ borderLeft: "4px solid #9c27b0" }}
          >
            <div
              style={{
                height: "100%",
                width: "4px",
                backgroundColor: "#9c27b0",
                marginRight: "10px",
              }}
            ></div>
            <h5
              className="mb-0 text-uppercase fw-bold"
              style={{ color: "#9c27b0" }}
            >
              Press Kit
            </h5>
          </div>
          <button
            className="btn border-0 text-dark"
            style={{
              backgroundColor: "#f5c518",
              fontWeight: "500",
              fontSize: "25px",
            }}
          >
            Download <span className="ms-1">›</span>
          </button>
        </div>

        {/* Management Profiles Row */}
        <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
          <div
            className="d-flex align-items-center"
            style={{ borderLeft: "4px solid #9c27b0" }}
          >
            <div
              style={{
                height: "100%",
                width: "4px",
                backgroundColor: "#9c27b0",
                marginRight: "10px",
              }}
            ></div>
            <h5
              className="mb-0 text-uppercase fw-bold"
              style={{ color: "#9c27b0" }}
            >
              Management Profiles
            </h5>
          </div>
          <button
            className="btn border-0 text-dark"
            style={{
              backgroundColor: "#f5c518",
              fontWeight: "500",
              fontSize: "25px",
            }}
          >
            View Profiles <span className="ms-1">›</span>
          </button>
        </div>

        {/* Bottom gradient line */}
        <div
          className="mt-4"
          style={{
            height: "2px",
            background:
              "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4, #007bff)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default NewMedia;
