import { useEffect } from "react";
import { PiClockClockwiseLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Blog = () => {

  useEffect(() => {
    gsap.from(".blog-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2, // delay between cards
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".blog-card",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    // 
          // --- TEXT ANIMATION ---
      gsap.utils.toArray(".text-drop__line").forEach((line, i) => {
        gsap.fromTo(
          line,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1, // slight stagger
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    // 
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
          duration: 0.1,
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
       <div className="BlogBanner">
        <h1 className="text-drop__line ">Blogs</h1>
      </div>
      <div className="container py-4">
        <div className="row gx-5">
          {/* Left Featured Blog */}
          <div className="col-lg-8">
            <div className="my-2">
              <div className="row g-4">
                {blogs.map((blog) => (
                  <div className="col-lg-6 col-md-6 blog-card" key={blog.id}>
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
                        <Link to={`/blog/${blog.id}`}><h5 className="card-title fw-bold">{blog.title}</h5></Link>
                        
                        <p className="card-text text-muted">
                          {blog.description}
                        </p>
                        
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
            <div className="spacer-single"></div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="widget widget-post sticky-top">
              <h4 className="text-drop__line">Recent Posts</h4>
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
      </div>
    </div>
  );
};

export default Blog;
