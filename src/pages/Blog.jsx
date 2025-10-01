import { useEffect } from "react";
import { PiClockClockwiseLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Blog = () => {
  useEffect(() => {
    gsap.from(".blog-card", {
      opacity: 0,
      y: 50,
      stagger: 0.5, // delay between cards
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".blog-card",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".split").forEach((el) => {
        let split = new SplitText(el, {
          type: "words,lines",
          linesClass: "line",
        });

        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: el, // 👈 har element ka trigger usi pe hoga
            start: "top 80%", // jab ~80% viewport me aayega tab chalega
            toggleActions: "play none none none",
          },
          duration: 2,
          yPercent: 100,
          opacity: 0,
          stagger: 0.3,
          ease: "expo.out",
        });
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  const blogs = [
    {
      id: 1,
      image: "/05.png",
      category: "Commercial Leasing & Advisory",
      author: "Peush Jain",
      title: "What Are the Key Clauses to Look for in a Commercial Lease?",
      description:
        "Signing a commercial lease is a critical step for any business, whether you are opening your first office or expanding…",
      readTime: "3 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 2,
      image: "/06.png",
      category: "Commercial Leasing & Advisory",
      author: "Peush Jain",
      title:
        "Understanding the Role of Data Analytics in Real Estate Decisions",
      description:
        "In today’s fast-paced real estate market, data analytics has emerged as a game-changer, empowering businesses and investors to make smarter…",
      readTime: "3 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 3,
      image: "/03.png",
      category: "Commercial Leasing & Advisory",
      author: "Peush Jain",
      title: "Top 5 Factors to Consider When Leasing Office Space",
      description:
        "Leasing office space is a critical decision that can significantly impact your business’s operations, culture, and financial health. Whether you…",
      readTime: "2 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 4,
      image: "/07.png",
      category: "Commercial Leasing & Advisory",
      author: "Peush Jain",
      title: "Top 5 Factors to Consider When Leasing Office Space",
      description:
        "Leasing office space is a critical decision that can significantly impact your business’s operations, culture, and financial health. Whether you…",
      readTime: "2 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 5,
      image: "/08.png",
      category: "Commercial Leasing & Advisory",
      author: "Peush Jain",
      title: "Top 5 Factors to Consider When Leasing Office Space",
      description:
        "Leasing office space is a critical decision that can significantly impact your business’s operations, culture, and financial health. Whether you…",
      readTime: "2 Min Read",
      date: "April 1, 2025",
    },
    {
      id: 6,
      image: "/04.jpg",
      category: "Commercial Leasing & Advisory",
      author: "Peush Jain",
      title: "Top 5 Factors to Consider When Leasing Office Space",
      description:
        "Leasing office space is a critical decision that can significantly impact your business’s operations, culture, and financial health. Whether you…",
      readTime: "2 Min Read",
      date: "April 1, 2025",
    },
  ];
  return (
    <div>
      <div className="container py-4">
        <div className="row gx-5">
          {/* Left Featured Blog */}
          <div className="col-lg-8">
            <div className="blog-featured shadow-soft rounded-20 overflow-hidden">
              <div className="featured-image">
                <img
                  src="/banner-6.png"
                  className="img-fluid w-100"
                  alt="Featured Blog"
                />
              </div>

              <div
                className="featured-content p-4"
                style={{
                  marginTop: "-40px",
                  background: "#fff",
                  borderRadius: "12px",
                }}
              >
                <div className="meta mb-2 text-uppercase small fw-semibold text-muted">
                  <span className="me-2">Real Estate</span> |
                  <span className="ms-2">Author – Rohin Shah</span>
                </div>

                <h2 className="fw-bold mb-3 split">
                  Britain’s Tax Trap Tightens: Why Investors Are Rethinking the
                  UK
                </h2>

                <p className="text-muted fs-5 mb-3 split">
                  With over three decades spent working in the UK and global
                  property markets, I’ve seen firsthand how quickly policy
                  shifts…
                </p>

                <div className="d-flex align-items-center text-muted small">
                  <span>
                    <PiClockClockwiseLight /> 4 Min Read
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <SlCalender /> June 18, 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="spacer-single"></div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="widget widget-post">
              <h4 className="split">Recent Posts</h4>
              <ul className="de-post-type-1">
                <li className="d-flex blog-card">
                  <div className="d-image">
                    <img src="/02.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="d-content">
                    <a href="#">
                      <h5>Exploring the Rise of Unique and Lifestyle Hotels</h5>
                    </a>
                    <div className="d-date">
                      <SlCalender /> January 15, 2023
                    </div>
                  </div>
                </li>
                <li className="d-flex blog-card">
                  <div className="d-image">
                    <img src="/01.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="d-content">
                    <a href="#">
                      <h5>
                        Hotels are Adapting to Modern Traveler Preferences
                      </h5>
                    </a>
                    <div className="d-date">
                      <SlCalender /> January 15, 2023
                    </div>
                  </div>
                </li>
                <li className="d-flex blog-card">
                  <div className="d-image">
                    <img src="/02.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="d-content">
                    <a href="#">
                      <h5>
                        Innovative Marketing Strategies for Boutique Hotels
                      </h5>
                    </a>
                    <div className="d-date">
                      <SlCalender /> January 15, 2023
                    </div>
                  </div>
                </li>
                <li className="d-flex blog-card">
                  <div className="d-image">
                    <img src="/01.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="d-content">
                    <a href="#">
                      <h5>Transforming Common Spaces in Modern Hotels</h5>
                    </a>
                    <div className="d-date">
                      <SlCalender /> January 15, 2023
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                      {blog.category} | Author – {blog.author}
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
    </div>
  );
};

export default Blog;
