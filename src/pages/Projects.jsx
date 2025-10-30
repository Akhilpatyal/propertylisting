import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaBriefcase, FaRegBuilding } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import projectsData from "../assets/properties.json"; // import mock data
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const [searchParams] = useSearchParams();
  const propertyType = searchParams.get("propertytype");

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    configuration: "",
    location: "",
  });


    useEffect(() => {
      // --- LENIS SMOOTH SCROLL SETUP ---
      const lenis = new Lenis({
        smooth: true,
        lerp: 0.08,
        direction: "vertical",
        smoothTouch: true,
      });
  
      // keep Lenis and ScrollTrigger in sync
      lenis.on("scroll", ScrollTrigger.update);
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
  
      // normalize scroll for GSAP
      ScrollTrigger.normalizeScroll(true);
  
      // Reset scroll triggers on resize
      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);
  
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
  
      // --- IMAGE REVEAL ---
      gsap.utils.toArray(".text-drop__img-box").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
  
      // --- PARALLAX EFFECT ---
      gsap.utils.toArray(".has-prlx").forEach((el) => {
        gsap.to(el, {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
  
      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((t) => t.kill());
        lenis.destroy();
      };
    }, []);
    useEffect(() => {
      // Wait for fonts to load before animation
      document.fonts.ready.then(() => {
        gsap.set(".split2", { opacity: 1 });
  
        const elements = document.querySelectorAll(".split2");
  
        elements.forEach((el, i) => {
          // Split text into words
          const split = new SplitType(el, { types: "words", tagName: "span" });
  
          // Animate words
          gsap.from(split.words, {
            opacity: 0,
            y: 50, // slide up
            duration: 1,
            ease: "sine.out",
            stagger: 0.2,
            delay: i * 0.3,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          });
        });
      });
    }, []);
  // Filter projects based on URL + selected filters
  useEffect(() => {
    let result = projectsData;

    if (propertyType) {
      result = result.filter(
        (p) => p.type.toLowerCase() === propertyType.toLowerCase()
      );
    }

    if (filters.city) {
      result = result.filter(
        (p) => p.city.toLowerCase() === filters.city.toLowerCase()
      );
    }

    if (filters.configuration) {
      result = result.filter(
        (p) =>
          p.configuration &&
          p.configuration.toLowerCase() === filters.configuration.toLowerCase()
      );
    }

    if (filters.location) {
      result = result.filter(
        (p) => p.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    setFilteredProjects(result);
  }, [propertyType, filters]);

  // Handle dropdown change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Banner */}
      <div className="CareerBanner">
        <h1 className="split2 ">{propertyType} Projects</h1>
        <p className="text-drop__line split2">
          Browse through our diverse portfolio
        </p>
      </div>

      {/* Filter Bar */}
      <div className="container">
        <div className="filter-bar">
          <h2 className="filter-title">Filter By</h2>

          <div className="filter-controls">
            {/* City */}
            <div className="filter-select">
              <select name="city" onChange={handleFilterChange}>
                <option value="">City</option>
                {[...new Set(projectsData.map((p) => p.city))].map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
              <FaLocationDot className="select-icon" />
            </div>

            {/* Location */}
            <div className="filter-select">
              <select name="location" onChange={handleFilterChange}>
                <option value="">Location</option>
                {[...new Set(projectsData.map((p) => p.location))].map(
                  (loc) => (
                    <option key={loc}>{loc}</option>
                  )
                )}
              </select>
              <FaRegBuilding className="select-icon" />
            </div>

            {/* Configuration */}
            <div className="filter-select">
              <select name="configuration" onChange={handleFilterChange}>
                <option value="">Configuration</option>
                {[...new Set(projectsData.map((p) => p.configuration))].map(
                  (config) =>
                    config !== "NA" && <option key={config}>{config}</option>
                )}
              </select>
              <FaBriefcase className="select-icon" />
            </div>
          </div>

          <button className="search-btn">
            Search &nbsp;
            <CiSearch />
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container py-5">
        <div className="row gy-5">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div className="col-sm-4" key={project.id}>
                <div className="cards-3 section-gray  text-drop__img-box">
                  <div className="card card-blog">
                    <div className="card-image news-box-items">
                      <a href="#">
                        <div className="news-image">
                          <img src={project.image} alt={project.name} style={{height:"264px"}}/>
                        </div>
                      </a>
                      <div className="ripple-cont"></div>
                    </div>

                    <div className="table p-3">
                      <div className="ele-1">
                        <h6 className="category text-info">
                          {project.city} | {project.location}
                        </h6>
                        <p className="card-description fs-4">
                          {project.name}
                        </p>
                        <p className="fw-bold">{project.price}</p>
                        <div className="pt-3">
                        <Link to={`/projects/${project.id}`}>View Details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No projects found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
